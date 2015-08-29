var PathEvent = require('path-event'),
    updateMax = require('path-event/updateMax'),
    Target = require('y-emitter').Target,
    define = require('u-proto/define'),
    Resolver = require('y-resolver'),
    pct = require('pct'),
    UrlRewriter = require('url-rewriter'),

    fragment = Symbol(),
    query = Symbol(),
    rawQuery = Symbol(),
    path = Symbol(),
    url = Symbol(),
    origin = Symbol(),
    cookies = Symbol(),
    cookieStr = Symbol(),
    langMap = Symbol(),

    maximum = Symbol(),
    resolver = Symbol(),
    emitter = Symbol(),
    name = Symbol(),

    k = 0,
    prefix = global.wapp_prefix,
    state = global.wapp_state,

    app,appEmitter,holder;

// app

app = new UrlRewriter();
Target.call(app,emitter);

appEmitter = app[emitter];
updateMax(app,maximum);

app[define]({

  prefix: prefix,

  goTo: function(loc,query,fragment){
    handle(loc,query,fragment);
  },

  trigger: function(){
    if(global.history) onPopState(history);
    else onPopState({state: state});
  },

  load: function(script){
    var tag,scr,yd;

    script = (script || '').toLowerCase().replace(/\W/g,'');
    tag = 'wapp_script_' + script;

    if(global.hasOwnProperty(tag)) return Resolver.accept(global[tag]);
    if(scr = document.getElementById(tag)) return getYielded(scr,script);

    scr = document.createElement('script');
    scr.id = script;
    yd = getYielded(scr,script);

    scr.type = 'text\/javascript';
    (document.head || document.getElementsByTagName('head')[0]).appendChild(scr);

    if(global.wapp_mode == 'ES5') scr.src = encodeURI(location.origin + prefix + '/.scripts/' + script + '.es5.js');
    else scr.src = encodeURI(location.origin + prefix + '/.scripts/' + script + '.js');

    return yd;
  },

  asset: function(url){
    if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
    url = app.format(url);
    return encodeURI(location.origin + prefix + '/.assets' + url);
  }

});

// Event

function Event(max,p){
  var langs,i,url,m;

  url = app.compute(getPathname() + location.search + location.hash);
  m = url.match(/([^\?#]*)(?:\?([^#]*))?(?:#(.*))?/);

  PathEvent.call(this,p || m[1],appEmitter,max);

  this[fragment] = m[3];
  this[rawQuery] = m[2];
  this[path] = m[1];
  this[origin] = pct.decode(location.origin);
  this[cookieStr] = document.cookie;

  this[langMap] = new Map();
  langs = navigator.languages || [navigator.language || navigator.userLanguage];

  for(i = 0;i < langs.length;i++) this[langMap].set(langs[i],1);
  if(!this[langMap].has('*')) this[langMap].set('*',0);

}

Event.prototype = Object.create(PathEvent.prototype);
Event.prototype[define]({

  constructor: Event,

  get fragment(){ return this[fragment]; },
  get rawQuery(){ return this[rawQuery]; },
  get query(){ return this[query] = this[query] || getQuery(this[rawQuery]); },
  get path(){ return this[path]; },
  get url(){
    var he,p,q,f;

    if(this[url]) return this[url];

    p = this[path];
    q = this[rawQuery] != null ? '?' + this[rawQuery] : '';
    f = this[fragment] != null ? '#' + this[fragment] : '';

    return this[url] = p + q + f;
  },

  get origin(){ return this[origin]; },
  get cookies(){ return this[cookies] = this[cookies] || getCookies(this[cookieStr]); },

  setCookie: function(obj,props){
    var attrs = '',
        keys,i,j;

    props = props || {};

    if(props.expires) attrs += ';Expires=' + props.expires.toGMTString();
    if(props.maxAge) attrs += ';Max-Age=' + props.maxAge;
    if(props.domain) attrs += ';Domain=' + props.domain;
    if(props.path) attrs += ';Path=' + props.path;
    if(props.secure) attrs += ';Secure';
    if(props.httpOnly) attrs += ';HttpOnly';

    obj = obj || {};
    keys = Object.keys(obj);

    for(j = 0;j < keys.length;j++){
      i = keys[j];
      document.cookie = pct.encodeComponent(i) + '=' + pct.encodeComponent(obj[i]) + attrs;
    }

  },

  language: function(lang){
    if(!lang) return this[langMap].entries();
    if(this[langMap].has(lang)) return this[langMap].get(lang);
    return this[langMap].get('*');
  },

  redirect: function(loc,query,fragment){
    handle(loc,query,fragment,true);
  }

});

// - utils

function getYielded(script,n){
  if(script[resolver]) return script[resolver].yielded;

  script[name] = n;
  script[resolver] = new Resolver();

  script.onload = onScriptLoad;
  script.onerror = onScriptError;

  return script[resolver].yielded;
}

function onScriptLoad(){
  var script = (this[name] || '').toLowerCase().replace(/\W/g,''),
      tag = 'wapp_script_' + script;

  this[resolver].accept(global[tag]);
}

function onScriptError(e){
  this[resolver].reject(new Error('Could not load ' + this[name]));
}

function onPopState(e){
  var ev,firstDigit,code;

  k = (k + 1)%1e15;

  if(
    !(e.state instanceof Array) ||
    e.state[0] != 'wapp_state' ||
    typeof e.state[1] != 'number'
  ) return handle(getPathname() + location.search + location.hash,null,null,true);

  firstDigit = Math.floor(e.state[1] / 100);

  if(firstDigit == 2){
    ev = new Event(app[maximum]);

    if(e.state[2] instanceof Object) Object.freeze(e.state[2]);
    ev[define]('data',e.state[2]);

    ev.next();
    return;
  }

  if(firstDigit != 4 && firstDigit != 5) code = 400;
  else code = e.state[1];

  ev = new Event(app[maximum],'e/' + code);

  if(e.state[2] instanceof Object) Object.freeze(e.state[2]);
  ev[define]('data',e.state[2]);

  ev.next();
}

function replaceDots(m){
  return m.replace(/\/\./g,'/');
}

function handle(url,query,fragment,replace){
  var xhr;

  if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
  url = app.format(url,query,fragment);

  url = url.replace(/^[^#\?]*/,replaceDots);
  url = encodeURI(location.origin + prefix + url);

  xhr = new XMLHttpRequest();

  xhr.fromURL = url;
  xhr.replaceState = replace;
  xhr.originalK = k = (k + 1)%1e15;

  xhr.onreadystatechange = listener;
  xhr.open('GET',url,true);
  xhr.setRequestHeader('Accept','application/json');
  xhr.send();
}

function listener(){
  var data,state;

  if(this.readyState == 4 && this.originalK == k){
    data = JSON.parse(this.responseText);
    state = ['wapp_state',this.status,data];

    if(this.replaceState) history.replaceState(state,'',this.fromURL);
    else history.pushState(state,'',this.fromURL);

    onPopState({state: state});
  }

}

function getPathname(p){
  var i;

  p = pct.decode((p || location.pathname).match(/^(?:\w+\:\/\/[^\/]*)?([^#\?]*)/)[1]);
  i = p.indexOf(prefix);

  if(i != 0){
    location.reload(true);
    throw new Error('Wrong prefix, reloading...');
  }

  return p.slice(prefix.length);
}

function queryReplace(m,key,value){
  key = pct.decodeComponent(key);
  value = pct.decodeComponent(value || '');

  if(holder.hasOwnProperty(key)) holder[key] = [].concat(holder[key],value);
  else holder[key] = value;
}

function getQuery(query){
  query = (query || '') + '';

  holder = {};
  query.replace(/\+/g,'%20').replace(/(.+?)(?:=(.*?))?(&|$)/g,queryReplace);
  try{ return Object.freeze(holder); }
  finally{ holder = null; }
}

function cookieReplace(m,key,value){
  key = pct.decodeComponent(key);
  value = pct.decodeComponent(value);

  if(!holder.hasOwnProperty(key)) holder[key] = value;
}

function getCookies(cookieStr){
  cookieStr = (cookieStr || '') + '';

  holder = {};
  cookieStr.replace(/(?:^|\s*;\s*)(.+?)(?:\s*=\s*(.*?))?\s*(?=;|$)/g,cookieReplace);
  try{ return Object.freeze(holder); }
  finally{ holder = null; }
}

if(global.history) addEventListener('popstate',onPopState);

/*/ exports /*/

module.exports = app;
