var Emitter = require('y-emitter'),
    Resolver = require('y-resolver'),
    Su = require('u-su'),
    wrap = require('y-walk').wrap,
    Cb = require('y-callback/node'),
    Lock = require('y-lock'),
    Hsm = require('hsm'),
    
    apply = require('u-proto/apply'),
    until = require('u-proto/until'),
    walk = require('u-proto/walk'),
    
    zlib = require('zlib'),
    assert = require('assert'),
    fs = require('fs'),
    p = require('path'),
    http = require('http'),
    
    resolver = Su(),
    emitter = Su(),
    cbcs = Su(),
    e404 = Su(),
    
    template = fs.readFileSync(p.resolve(__dirname,'template.html')).toString(),
    args = {
      cache: {},
      packageCache: {},
      fullPaths: true
    },
    
    getConf,build,watch,lock,
    Wapp;

// Wapp Object

getConf = function(location){
  var conf = {
        scripts: {main: './main.js'},
        folders: {
          build:      './build',
          files:      './files'
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
  
  conf[apply](opt);
  
  keys = Object.keys(conf.folders);
  for(i = 0;i < keys.length;i++){
    conf.folders[keys[i]] = p.resolve(location,conf.folders[keys[i]]);
  }
  
  keys = Object.keys(conf.scripts);
  for(i = 0;i < keys.length;i++){
    conf.scripts[keys[i]] = p.resolve(location,conf.scripts[keys[i]]);
  }
  
  return conf;
};

module.exports = Wapp = function(location,server,path){
  var hsm = new Hsm(server),
      folders,conf,i,j,keys;
  
  Emitter.Target.call(this,emitter);
  
  this[cbcs] = [];
  
  if(typeof location != 'string'){
    path = server;
    server = location;
    location = '';
  }
  
  conf = getConf(location);
  
  path = path || '';
  folders = conf.folders;
  
  keys = Object.keys(folders);
  for(j = 0;j < keys.length;j++){
    i = keys[j];
    this[cbcs].push(
      hsm.on(path + '/.' + i,onFile,folders[i],conf.mime)
    );
  }
  
  this[cbcs].push(
    hsm.on(path,onRequest,this[emitter],folders,path)
  );
  
};

Wapp.prototype = new Emitter.Target();
Wapp.prototype.constructor = Wapp;

// Build

Wapp.lock = lock = new Lock();

function complete(n){
  return (n >= 10 ? '' : '0') + n;
}

build = wrap(function*(file,folder,name,log,w){
  var browserify = require('browserify'),
      regenerator = require('regenerator'),
      
      b,bdl,cb,baseName,d,watchify,res;
  
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
  
  try{
    
    res = yield {
      close: bdl.pipe(fs.createWriteStream(baseName + '.js'))[until]('close'),
      error: bdl[until]('error')
    };
    
    if(res[0] == 'error') throw res[1][0];
    
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
    
  }catch(e){
    
    if(log){
      console.log('\u001b[91mnot ok\u001b[0m');
      console.log('\n' + e.stack + '\n');
    }
    
  }
  
  return w;
});

watch = wrap(function*(file,folder,name,log){
  var w,uu;
  
  yield lock.take();
  w = yield build(file,folder,name,log,true);
  lock.give();
  
  uu = w[until]('update');
  while(true){
    yield uu;
    uu = w[until]('update');
    
    yield lock.take();
    yield build(file,folder,name,log,w);
    lock.give();
  }
  
});

Wapp.build = wrap(function*(location,keepOn,log){
  var conf = getConf(location),
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

function* onFile(e,c,location,mime){
  
  try{
    yield e.sendFile(p.resolve(location,e.parts.join('/')),mime);
  }catch(error){
    e[e404] = error;
    e.next();
  }
  
}

function* onRequest(e,c,emitter,folders,path){
  var req,res,e,i,m,cb,ext,ef,u,data,gzip,
      pathname,file,stats,date,code,gzlvl,
      query,headers,request,answer;
  
  req = e.request;
  res = e.response;
  u = e.url;
  
  pathname = e.parts.join('/');
  query = u.query;
  
  if(e[e404]) answer = {code: 404};
  else{
    if(pathname[0] == '.') return;
    if(pathname.indexOf('/.') != -1) return;
    if(!req.method.match(/^(GET|HEAD)$/)){
      answer = {
        code: 405,
        headers: {'Allow': 'GET, HEAD'}
      };
    }else{
      request = new Request(pathname,req.headers);
      emitter.give('request',request);
      answer = yield request[resolver].yielded;
    }
  }
  
  if(Math.floor(answer.code/100) == 3){
    if(answer.headers) res.writeHead(answer.code,answer.headers);
    else res.writeHead(answer.code);
    
    res.end();
    return;
  }
  
  if(answer.code != 200){
    answer.title = answer.code + '';
    answer.summary = http.STATUS_CODES[answer.code];
  }
  
  headers = answer.headers || {};
  
  if(query.format == 'json'){
    
    code = answer.code;
    gzlvl = answer.gzlvl;
    
    try{
      
      data = new Buffer(JSON.stringify({
        title: answer.title,
        summary: answer.summary,
        data: answer.data
      }));
      
    }catch(e){
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

// Request

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
      gzip: gzip,
      code: 200
    });
    
  }},
  
  sendCode: {value: function(code,headers){
    this[resolver].accept({
      code: code,
      headers: headers
    });
  }},
  
  useCache: {value: function(){
    this.sendCode(304);
  }}
  
});

