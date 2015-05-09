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
    
    active = Su(),
    lang = Su(),
    
    path = Su(),
    byJson = '4qTpdL-kUvC6',
    
    template = fs.readFileSync(p.resolve(__dirname,'template.html')).toString(),
    shimedArgs = {cache:{}, packageCache: {}},
    args = {cache:{}, packageCache: {}},
    
    getConf,build,watch,createFolder,lock,
    dblWrite,cache,
    Wapp;

if(process.env.NODE_PATH) args.paths = process.env.NODE_PATH.split(':');
else args.paths = [];

args.paths.push(__dirname + '/node_modules');
shimedArgs.paths = args.paths;

// Wapp Object

function removeCharFromKeys(obj,base){
  var i,j,keys,data;
  
  keys = Object.keys(obj);
  for(j = 0;j < keys.length;j++){
    i = keys[j];
    
    data = obj[i];
    delete obj[i];
    i = i.replace('/','');
    
    if(base) obj[i] = p.resolve(base,data);
    else obj[i] = {
      title: data.title,
      summary: data.summary,
      data: data.data
    };
  }
  
}

getConf = function(opt){
  var conf = {
        scripts: {main: './main.js'},
        folders: {
          build:      './build',
          files:      './files'
        },
        mime: {}
      },
      file,cb,keys,j,i,data;
  
  opt = opt || '';
  
  if(typeof opt == 'string'){
    conf.baseDir = opt;
    
    try{ opt = require(p.resolve(opt,'client')); }
    catch(e){ opt = {}; }
  }
  
  conf[apply](opt);
  conf.baseDir = p.resolve(conf.baseDir);
  
  removeCharFromKeys(conf.folders,conf.baseDir);
  removeCharFromKeys(conf.scripts,conf.baseDir);
  if(conf.data) removeCharFromKeys(conf.data);
  
  return conf;
};

module.exports = Wapp = function(server,opt){
  Emitter.Target.call(this,emitter);
  this[emitter].syn('rsc ','top rsc');
  this[emitter].syn('path ','top path');
  
  this[cbcs] = [];
  if(arguments.length) this.attach(server,opt);
};

Wapp.prototype = new Emitter.Target();
Wapp.prototype.constructor = Wapp;

Object.defineProperties(Wapp.prototype,{
  
  detach: {value: function(){
    var cbc;
    while(cbc = this[cbcs].shift()) cbc.detach();
  }},
  
  attach: {value: wrap(function*(server,opt){
    var hsm = new Hsm(server),
        mime = {html: {}},
        location,path,log,
        folders,conf,i,j,keys,sdata;
    
    this.detach();
    
    opt = opt || {};
    path = opt.path || '';
    log = opt.fileLogger;
    
    conf = getConf(opt.client);
    folders = conf.folders;
    location = conf.baseDir;
    
    mime[apply](conf.mime);
    
    if('framing' in opt){
      
      if(opt.framing === false){
        mime.html['X-Frame-Options'] = 'DENY';
        mime.html['Content-Security-Policy'] = "frame-ancestors 'none'";
      }else if(opt.framing !== true){
        mime.html['X-Frame-Options'] = 'ALLOW-FROM ' + opt.framing;
        mime.html['Content-Security-Policy'] = 'frame-ancestors ' + opt.framing;
      }
      
    }else{
      
      mime.html['X-Frame-Options'] = 'SAMEORIGIN';
      mime.html['Content-Security-Policy'] = "frame-ancestors 'self'";
      
    }
    
    if(opt.cache !== false) yield Wapp.cache(opt.client,path,false);
    else sdata = conf.data
    
    keys = Object.keys(folders);
    for(j = 0;j < keys.length;j++){
      i = keys[j];
      this[cbcs].push(
        hsm.on(path + '/.' + i,onFile,folders[i],mime,log)
      );
    }
    
    this[cbcs].push(
      hsm.on(path,onRequest,this[emitter],folders,path,sdata,mime)
    );
    
  })}
  
});

// Build

Wapp.lock = lock = new Lock();

// - Utils

dblWrite = wrap(function*(file,data){
  var gz,cb;
  
  fs.writeFile(file,data,cb = new Cb());
  yield cb;
  
  gz = zlib.createGzip({level: 9});
  gz.write(data);
  gz.end();
  
  yield gz.pipe(fs.createWriteStream(file + '.gz'))[until]('finish');
  
});

function fillTemplate(data,path){
  var nd = {},
      result = {};
  
  nd.path = path;
  nd.code = data.code || 200;
  
  try{ nd.data = JSON.stringify(data.data); }
  catch(e){
    nd.title = (result.code = nd.code = 500) + '';
    nd.summary = 'Couldn\'t stringify JSON data';
    nd.data = '"error"';
  }
  
  result.data = new Buffer(template.replace(/{{(\w*)}}/g,function(m,s1){
    return s1 in nd ? nd[s1] : data[s1];
  }));
  
  return result;
}

createFolder = wrap(function*(folder){
  var cb;
  
  try{
    fs.stat(folder,cb = Cb());
    assert((yield cb).isDirectory());
  }catch(e){
    fs.mkdir(folder,cb = Cb());
    yield cb;
  }
  
});

function complete(n){
  return (n >= 10 ? '' : '0') + n;
}

writeBdl = wrap(function*(bdl,file){
  var res = yield [
    {
      finish: bdl.pipe(fs.createWriteStream(file))[until]('finish'),
      error: bdl[until]('error')
    },
    {
      finish: bdl.  pipe(zlib.createGzip({level: 9})).
                    pipe(fs.createWriteStream(file + '.gz'))[until]('finish'),
      error: bdl[until]('error')
    }
  ];
  
  if(res[0].error) throw res[0].error[0];
  if(res[1].error) throw res[1].error[0];
});

writeShimedBdl = wrap(function*(bdl,file){
  var code = '',
      res,files,shim,cb,cb2;
  
  do{
    
    res = yield {
      data: bdl[until]('data'),
      error: bdl[until]('error'),
      end: bdl[until]('end')
    };
    
    if(res.error) throw res.error[0];
    if(res.data) code += res.data[0];
    
  }while(res.data);
  
  fs.readdir(__dirname + '/shims',cb = Cb());
  files = yield cb;
  
  files.sort();
  files.reverse();
  
  for(i = 0;i < files.length;i++){
    shim = __dirname + '/shims/' + files[i];
    
    fs.readFile(shim,cb = Cb());
    code = (yield cb).toString() + '\n\n\n' + code;
  }
  
  zlib.gzip(code,{level: 9},cb = Cb());
  
  fs.writeFile(file,code,cb2 = Cb());
  fs.writeFile(file + '.gz',yield cb,cb = Cb());
  
  yield cb;
  yield cb2;
});

build = wrap(function*(file,folder,name,log,w){
  var browserify = require('browserify'),
      babelify = require('babelify'),
      
      b,bdl,cb,baseName,d,watchify,res,
      code,shim,files,i,watchify;
  
  if(log){
    d = new Date();
    process.stdout.write(
      complete(d.getHours()) + 
      ':' + 
      complete(d.getMinutes()) + 
      ' - Building \u001b[3m' + name + '\u001b[0m... ');
  }
  
  if(typeof w != 'object'){
    if(w){
      watchify = require('watchify');
      
      b = browserify(args);
      b.es5 = browserify(shimedArgs);
    }else{
      b = browserify(args);
      b.es5 = browserify(shimedArgs);
    }
    
    b.add(file);
    
    b.es5.add(file);
    b.es5.transform(babelify.configure({
      blacklist: ['strict'],
      optional: ['runtime'],
      nonStandard: false
    }));
    
    if(w){
      w = watchify(b);
      w.es5 = watchify(b.es5);
    }else w = b;
  }
  
  bdl = w.bundle();
  bdl.es5 = w.es5.bundle();
  
  baseName = p.resolve(folder,name);
  
  try{
    
    yield [
      writeBdl(bdl,baseName + '.js'),
      writeShimedBdl(bdl.es5,baseName + '.es5.js')
    ];
    
    if(log) console.log('\u001b[92m✓\u001b[0m');
    
  }catch(e){
    
    if(log){
      console.log('\u001b[91m✗\u001b[0m');
      console.log('\n' + e.message + '\n');
    }
    
  }
  
  return w;
});

watch = wrap(function*(file,folder,name,log,builder){
  var w,uu;
  
  yield lock.take();
  if(builder[active]) try{ w = yield build(file,folder,name,log,true); }catch(e){}
  lock.give();
  
  if(w) uu = w[until]('update');
  
  if(builder[active]) do{
    
    yield uu;
    uu = w[until]('update');
    
    yield lock.take();
    if(builder[active]) try{ yield build(file,folder,name,log,w); }catch(e){}
    lock.give();
    
  }while(builder[active]);
  
});

cache = wrap(function*(dir,name,data,log,path){
  var d,result;
  
  yield lock.take();
  
  if(log){
    d = new Date();
    process.stdout.write(
    complete(d.getHours()) + 
    ':' + 
    complete(d.getMinutes()) + 
    ' - Caching \u001b[3m' + name + '\u001b[0m... ');
  }
  
  try{
    
    result = fillTemplate(data,path);
    if(result.code) throw new Error();
    
    yield dblWrite(p.resolve(dir,name + '.html'),result.data);
    yield dblWrite(p.resolve(dir,name + '.json'),JSON.stringify(data) + '\n');
    
    if(log) console.log('\u001b[92m✓\u001b[0m');
    
  }catch(e){
    
    if(log){
      console.log('\u001b[91m✗\u001b[0m');
      console.log('\n' + e.message + '\n');
    }
    
  }
  
  lock.give();
});

// - Exports

Wapp.build = wrap(function*(location,keepOn,log){
  var conf = getConf(location),
      folders = conf.folders,
      scripts = conf.scripts,
      
      builder = new Builder(),
      
      keys,i,cb,folder,file;
  
  if(log == null) log = true;
  yield createFolder(folders.build);
  
  folder = folders.build;
  keys = Object.keys(scripts);
  
  if(keepOn){
    
    for(i = 0;i < keys.length;i++){
      file = scripts[keys[i]];
      watch(file,folder,keys[i],log,builder);
    }
    
  }else for(i = 0;i < keys.length;i++){
    
    file = scripts[keys[i]];
    
    yield lock.take();
    try{ yield build(file,folder,keys[i],log); }catch(e){ }
    lock.give();
    
  }
  
  return builder;
});

Wapp.cache = wrap(function*(location,path,log){
  var conf = getConf(location),
      
      i,j,keys,dir;
  
  if(!conf.data) return;
  if(log == null) log = true;
  path = path || '';
  
  dir = p.resolve(conf.folders.build,encodeURIComponent(path) + '_data');
  
  yield createFolder(conf.folders.build);
  yield createFolder(dir);
  
  keys = Object.keys(conf.data);
  for(j = 0;j < keys.length;j++){
    i = keys[j];
    yield cache(dir,i,conf.data[i],log,path);
  }
  
  dir = p.resolve(conf.folders.build,encodeURIComponent(path) + '_errors');
  yield createFolder(dir);
  
  yield cache(dir,'404',{
    code: 404,
    title: '404',
    summary: http.STATUS_CODES[404]
  },log,path);
  
  yield cache(dir,'500',{
    code: 500,
    title: '500',
    summary: 'Couldn\'t stringify JSON data'
  },log,path);
  
});

Wapp.clear = wrap(function*(location,what){
  var cache,build,cb,f1,f2,i,j,stats,path,file;
  
  switch(what){
    
    case 'cache':
      cache = true;
      break;
    
    case 'build':
      build = true;
      break;
    
    default:
      cache = true;
      build = true;
      break;
      
  }
  
  location = getConf(location).folders.build;
  
  try{
    fs.readdir(location,cb = Cb());
    f1 = yield cb;
  }catch(e){ return; }
  
  for(i = 0;i < f1.length;i++){
    path = p.resolve(location,f1[i]);
    
    fs.stat(path,cb = Cb());
    stats = yield cb;
    
    if(stats.isDirectory()){
      
      if(cache){
        
        fs.readdir(path,cb = Cb());
        f2 = yield cb;
        
        for(j = 0;j < f2.length;j++){
          file = p.resolve(path,f2[j]);
          
          fs.stat(file,cb = Cb());
          stats = yield cb;
          
          if(!stats.isDirectory()){
            fs.unlink(file,cb = Cb());
            yield cb;
          }
        }
        
        fs.rmdir(path,cb = Cb());
        try{ yield cb; }catch(e){}
        
      }
      
    }else if(build){
      fs.unlink(path,cb = Cb());
      yield cb;
    }
    
  }
  
  fs.rmdir(location,cb = Cb());
  try{ yield cb; }catch(e){}
  
});

// - Builder

function Builder(){
  this[active] = true;
}

Object.defineProperty(Builder.prototype,'cancel',{value: function(){
  this[active] = false;
}});

// Web Server

function notAcceptable(e,pathname){
  
  if(e.request.method != 'GET' && e.request.method != 'HEAD'){
    
    return {
      code: 405,
      headers: {'Allow': 'GET, HEAD'}
    };
    
  }
  
  if(pathname[0] == '.') return true;
  if(pathname.indexOf('/.') != -1) return true;
  return false;
}

function* onFile(e,c,location,mime,log){
  var pathname = e.parts.join('/'),
      na = notAcceptable(e,pathname);
  
  switch(na){
    case true: return;
    case false: break;
    default:
      e[e404] = na;
      e.next();
      return;
  }
  
  try{
    yield e.sendFile(p.resolve(location,pathname),{mime: mime});
    if(log) log(null,e,location);
  }catch(error){
    if(log) log(error,e,location);
    e[e404] = {code: 404};
    e.next();
  }
  
}

function* onRequest(e,c,wapp,folders,path,sdata,mime){
  var req,res,u,data,gzip,pathname,
      code,gzlvl,query,headers,na,i,
      request,answer,en,result,file;
  
  req = e.request;
  res = e.response;
  headers = {};
  u = e.url;
  
  pathname = e.parts.join('/');
  query = u.query;
  
  if(e[e404]) answer = e[e404];
  else{
    
    na = notAcceptable(e,pathname);
    switch(na){
      case true: return;
      case false: break;
      default: answer = na;
    }
    
  }
  
  if(!answer){
    request = new Request(pathname,e.parts,req.headers,wapp,query,req.connection.remoteAddress);
    
    en = 'rsc ' + pathname;
    if(wapp.target.listeners(en)) wapp.give(en,request);
    else request.next();
    
    answer = yield request[resolver].yielded;
    if(request[lang]) headers['Content-Language'] = request[lang];
    
    if(typeof answer == 'string') answer = [answer];
    if(answer instanceof Array){
      
      for(i = 0;i < answer.length;i++) try{
        
        if(byJson in query) file = answer[i] + '.json';
        else file = answer[i] + '.html';
        
        return yield e.sendFile(p.resolve(folders.build,encodeURIComponent(path) + '_data',file),{mime: mime, headers: headers});
        
      }catch(e){
        
        if(sdata && sdata[answer[i]]){
          answer = sdata[answer[i]];
          answer.code = 200;
          break;
        }
        
        if(i == answer.length - 1) answer = {code: 404};
      }
      
    }
    
  }
  
  if(Math.floor(answer.code/100) == 3){
    if(answer.headers) res.writeHead(answer.code,answer.headers);
    else res.writeHead(answer.code);
    
    res.end();
    return;
  }
  
  if(answer.code != 200){
    
    try{
          
      if(byJson in query) file = answer.code + '.json';
      else file = answer.code + '.html';
      
      return yield e.sendFile(p.resolve(folders.build,encodeURIComponent(path) + '_errors',file),{
        code: answer.code,
        mime: mime,
        headers: headers
      });
      
    }catch(e){
      
      if(answer.headers) headers[apply](answer.headers);
      answer.title = answer.code + '';
      answer.summary = http.STATUS_CODES[answer.code];
      
    }
    
  }
  
  code = answer.code;
  gzlvl = answer.gzip;
  
  answer.title = (answer.title || '') + '';
  answer.data = (answer.data || '') + '';
  
  if(byJson in query){
    
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
    
    headers['Content-Type'] = 'application/json';
    if(mime.json) headers[apply](mime.json);
    
  }else{
    
    result = fillTemplate(answer,path);
    code = result.code || code;
    data = result.data;
    
    headers['Content-Type'] = 'text/html;charset=utf-8';
    if(mime.html) headers[apply](mime.html);
    
  }
  
  headers['Accept-Ranges'] = 'none';
  headers['Last-Modified'] = (new Date()).toUTCString();
  
  gzlvl = typeof gzlvl == 'number' ? gzlvl : wapp.target.gzipLevel;
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

function compare(a,b){
  return b.q - a.q;
}

function getLangs(str){
  var langs = [],
      result = [],
      map = {},
      i,lang;
  
  str.replace(/(([a-z]+)[\-a-z]*)(;\s*q\s*=\s*([^,\s]+))?/gi,function(){
    langs.push({
      lang: arguments[1].toLowerCase(),
      primary: arguments[2].toLowerCase(),
      q: parseFloat(arguments[4] || 1)
    });
  });
  
  langs.sort(compare);
  
  for(i = 0;i < langs.length;i++){
    
    lang = langs[i].lang;
    if(!map[lang]){
      result.push(lang);
      map[lang] = true;
    }
    
    lang = langs[i].primary;
    if(!map[lang]){
      result.push(lang);
      map[lang] = true;
    }
    
  }
  
  return Object.freeze(result);
}

function Request(pathname,p,headers,e,query,addr){
  this[resolver] = new Resolver();
  
  if(headers['if-modified-since']) this.date = new Date(headers['if-modified-since']);
  else this.date = new Date(0);
  
  if(headers['accept-language']) this.langs = getLangs(headers['accept-language']);
  else this.langs = Object.freeze([]);
  
  if(headers['x-forwarded-for']) this.ip = headers['x-forwarded-for'].split(', ')[0];
  else this.ip = addr;
  
  this.addr = addr;
  
  this.rsc = pathname;
  this.query = query;
  this.parts = [];
  
  this[path] = p;
  this[emitter] = e;
}

Object.defineProperties(Request.prototype,{
  
  answer: {value: function(opt,l){
    this[lang] = l;
    
    if(typeof opt == 'string') return this[resolver].accept(opt);
    
    opt = opt || {};
    opt.code = 200;
    
    this[resolver].accept(opt);
  }},
  
  sendCode: {value: function(code,headers){
    this[resolver].accept({
      code: code,
      headers: headers
    });
  }},
  
  useCache: {value: function(){
    this.sendCode(304);
  }},
  
  next: {value: function(){
    var p = this[path],
        e = this[emitter],
        en;
    
    this.parts.unshift(p.pop());
    while(p.length){
      en = 'path ' + p.join('/');
      
      if(e.target.listeners(en)) return e.give(en,this);
      this.parts.unshift(p.pop());
    }
    
    e.give('request',this);
  }}
  
});

