var Hsm = require('hsm'),
    define = require('u-proto/define'),
    Collection = require('detacher/collection'),
    PathEvent = require('path-event'),
    updateMax = require('path-event/updateMax'),
    Target = require('y-emitter').Target,
    wrap = require('y-walk').wrap,
    UrlRewriter = require('url-rewriter'),

    pth = require('path'),

    getConf = require('./server/getConf.js'),
    fillTemplate = require('./server/fillTemplate.js'),

    error = Symbol(),
    collection = Symbol(),
    maximum = Symbol(),
    emitter = Symbol(),

    path = Symbol(),
    url = Symbol(),
    hsmEvent = Symbol(),
    prefix = Symbol(),
    configuration = Symbol(),
    gzLv = Symbol(),
    globalHeaders = Symbol();

// Wapp

function Wapp(server,dir,opt){
  var headers = {
        html: { "Content-Type": "text/html;charset=utf-8" },
        json: { "Content-Type": "application/json" }
      },
      hsm,cy;

  dir = dir || process.cwd();

  UrlRewriter.call(this);
  Target.call(this,emitter);

  this[maximum] = null;
  updateMax(this,maximum);

  opt = opt || {};
  opt.gzipLevel = opt.gzipLevel || 4;
  this[prefix] = opt.prefix = this.format(opt.prefix || '');

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

  headers.html['Cache-Control'] = headers.json['Cache-Control'] = 'no-cache';

  cy = getConf(dir);
  this[collection] = new Collection();

  hsm = new Hsm(server,opt.host);

  this[collection].add( hsm.gh(opt.prefix + '/.scripts/*',onScript,cy,opt.cors) );
  this[collection].add( hsm.gh(opt.prefix + '/.assets/*',onAssets,cy,opt.cors) );
  this[collection].add( hsm.gh(
    opt.prefix + '/*',
    onReq,
    cy,
    opt.gzipLevel,
    opt.prefix,
    this,
    headers,
    opt.cors
  ) );

}

Wapp.prototype = Object.create(UrlRewriter.prototype);
Wapp.prototype[define]({

  constructor: Wapp,

  detach: function(){
    this[collection].detach();
  },

  get prefix(){ return this[prefix]; },

  asset: function(url){
    url = this.format(url);
    return encodeURI(this[prefix] + '/.assets' + url);
  }

});

// - utils

function* onScript(a,d,cy,cors){
  var conf = yield cy,

      e = a[0],
      file = a[2];

  if(cors && cors.origin) yield e.checkOrigin(cors.origin,cors);

  try{ yield e.sendFile(pth.resolve(conf.build,'scripts',file)); }
  catch(er){
    e[error] = er;
    e.next();
  }

}

function* onAssets(a,d,cy,cors){
  var conf = yield cy,

      e = a[0],
      file = a[2];

  if(cors && cors.origin) yield e.checkOrigin(cors.origin,cors);

  try{ yield e.sendFile(pth.resolve(conf.assets,file)); }
  catch(er){
    e[error] = er;
    e.next();
  }

}

function* onReq(a, d, cy, gzipLevel, prefix, w, headers, cors){
  var conf = yield cy,
      he = a[0],
      pathname = '/' + a[2],
      path,ev,eCode;

  if(he[error]) path = 'e/' + (eCode = getCode(he[error]));
  else path = pathname;

  path = w.compute(path);

  if(path.indexOf('/.') != -1) return he.next();

  if(cors && cors.origin) yield he.checkOrigin(cors.origin,cors);

  ev = new Event(path,he,conf,gzipLevel,w[emitter],w[maximum],pathname,prefix,headers);
  ev[error] = eCode;
  ev.next();
}

// Event

function Event(pth,he,conf,gzipLevel,e,max,pn,pref,headers){

  PathEvent.call(this,pth,e,max);

  this[path] = pn;
  this[hsmEvent] = he;
  this[prefix] = pref;

  this[configuration] = conf;
  this[gzLv] = gzipLevel;
  this[emitter] = e;

  this[globalHeaders] = headers;

}

Event.prototype = Object.create(PathEvent.prototype);
Event.prototype[define]({

  constructor: Event,

  use: wrap(function*(st){
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
        wapp_prefix: this[prefix],
        wapp_status: status
      });

      try{

        yield he.sendFile(pth.resolve(conf.build,'static',st + '.html'),{
          code: status,
          mimeHeaders: this[globalHeaders]
        });

      }catch(e){ return this.throw(getCode(e)); }

    }

  }),

  answer: function(data){
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
        wapp_prefix: this[prefix],
        wapp_status: status
      });

      he.send(fillTemplate(jsonData),{
        code: status,
        headers: this[globalHeaders].html,
        gzipLevel: gzipLevel
      });

    }

  },

  throw: function(code){
    var path = 'e/' + code,
        ev = new Event(path,this[hsmEvent],this[configuration],this[gzLv],this[emitter],this[emitter].target[maximum],this[path],this[prefix],this[globalHeaders]),
        firstDigit;

    if(typeof code != 'number') code = 500;
    else{
      firstDigit = Math.floor(code / 100);

      if(firstDigit != 4 && firstDigit != 5) code = 500;
      else code = Math.floor(code);
    }

    ev[error] = code;
    ev.next();
  },

  get fragment(){ return this[hsmEvent].fragment; },
  get rawQuery(){ return this[hsmEvent].rawQuery; },
  get query(){ return this[hsmEvent].query; },
  get path(){ return this[path]; },
  get url(){
    var he,p,q,f;

    if(this[url]) return this[url];

    he = this[hsmEvent];
    p = this[path];
    q = he.rawQuery != null ? '?' + he.rawQuery : '';
    f = he.fragment != null ? '#' + he.fragment : '';

    return this[url] = p + q + f;
  },

  get origin(){ return this[hsmEvent].origin; },
  get cookies(){ return this[hsmEvent].cookies; },
  get lastTime(){ return this[hsmEvent].lastTime; },

  setCookie: function(){ this[hsmEvent].setCookie.apply(this[hsmEvent],arguments); },
  language: function(){ this[hsmEvent].language.apply(this[hsmEvent],arguments); },
  notModified: function(){
    var he = this[hsmEvent];

    if(he.accept('application/json') <= he.accept('text/html')) he.setCookie({
      wapp_prefix: this[prefix],
      wapp_status: this[error] || 200
    });

    he.notModified();
  },

  redirect: function(location,query,fragment,permanent){
    if(/^\w+/.test(location)) this[hsmEvent].redirect(location,query,fragment,permanent);
    else this[hsmEvent].redirect(this[prefix] + location,query,fragment,permanent);
  }

});

// - utils

function getCode(e){

  switch(e.code){
    case 'ENOENT': return 404;
    case 'EISDIR':
    case 'EPERM': return 403;
    default: return 500;
  }

}

/*/ exports /*/

module.exports = Wapp;
Wapp.build = require('./server/build.js');
Wapp.watch = require('./server/watch.js');
