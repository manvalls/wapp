var PathEvent = require('path-event'),
    updateMax = require('path-event/updateMax'),
    Emitter = require('y-emitter'),
    define = require('u-proto/define'),
    Resolver = require('y-resolver'),
    pct = require('pct'),

    hash = Symbol(),
    search = Symbol(),
    query = Symbol(),
    pathname = Symbol(),
    origin = Symbol(),
    cookies = Symbol(),
    cookieStr = Symbol(),
    langMap = Symbol(),

    maximum = Symbol(),
    resolver = Symbol(),
    name = Symbol(),

    k = 0,

    wapp,wappEmitter,holder;

// wapp

wappEmitter = new Emitter();
wapp = wappEmitter.target;

updateMax(wapp,maximum);

wapp[define]({

  goTo: function(loc){
    handle(loc);
  },

  trigger: function(){
    if(global.history) onPopState(history);
    else onPopState({state: wapp_state});
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

    if(global.wapp_mode == 'ES5') scr.src = '.scripts/' + script + '.es5.js';
    else scr.src = '.scripts/' + script + '.js';

    return yd;
  }

});

// Event

function Event(p,max,pn){
  var langs,i;

  PathEvent.call(this,p,wappEmitter,max);

  this[hash] = pct.decode(location.hash);
  this[search] = pct.decode(location.search);
  this[pathname] = pn;
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

  get hash(){ return this[hash]; },
  get search(){ return this[search]; },
  get query(){ return this[query] = this[query] || getQuery(this[search]); },
  get pathname(){ return this[pathname]; },
  get path(){ return this.pathname + this.search; },
  get href(){ return this.pathname + this.search + this.hash; },

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

  redirect: function(loc){
    handle(loc,true);
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
  var ev,firstDigit,pn,code;

  k = (k + 1)%1e15;

  if(
    !(e.state instanceof Array) ||
    e.state[0] != 'wapp_state' ||
    typeof e.state[1] != 'number'
  ) return handle(getPathname(),true);

  firstDigit = Math.floor(e.state[1] / 100);

  if(firstDigit == 2){
    pn = getPathname();
    ev = new Event(pn,wapp[maximum],pn);
    ev.data = e.state[2];
    ev.next();
    return;
  }

  if(firstDigit != 4 && firstDigit != 5) code = 400;
  else code = e.state[1];

  ev = new Event('e/' + code,wapp[maximum],getPathname());
  ev.data = e.state[2];
  ev.next();
}

function handle(url,replace){
  var xhr;

  url = pct.encode(url);
  if(!global.history || /^\w+/.test(url)) return location.href = url;
  url = document.baseURI.replace(/\/[^\/]*$/,'') + url;

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

function getPathname(){
  return pct.decode(
    (location.origin + location.pathname).replace(document.baseURI.replace(/\/[^\/]*$/,''),'')
  );
}

function queryReplace(m,key,value){
  key = pct.decodeComponent(key);
  value = pct.decodeComponent(value || '');

  if(holder.hasOwnProperty(key)) holder[key] = [].concat(holder[key],value);
  else holder[key] = value;
}

function getQuery(search){
  search = search.slice(1);

  holder = {};
  search.replace(/\+/g,'%20').replace(/(.+?)(?:=(.*?))?(&|$)/g,queryReplace);
  try{ return Object.freeze(holder); }
  finally{ holder = null; }
}

function cookieReplace(m,key,value){
  if(key == 'wapp_prefix') return;
  if(key == 'wapp_status') return;

  key = pct.decodeComponent(key);
  value = pct.decodeComponent(value);

  holder[key] = value;
}

function getCookies(cookieStr){
  holder = {};
  cookieStr.replace(/(?:^|\s*;\s*)(.+?)(?:\s*=\s*(.*?))?\s*(?=;|$)/g,cookieReplace);
  try{ return Object.freeze(holder); }
  finally{ holder = null; }
}

/*/ exports /*/

module.exports = wapp;
