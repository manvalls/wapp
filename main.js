var Emitter = require('y-emitter'),
    Resolver = require('y-resolver'),
    Su = require('u-su'),
    wrap = require('y-walk').wrap,
    Cb = require('y-callback/node'),
    
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
    
    getConf,
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

Wapp.Target = Target;

Wapp.build = wrap(function*(location){
  var browserify = require('browserify'),
      regenerator = require('regenerator'),
      
      conf = yield getConf(location),
      folders = conf.folders,
      scripts = conf.scripts,
      
      ret = [],
      keys,file,i,b,cb;
  
  try{
    fs.stat(folders.build,cb = Cb());
    assert((yield cb).isDirectory());
  }catch(e){
    fs.mkdir(folders.build,cb = Cb());
    yield cb;
  }
  
  keys = Object.keys(scripts);
  for(i = 0;i < keys.length;i++){
    file = p.resolve(location,scripts[keys[i]]);
    
    b = browserify(file).bundle();
    
    file = p.resolve(folders.build,keys[i]);
    ret.push(file + '.js');
    
    b.pipe(fs.createWriteStream(file + '.js'));
    yield b[until]('end');
    
    ret.push(file + '.js.gz');
    
    yield fs. createReadStream(file + '.js').
              pipe(zlib.createGzip({level: 9})).
              pipe( fs.createWriteStream(file + '.js.gz') )
              [until]('close');
    
    ret.push(file + '.es5.js');
    
    fs.readFile(file + '.js',cb = Cb());
    
    fs.writeFile( file + '.es5.js',
                  regenerator.compile((yield cb).toString(),{includeRuntime: true}).code,
                  cb = Cb());
    
    yield cb;
    
    ret.push(file + '.es5.js.gz');
    
    yield fs. createReadStream(file + '.es5.js').
              pipe(zlib.createGzip({level: 9})).
              pipe( fs.createWriteStream(file + '.es5.js.gz') )
              [until]('close');
  }
  
  return ret;
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

