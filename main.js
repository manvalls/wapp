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
    
    path = Su(),
    
    template = fs.readFileSync(p.resolve(__dirname,'template.html')).toString(),
    args = {cache:{}, packageCache: {}},
    
    getConf,build,watch,lock,
    Wapp;

if(process.env.NODE_PATH) args.paths = process.env.NODE_PATH.split(':');
else args.paths = [];

args.paths.push(__dirname + '/node_modules');

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
  Emitter.Target.call(this,emitter);
  this[emitter].syn('rsc ','top rsc');
  this[emitter].syn('path ','top path');
  
  this[cbcs] = [];
  if(arguments.length) this.attach(location,server,path);
};

Wapp.prototype = new Emitter.Target();
Wapp.prototype.constructor = Wapp;

Object.defineProperties(Wapp.prototype,{
  
  detach: {value: function(){
    var cbc;
    
    while(cbc = this[cbcs].shift()) cbc.detach();
  }},
  
  attach: {value: function(location,server,path){
    var hsm = new Hsm(server),
        folders,conf,i,j,keys;
    
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
    
  }}
  
});

// Build

Wapp.lock = lock = new Lock();

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
      b.es5 = browserify(args);
    }else{
      b = browserify(args);
      b.es5 = browserify(args);
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
      try{ console.log('\n' + e.errors[1].stack.match(/SyntaxError:\s((.|\n)*?)\n\s*at/)[1] + '\n'); }
      catch(e2){ console.log('\n' + e.message + '\n'); }
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

function* onRequest(e,c,wapp,folders,path){
  var req,res,u,data,gzip,pathname,
      code,gzlvl,query,headers,
      request,answer,en;
  
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
      request = new Request(pathname,e.parts,req.headers,wapp);
      
      en = 'rsc ' + pathname;
      if(wapp.target.listeners(en)) wapp.give(en,request);
      else request.next();
      
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

function Request(pathname,p,headers,e){
  this[resolver] = new Resolver();
  
  if(headers['if-modified-since']) this.date = new Date(headers['if-modified-since']);
  else this.date = new Date(0);
  
  if(headers['accept-language']) this.langs = getLangs(headers['accept-language']);
  else this.langs = Object.freeze([]);
  
  this.rsc = pathname;
  this.parts = [];
  
  this[path] = p;
  this[emitter] = e;
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

