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

    wapp,wappEmitter,holder;

// wapp

wapp = new UrlRewriter();
Target.call(wapp,emitter);

wappEmitter = wapp[emitter];
updateMax(wapp,maximum);

wapp[define]({

  goTo: function(loc,query,fragment){
    var m,q,f,s,h,p,
        keys,i,j;

    loc = (loc || '') + '';
    m = loc.match(/([^#\?]*)(?:\?([^#]*))?(?:#(.*))?/);

    p = m[1] || '';
    q = m[2] || '';
    f = m[3] || '';

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    if(query){

      if(q) q += '&';

      keys = Object.keys(query);
      for(j = 0;j < keys.length;j++){
        i = keys[j];
        q += pct.encodeComponent(i) + '=' + pct.encodeComponent(query[i]) + '&';
      }

      q = q.slice(0,-1);

    }

    if(fragment) f = fragment;

    loc = p;
    if(q) loc += '?' + q;
    if(f) loc += '#' + f;

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

function Event(max,p){
  var langs,i,url,m;

  url = wapp.compute(getPathname() + location.search + location.hash);
  m = url.match(/([^\?#]*)(?:\?([^#]*))?(?:#(.*))?/);

  PathEvent.call(this,p || m[1],wappEmitter,max);

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
  var ev,firstDigit,code;

  k = (k + 1)%1e15;

  if(
    !(e.state instanceof Array) ||
    e.state[0] != 'wapp_state' ||
    typeof e.state[1] != 'number'
  ) return handle(getPathname() + location.search + location.hash,true);

  firstDigit = Math.floor(e.state[1] / 100);

  if(firstDigit == 2){
    ev = new Event(wapp[maximum]);
    ev.data = e.state[2];
    ev.next();
    return;
  }

  if(firstDigit != 4 && firstDigit != 5) code = 400;
  else code = e.state[1];

  ev = new Event(wapp[maximum],'e/' + code);
  ev.data = e.state[2];
  ev.next();
}

function handle(url,replace){
  var xhr,base,baseURI,i,parts,part,result;

  url = pct.encode(url);
  if(!global.history || /^\w+:\/\//.test(url)) return location.href = url;

  if(url.charAt(0) == '/') url = document.baseURI.replace(/\/[^\/]*$/,'') + url;
  else{

    base = location.href.replace(/[^\/]*$/,'');
    baseURI = document.baseURI.replace(/[^\/]*$/,'');

    i = base.indexOf(baseURI);
    if(i == 0){

      result = [];
      parts = (base.slice(baseURI.length) + url).split('/');

      while((part = parts.shift()) != null) switch(part){
        case '.': break;
        case '..':
          result.pop();
          break;
        default: result.push(part);
      }

      url = baseURI + result.join('/');

    }else url = document.baseURI.replace(/\/[^\/]*$/,'') + url;

  }

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

module.exports = wapp;
