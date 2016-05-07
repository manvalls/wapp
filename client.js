var PathEvent = require('path-event'),
    updateMax = require('path-event/updateMax'),
    Target = require('y-emitter').Target,
    define = require('u-proto/define'),
    Resolver = require('y-resolver'),
    pct = require('pct'),
    UrlRewriter = require('url-rewriter'),
    Setter = require('y-setter'),

    query = require('hsm/Event/query'),
    cookies = require('hsm/Event/cookies'),

    fragment = Symbol(),
    rawQuery = Symbol(),
    path = Symbol(),
    url = Symbol(),
    origin = Symbol(),
    cookieStr = Symbol(),
    data = Symbol(),
    routes = Symbol(),

    maximum = Symbol(),
    resolver = Symbol(),
    emitter = Symbol(),
    name = Symbol(),
    langMap = Symbol(),
    changeYd = Symbol(),

    prefix = global.wapp_prefix,
    state = global.wapp_state,
    ts = global.wapp_ts,
    history = global.history,
    stateChange = new Resolver(),
    tasks = [],
    lastState = state || (history || {}).state,
    lastHref = location.href,
    nextId = lastState.id,
    ignore = false,
    gap = false,
    leap = 0,
    queue = [],
    cleaningQueue = [],
    handleQueue = [],

    go,back,forward,pushState,replaceState,
    lto,xhr,app,appEmitter;

// Take control of history

function resolve(){
  var l,args;

  if(ignore) return;

  while(args = cleaningQueue.shift()) cleanTask.call(...args);
  while(args = queue.shift()) pushState.apply(history,args);
  while(args = handleQueue.shift()) handle(...args);
  if(!leap) return;

  l = leap;
  leap = 0;
  go.call(history,l);
}

if(history){

  go = history.go;
  forward = history.forward;
  back = history.back;
  pushState = history.pushState;
  replaceState = history.replaceState;

  history.go = function(n){
    leap += n;
    clearTimeout(lto);
    lto = setTimeout(resolve,0);
  };

  history.forward = function(){
    history.go(1);
  };

  history.back = function(){
    history.go(-1);
  };

  history.pushState = function(state,title,href){
    handleQueue.push([href,{},'']);
    history.go(0);
  };

  history.replaceState = function(state,title,href){
    handleQueue.push([href,{},'',true]);
    history.go(0);
  };

}

// app

app = new UrlRewriter(emitter);
appEmitter = app[emitter];
updateMax(app,maximum);

appEmitter.sun('ready','busy');

app[routes] = new Map();
app[define]({

  prefix: prefix,

  task: function(){
    var task = new Resolver.Hybrid(),
        state;

    tasks.push(task);

    if(history){

      if(!(history.state || {}).id && !gap){

        gap = true;
        state = history.state;

        replaceState.call(history,{
          wappState: true,
          id: ++nextId,
          index: -1,
          ts: ts
        },document.title,location.href);

        pushState.call(history,state,document.title,location.href);

      }

      state = {
        wappState: true,
        index: tasks.length,
        id: ++nextId,
        ts: ts
      };

      queue.push([state,document.title,location.href]);
      clearTimeout(lto);
      lto = setTimeout(resolve,0);

    }

    task.listen(cleanTask,[tasks.length - 1]);
    return task;
  },

  goTo: function(loc,query,fragment){

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    handleQueue.push([loc,query,fragment]);
    history.go(0);
  },

  trigger: function(){
    if(history) onPopState(history);
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
  },

  route: function(route){
    var setter;

    if(this[routes].has(route)) return this[routes].get(route).getter;
    setter = new Setter(null);
    this[routes].set(route,{
      getter: setter.getter,
      detacher: this.on(route,onRoute,setter)
    });

    return setter.getter;
  },

  detachRoute: function(route){
    if(!this[routes].has(route)) return;
    this[routes].get(route).detacher.detach();
    this[routes].delete(route);
  },

  get title(){
    return document.title;
  },

  set title(title){
    document.title = title;
    if(history) replaceState.call(history,history.state,document.title,location.href);
  }

});

// - handlers

function cleanTask(index){
  var rest,task,n;

  if(ignore){
    cleaningQueue.push([this,index]);
    return;
  }

  if(this != tasks[index]) return;
  rest = tasks.splice(index);

  if(history){
    n = -1;
    if(index != history.state.index) n -= rest.length;

    ignore = true;
    queue.push([lastState,document.title,location.href]);
    go.call(history,n);
  }

  for(task of rest) task.accept();
}

function* onRoute(e,d,setter){
  setter.value = e;
  yield e.changed();
  if(setter.value == e) setter.value = null;
}

// Event

function Event(max,p,d){
  var i,url,m;

  url = app.compute(getPathname() + location.search + location.hash);
  m = url.match(/([^\?#]*)(?:\?([^#]*))?(?:#(.*))?/);
  this[data] = Object.freeze(d);

  this[fragment] = m[3] == null ? null : m[3];
  this[rawQuery] = m[2] == null ? null : m[2];
  this[path] = m[1];
  this[origin] = pct.decode(location.origin);
  this[cookieStr] = document.cookie;
  this[changeYd] = stateChange.yielded;

  PathEvent.call(this,p || m[1],appEmitter,max);

}

Event.prototype = Object.create(PathEvent.prototype);
Event.prototype[define]({

  constructor: Event,
  get data(){ return this[data]; },

  get fragment(){ return this[fragment]; },
  get rawQuery(){ return this[rawQuery]; },
  get query(){ return query(this); },
  get path(){ return this[path]; },
  changed: function(){ return this[changeYd]; },
  get url(){
    var he,p,q,f;

    if(this[url]) return this[url];

    p = this[path];
    q = this[rawQuery] != null ? '?' + this[rawQuery] : '';
    f = this[fragment] != null ? '#' + this[fragment] : '';

    return this[url] = p + q + f;
  },

  get origin(){ return this[origin]; },
  get cookies(){ return cookies(this,this[cookieStr]); },

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
    var langs;

    if(!this[langMap]){
      langs = navigator.languages || [navigator.language || navigator.userLanguage];
      this[langMap] = new Map();

      for(i = 0;i < langs.length;i++) this[langMap].set(langs[i],1);
      if(!this[langMap].has('*')) this[langMap].set('*',0);
    }

    if(!lang) return filter(this[langMap].entries());
    if(this[langMap].has(lang)) return this[langMap].get(lang);
    return this[langMap].get('*');
  },

  redirect: function(loc,query,fragment){
    handleQueue.push([loc,query,fragment,true]);
    history.go(0);
  }

});

// - utils

function* filter(it){
  var entry;
  for(entry of it) if(entry[1] > 0) yield entry;
}

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
  var ev,firstDigit,code,sc,task;

  if(xhr){
    xhr.abort();
    xhr = null;
  }

  if(!(e.state && e.state.wappState === true)){
    handleQueue.push([getPathname() + location.search + location.hash,null,null,true]);
    history.go(0);
    return;
  }

  if(ignore){
    ignore = false;
    resolve();
    return;
  }

  if(!e.state.id && e.state.ts != ts){
    if(!lastState.id) forward.call(history);
    else back.call(history);
    return;
  }

  task = tasks[e.state.index];

  if(task){
    task.accept();
    return;
  }

  if(!('statusCode' in e.state)){
    back.call(history);
    return;
  }

  lastState = e.state;

  sc = stateChange;
  stateChange = new Resolver();
  firstDigit = Math.floor(e.state.statusCode / 100);

  if(firstDigit == 2){
    ev = new Event(app[maximum],null,e.state.data);
    ev.give();
    sc.accept();

    if(!xhr) appEmitter.sun('ready','busy');
    return;
  }

  if(firstDigit != 4 && firstDigit != 5 && e.state.statusCode != 0) code = 400;
  else code = e.state.statusCode;

  ev = new Event(app[maximum],'e/' + code,e.state.data);
  ev.give();
  sc.accept();

  if(!xhr) appEmitter.sun('ready','busy');
}

function replaceDots(m){
  return m.replace(/\/\./g,'/');
}

function handle(url,query,fragment,replace){
  var i,qh,old;

  if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
  url = app.format(url,query,fragment);

  url = url.replace(/^[^#\?]*/,replaceDots);
  url = encodeURI(location.origin + prefix + url);

  old = xhr;
  xhr = new XMLHttpRequest();
  if(old) old.abort();

  if(query){
    qh = '';

    for(i in query) if(query.hasOwnProperty(i)){
      if(i.charAt(0) != '_') continue;
      qh += (qh ? '&' : '') + pct.encodeComponent(i) + '=' + pct.encodeComponent(query[i]);
    }

  }

  xhr.wapp_fromURL = url;
  xhr.wapp_replaceState = replace;

  xhr.onreadystatechange = listener;
  xhr.open('GET',url,true);
  xhr.setRequestHeader('Accept','application/json');
  if(qh) xhr.setRequestHeader('Query',qh);
  xhr.send();

  if(tasks[0]) tasks[0].accept();
  appEmitter.sun('busy','ready');
}

function listener(){
  var data,state,url,pref,i,m;

  if(this.readyState == 4){
    if(xhr != this) return;
    xhr = null;

    try{ data = JSON.parse(this.responseText); }
    catch(e){ }

    state = {
      id: this.wapp_replaceState ? lastState.id : ++nextId,
      wappState: true,
      statusCode: this.status,
      index: tasks.length,
      data: data,
      ts: ts
    };

    if(this.responseURL){
      pref = location.origin + prefix;
      i = this.responseURL.indexOf(pref);

      if(i != 0){
        location.href = this.responseURL;
        throw new Error('Wrong prefix, reloading...');
      }

      m = this.wapp_fromURL.match(/#.*$/);
      url = this.responseURL.slice(pref.length) + (m ? m[0] : '');
    }else url = this.wapp_fromURL;

    if(this.wapp_replaceState) replaceState.call(history,state,document.title,url);
    else pushState.call(history,state,document.title,url);
    onPopState(history);
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

if(history) addEventListener('popstate',onPopState);

/*/ exports /*/

module.exports = app;
