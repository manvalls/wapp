var Emitter = require('y-emitter'),
    Resolver = require('y-resolver'),
    Su = require('u-su'),
    wrap = require('y-walk').wrap,
    Cb = require('y-callback/node'),
    Lock = require('y-lock'),
    
    apply = require('u-proto/apply'),
    until = require('u-proto/until'),
    walk = require('u-proto/walk'),
    
    zlib = require('zlib'),
    assert = require('assert'),
    fs = require('fs'),
    p = require('path'),
    url = require('url'),
    http = require('http'),
    
    mime = require('./mime.js'),
    
    resolver = Su(),
    template = fs.readFileSync(p.resolve(__dirname,'template.html')).toString(),
    args = {
      cache: {},
      packageCache: {},
      fullPaths: true
    },
    
    getConf,build,watch,lock,
    Wapp;

// Wapp Object

getConf = wrap(function*(location){
  var conf = {
        scripts: {main: './main.js'},
        folders: {
          build:      './build',
          files:      './files',
          "default":  './default'
        },
        mime: {}
      },
      opt,file,cb,keys,i;
  
  location = p.resolve(location || '');
  
  try{
    opt = require(p.resolve(location,'client'));
  }catch(e){
    opt = {};
  }
  
  conf.mime[apply](mime);
  
  if(opt.folders) conf.folders[apply](opt.folders);
  if(opt.scripts) conf.scripts[apply](opt.scripts);
  if(opt.mime) conf.mime[apply](opt.mime);
  
  keys = Object.keys(conf.folders);
  for(i = 0;i < keys.length;i++){
    conf.folders[keys[i]] = p.resolve(location,conf.folders[keys[i]]);
  }
  
  keys = Object.keys(conf.scripts);
  for(i = 0;i < keys.length;i++){
    conf.scripts[keys[i]] = p.resolve(location,conf.scripts[keys[i]]);
  }
  
  return conf;
});

function Target(){}

Target.prototype = new Emitter.Target();

module.exports = Wapp = wrap(function*(location,server,path){
  var emitter = new Emitter(Target),
      conf;
  
  if(typeof location != 'string'){
    path = server;
    server = location;
    location = '';
  }
  
  conf = yield getConf(location);
  
  path = path || '/';
  if(path.charAt(0) != '/') path = '/' + path;
  if(path.charAt(path.length - 1) != '/') path += '/';
  
  server[walk](walker,[emitter,conf.folders,path,conf.mime]);
  
  return emitter.target;
});

Wapp.lock = lock = new Lock();
Wapp.Target = Target;

function complete(n){
  return (n > 10 ? '' : '0') + n;
}

build = wrap(function*(file,folder,name,log,w){
  var browserify = require('browserify'),
      regenerator = require('regenerator'),
      
      b,bdl,cb,baseName,d,watchify;
  
  if(log){
    d = new Date();
    process.stdout.write(
      complete(d.getHours()) + 
      ':' + 
      complete(d.getMinutes()) + 
      ' - Building \u001b[3m' + name + '\u001b[0m... ');
  }
  
  if(typeof w != 'object'){
    b = browserify(args);
    b.add(file);
    
    if(w) w = require('watchify')(b);
    else w = b;
  }
  
  bdl = w.bundle();
  baseName = p.resolve(folder,name);
  
  yield bdl.pipe(fs.createWriteStream(baseName + '.js'))[until]('close');
  
  yield fs. createReadStream(baseName + '.js').
            pipe(zlib.createGzip({level: 9})).
            pipe( fs.createWriteStream(baseName + '.js.gz') )
            [until]('close');
  
  fs.readFile(  baseName + '.js',cb = Cb()  );
  fs.writeFile( baseName + '.es5.js',
                regenerator.compile((yield cb).toString(),{includeRuntime: true}).code,
                cb = Cb() );
  
  yield cb;
  yield fs. createReadStream(baseName + '.es5.js').
            pipe(zlib.createGzip({level: 9})).
            pipe( fs.createWriteStream(baseName + '.es5.js.gz') )
            [until]('close');
  
  if(log) console.log('\u001b[92mok\u001b[0m');
  
  return w;
});

watch = wrap(function*(file,folder,name,log){
  var w;
  
  yield lock.take();
  w = yield build(file,folder,name,log,true);
  lock.give();
  
  while(true){
    yield w[until]('update');
    
    yield lock.take();
    yield build(file,folder,name,log,w);
    lock.give();
  }
  
});

Wapp.build = wrap(function*(location,keepOn,log){
  var conf = yield getConf(location),
      folders = conf.folders,
      scripts = conf.scripts,
      
      keys,i,cb,folder,file;
  
  if(log == null) log = true;
  
  try{
    fs.stat(folders.build,cb = Cb());
    assert((yield cb).isDirectory());
  }catch(e){
    fs.mkdir(folders.build,cb = Cb());
    yield cb;
  }
  
  folder = p.resolve(location,folders.build);
  if(keepOn) lock = new Lock();
  
  keys = Object.keys(scripts);
  for(i = 0;i < keys.length;i++){
    file = p.resolve(location,scripts[keys[i]]);
    if(keepOn) watch(file,folder,keys[i],log,lock);
    else{
      yield lock.take();
      yield build(file,folder,keys[i],log);
      lock.give();
    }
  }
  
});

// Web Server

function* walker(emitter,folders,path,mime){
  var req,res,e,i,m,cb,ext,ef,u,data,gzip,
      pathname,file,stats,date,code,gzlvl,
      query,headers,request,answer;
  
  e = yield this[until]('request');
  this[walk](walker,arguments);
  
  req = e[0];
  res = e[1];
  
  u = url.parse(req.url,true);
  pathname = decodeURI(u.pathname);
  query = u.query;
  
  i = pathname.indexOf(path);
  if(i != 0) return;
  
  pathname = pathname.slice(path.length);
  if(pathname.indexOf('/.') != -1) return;
  
  if(!req.method.match(/^(GET|HEAD)$/)){
    res.writeHead(405,{'Allow': 'GET, HEAD'});
    res.end();
    return;
  }
  
  m = pathname.match(/^~([^\/]*)\/(.*)/);
  
  if(m && folders[m[1]]) ef = file = p.resolve(folders[m[1]],m[2]);
  else if(pathname.match(/\.\w*$/)) ef = file = p.resolve(folders['default'] || '',pathname);
  
  if(ef) try{
    headers = {};
    
    while(m = ef.match(/([^\/]*)\.([^.]*)$/)){
      ef = m[1];
      ext = m[2];
      
      if(mime[ext]) headers[apply](mime[ext]);
    }
    
    headers['Content-Type'] = headers['Content-Type'] || 'application/octet-stream';
    
    if(
        req.headers['accept-encoding'] &&
        req.headers['accept-encoding'].indexOf('gzip') != -1
      ) try{
      
      fs.stat(file + '.gz',cb = Cb());
      stats = yield cb;
      
      file = file + '.gz';
      headers['Content-Encoding'] = 'gzip';
      
    }catch(e){}
    
    if(!stats){
      fs.stat(file,cb = Cb());
      stats = yield cb;
    }
    
    if(req.headers['if-modified-since']){
      date = new Date(req.headers['if-modified-since']);
      
      if(date >= stats.mtime){
        res.writeHead(304,headers);
        res.end();
        return;
      }
    }
    
    headers['Last-Modified'] = stats.mtime.toUTCString();
    
    if(req.method == 'HEAD'){
      res.writeHead(200,headers);
      res.end();
      return;
    }
    
    res.writeHead(200,headers);
    fs.createReadStream(file).pipe(res);
    
    return;
  }catch(e){ answer = {code: 404}; }
  
  if(!answer){
    request = new Request(pathname,req.headers);
    emitter.give('request',request);
    
    answer = yield request[resolver].yielded;
  }
  
  if(Math.floor(answer.code/100) == 3){
    res.writeHead(answer.code);
    res.end();
    return;
  }
  
  if(answer.code){
    answer.title = answer.code + '';
    if(!answer.summary) answer.summary = http.STATUS_CODES[answer.code];
  }else answer.code = 200;
  
  headers = {};
  
  if(query.format == 'json'){
    
    code = answer.code;
    delete answer.code;
    
    gzlvl = answer.gzip;
    delete answer.gzip;
    
    try{ data = new Buffer(JSON.stringify(answer)); }
    catch(e){
      data = new Buffer('{"title":"500","summary":"Couldn\'t stringify JSON data"}');
      code = 500;
    }
    
    headers['Content-Type'] = 'application/json;charset=utf-8';
    
  }else{
    
    answer.path = path;
    
    try{ answer.data = JSON.stringify(answer.data); }
    catch(e){
      answer.title = (answer.code = 500) + '';
      answer.summary = 'Couldn\'t stringify JSON data';
    }
    
    code = answer.code;
    gzlvl = answer.gzip;
    
    data = new Buffer(template.replace(/{{(\w*)}}/g,function(m,s1){
      return answer[s1];
    }));
    
    headers['Content-Type'] = 'text/html;charset=utf-8';
    
  }
  
  headers['Last-Modified'] = (new Date()).toUTCString();
  
  gzlvl = typeof gzlvl == 'number' ? gzlvl : emitter.target.gzipLevel;
  gzlvl = typeof gzlvl == 'number' ? gzlvl : this.gzipLevel;
  
  if(req.method == 'GET'){
    if(
      answer.gzip &&
      req.headers['accept-encoding'] &&
      req.headers['accept-encoding'].indexOf('gzip') != -1
    ){
      
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(code,headers);
      
      gzip = zlib.createGzip({level: answer.gzip});
      gzip.write(data);
      gzip.end();
      gzip.pipe(res);
      
    }else{
      
      res.writeHead(code,headers);
      res.end(data);
      
    }
  }else{
    
    res.writeHead(code,headers);
    res.end();
    
  }
};

function getLangs(str){
  var langs = [];
  
  str.replace(/(([a-z]+)[\-a-z]*)(;\s*q\s*=\s*([^,\s]+))?/gi,function(){
    langs.push({
      lang: arguments[1].toLowerCase(),
      primary: arguments[2].toLowerCase(),
      q: parseFloat(arguments[4] || 1)
    });
  });
  
  return langs;
}

function Request(pathname,headers){
  this[resolver] = new Resolver();
  
  if(headers['if-modified-since'])
  Object.defineProperty(this,'date',{value: new Date(headers['if-modified-since'])});
  else Object.defineProperty(this,'date',{value: new Date(0)});
  
  if(headers['accept-language'])
  Object.defineProperty(this,'langs',{value: getLangs(headers['accept-language'])});
  else Object.defineProperty(this,'langs',{value: []});
}

Object.defineProperties(Request.prototype,{
  
  answer: {value: function(title,summary,data,gzip){
    
    this[resolver].accept({
      title: title,
      summary: summary,
      data: data,
      gzip: gzip
    });
    
  }},
  
  sendCode: {value: function(code){
    this[resolver].accept({
      code: code
    });
  }},
  
  useCache: {value: function(){
    this.sendCode(304);
  }}
  
});

