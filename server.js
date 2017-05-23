var Hsm = require('hsm'),
    define = require('u-proto/define'),
    Detacher = require('detacher'),
    PathEvent = require('path-event'),
    walk = require('y-walk'),
    UrlRewriter = require('url-rewriter'),

    pth = require('path'),

    getConf = require('./utils/getConf.js'),
    fillTemplate = require('./utils/fillTemplate.js'),

    error = Symbol(),
    detacher = Symbol(),
    emitter = Symbol(),
    data = Symbol(),

    path = Symbol(),
    url = Symbol(),
    hsmEvent = Symbol(),
    prefix = Symbol(),
    configuration = Symbol(),
    gzLv = Symbol(),
    confYielded = Symbol(),
    globalHeaders = Symbol();

// Wapp

class Wapp extends UrlRewriter{

  constructor(dir, opt){
    super(emitter);
    dir = dir || process.cwd();
    this[confYielded] = getConf(dir);

    opt = opt || {};
    this[prefix] = opt.prefix = this.format(opt.prefix || '');
  }

  bind(hsm, opt){
    var headers = {
          html: { "Content-Type": "text/html;charset=utf-8" },
          json: { "Content-Type": "application/json" }
        },
        d;

    opt = opt || {};
    opt.prefix = this.format(opt.prefix || '');
    opt.gzipLevel = opt.gzipLevel || 4;

    if(opt.hasOwnProperty('framing')){

      if(opt.framing === false){
        headers.html['X-Frame-Options'] = 'DENY';
        headers.html['Content-Security-Policy'] = "frame-ancestors 'none'";
      }else if(opt.framing !== true){
        headers.html['X-Frame-Options'] = 'ALLOW-FROM ' + opt.framing;
        headers.html['Content-Security-Policy'] = 'frame-ancestors ' + opt.framing;
      }

    }else{

      headers.html['X-Frame-Options'] = 'SAMEORIGIN';
      headers.html['Content-Security-Policy'] = "frame-ancestors 'self'";

    }

    headers.html['Vary'] = headers.json['Vary'] = 'Accept, Cookie';

    d = hsm.on(
      'GET ' + opt.prefix + '/*',
      onReq,
      this[confYielded],
      opt.gzipLevel,
      opt.prefix,
      this,
      headers,
      opt.cors
    );

    d.add( hsm.on(
      'POST ' + opt.prefix + '/*',
      onReq,
      this[confYielded],
      opt.gzipLevel,
      opt.prefix,
      this,
      headers,
      opt.cors,
      true
    ) );

    return d;
  }

  get prefix(){ return this[prefix]; }

  asset(url){
    url = this.format(url);
    return encodeURI(this[prefix] + '/.assets' + url);
  }

}

// - utils

function* onReq(he, d, cy, gzipLevel, prefix, w, headers, cors, isPost){
  var pathname = '/' + he.args,
      path,ev,eCode,conf,m,payload;

  yield he.take();
  conf = yield cy;

  path = w.compute(pathname);
  if(!isPost) m = path.match(/^\/.(assets|scripts|build)\/(.*)/);

  if(m){
    if(cors && cors.origin) yield he.checkOrigin(cors.origin,cors);

    try{

      switch(m[1]){

        case 'assets': {
          return yield he.sendFile(pth.resolve(conf.assets,m[2]));
        }

        case 'scripts': {
          return yield he.sendFile(pth.resolve(conf.build,'scripts',m[2]),{
            headers: {
              'Service-Worker-Allowed': prefix + '/'
            }
          });
        }

        case 'build': {
          return yield he.sendFile(pth.resolve(conf.build,'other',m[2]));
        }

      }

    }catch(er){
      eCode = getCode(er);
      path = 'e/' + eCode;
    }

  }else if(cors && cors.origin) yield he.checkOrigin(cors.origin,cors);

  if(isPost){
    try{
      if(he.request.headers['content-type'] != 'application/json') throw new Error();
      payload = yield he.request;
      payload += '';
      payload = JSON.parse(payload);
    }catch(er){
      eCode = getCode(er);
      path = 'e/' + eCode;
    }
  }

  if(!eCode && he.accept('application/json') == he.accept('text/html') && !isLegacy(he)){

    he.response.writeHead(403,'CSRF detected',{
      'Vary': 'Accept'
    });

    he.response.end();

  }else{
    ev = new Event(path,he,conf,gzipLevel,w[emitter],pathname,prefix,headers,eCode,payload);
    ev.give();
  }

}

// Event

class Event extends PathEvent{

  constructor(pth,he,conf,gzipLevel,e,pn,pref,headers,errorCode,payload){

    super();

    this[data] = payload;
    this[path] = pn;
    this[hsmEvent] = he;
    this[prefix] = pref;

    this[configuration] = conf;
    this[gzLv] = gzipLevel;
    this[emitter] = e;
    this[error] = errorCode;

    this[globalHeaders] = headers;
    this.emit(pth,e);

  }

  get data(){
    return this[data];
  }

  use(){
    walk(use,arguments,this);
  }

  answer(data){
    var status = this[error] || 200,
        gzipLevel = this[gzLv],
        he = this[hsmEvent],
        jsonData;

    try{ jsonData = JSON.stringify(data); }
    catch(e){ return this.throw(500); }

    if(he.accept('application/json') > he.accept('text/html')) he.send(jsonData,{
      code: status,
      headers: this[globalHeaders].json,
      gzipLevel: gzipLevel
    });
    else{

      he.setCookie({
        ['AR9CVdhVmrgQhE8']: this[prefix],
        ['xEu07Sej0MGuwKs']: status
      });

      he.send(fillTemplate(jsonData),{
        code: status,
        headers: this[globalHeaders].html,
        gzipLevel: gzipLevel
      });

    }

  }

  throw(code){
    var path = 'e/' + code,
        ev = new Event(path,this[hsmEvent],this[configuration],this[gzLv],this[emitter],this[path],this[prefix],this[globalHeaders],code),
        firstDigit;

    if(typeof code != 'number') code = 500;
    else{
      firstDigit = Math.floor(code / 100);

      if(firstDigit != 4 && firstDigit != 5) code = 500;
      else code = Math.floor(code);
    }

    ev.give();
  }

  get fragment(){ return this[hsmEvent].fragment; }
  get rawQuery(){ return this[hsmEvent].rawQuery; }
  get query(){ return this[hsmEvent].query; }
  get path(){ return this[path]; }
  get url(){
    var he,p,q,f;

    if(this[url]) return this[url];

    he = this[hsmEvent];
    p = this[path];
    q = he.rawQuery != null ? '?' + he.rawQuery : '';
    f = he.fragment != null ? '#' + he.fragment : '';

    return this[url] = p + q + f;
  }

  get origin(){ return this[hsmEvent].origin; }
  get cookies(){ return this[hsmEvent].cookies; }
  get lastTime(){ return this[hsmEvent].lastTime; }

  setCookie(){ return this[hsmEvent].setCookie.apply(this[hsmEvent],arguments); }
  language(){ return this[hsmEvent].language.apply(this[hsmEvent],arguments); }
  notModified(){
    var he = this[hsmEvent];

    if(he.accept('application/json') <= he.accept('text/html')) he.setCookie({
      ['AR9CVdhVmrgQhE8']: this[prefix],
      ['xEu07Sej0MGuwKs']: this[error] || 200
    });

    return he.notModified();
  }

  redirect(location,query,fragment,permanent){
    if(/^\w+/.test(location)) this[hsmEvent].redirect(location,query,fragment,permanent);
    else this[hsmEvent].redirect(this[prefix] + location,query,fragment,permanent);
  }

}

// - utils

function* use(st){
  var status = this[error] || 200,
      conf = this[configuration],
      he = this[hsmEvent];

  if(he.accept('application/json') > he.accept('text/html')){

    try{

      yield he.sendFile(pth.resolve(conf.build,'static',st + '.json'),{
        code: status,
        mimeHeaders: this[globalHeaders]
      });

    }catch(e){ return this.throw(getCode(e)); }

  }else{

    he.setCookie({
      ['AR9CVdhVmrgQhE8']: this[prefix],
      ['xEu07Sej0MGuwKs']: status
    });

    try{

      yield he.sendFile(pth.resolve(conf.build,'static',st + '.html'),{
        code: status,
        mimeHeaders: this[globalHeaders]
      });

    }catch(e){ return this.throw(getCode(e)); }

  }

}

function isLegacy(he){
  return /MSIE [0-8]\./.test(he.request.headers.accept);
}

function getCode(e){

  switch(e.code){
    case 'ENOENT': return 404;
    case 'EISDIR':
    case 'EPERM': return 403;
    default: return 400;
  }

}

/*/ exports /*/

module.exports = Wapp;
