var PathEvent = require('path-event'),
    Target = require('y-emitter').Target,
    define = require('u-proto/define'),
    Resolver = require('y-resolver'),
    pct = require('pct'),
    UrlRewriter = require('url-rewriter'),
    Setter = require('y-setter'),

    query = require('hsm/main/Event/query'),
    cookies = require('hsm/main/Event/cookies'),

    fragment = Symbol(),
    rawQuery = Symbol(),
    path = Symbol(),
    url = Symbol(),
    origin = Symbol(),
    cookieStr = Symbol(),
    data = Symbol(),
    routes = Symbol(),

    resolver = Symbol(),
    emitter = Symbol(),
    name = Symbol(),
    langMap = Symbol(),
    changeYd = Symbol(),

    prefix = global['AR9CVdhVmrgQhE8'],
    state = global['vsx2uwNm7hmbshB'],
    reload = global['uh1UgnboEnnYzpV'],
    stateChange = new Resolver(),
    tasks = [],

    sessionStorage = window.sessionStorage || {},
    head = 'AKY8Y0efKHe40NQ',
    wappState = 'F267zopcHHbUvVC',
    lastState = state || (global.history || {}).state,
    fromPH = false,
    xhr,app;

// app

class Wapp extends UrlRewriter{

  constructor(){
    super(emitter);
    this[emitter].sun('ready','busy');

    this[routes] = new Map();
  }

  get prefix(){ return prefix; }

  task(){
    var task = new Resolver.Hybrid();

    tasks.push(task);
    task.listen(clean);

    if(global.history && history.state && !(history.state || {}).placeholder){

      sessionStorage[head] = history.state.ts = Date.now();
      history.replaceState(history.state,document.title,location.href);

      fromPH = true;
      history.pushState({
        [wappState]: true,
        placeholder: true
      },document.title,location.href);

    }

    return task;
  }

  popTask(){
    if(tasks.length) tasks[tasks.length - 1].accept();
  }

  goTo(loc,query,fragment){

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    handle(loc,query,fragment);
  }

  post(payload,loc,query,fragment){

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    handle(loc,query,fragment,null,payload);
  }

  trigger(){
    onPopState({state: lastState});
  }

  script(script,unshimmed){
    var base;

    script = (script || '').toLowerCase().replace(/\W/g,'');
    base = location.origin + prefix + '/.scripts/' + script;

    if(global.YAa22vgIChMzhxs == 'ES5') return encodeURI(base + (unshimmed ? '.us' : '') + '.es5.js');
    return encodeURI(base + '.js');
  }

  load(script){
    var tag,res,scr,inDoc;

    script = (script || '').toLowerCase().replace(/\W/g,'');
    tag = 'tfbn0jc14vb9nha' + script;
    res = 'yz37oGsoX9nGtIt' + script;

    if(global.hasOwnProperty(res)) return global[res].yielded;
    global[res] = new Resolver();

    if(global.hasOwnProperty(tag)){
      global[res].accept(global[tag]);
      delete global[tag];
      return global[res].yielded;
    }

    if((inDoc = document.getElementById(tag)) || document.readyState != 'loading'){
      scr = inDoc || document.createElement('script');

      scr[resolver] = global[res];
      scr[name] = script;
      scr.onload = onScriptLoad;
      scr.onerror = onScriptError;

      if(!inDoc){
        scr.id = tag;
        (document.head || document.getElementsByTagName('head')[0]).appendChild(scr);
        scr.src = app.script(script,true);
      }

      return global[res].yielded;
    }

    document.write(`
      <script id="${tag}" src="${app.script(script,true)}"></script>
      <script>
        if(window.hasOwnProperty('${tag}')) window['${res}'].accept(window['${tag}']);
        else window['${res}'].reject(new Error('Could not load ${script}'));
        delete window['${tag}'];
      </script>
    `);

    return global[res].yielded;
  }

  asset(url){
    if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
    url = app.format(url);
    return encodeURI(location.origin + prefix + '/.assets' + url);
  }

  build(url){
    if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
    url = app.format(url);
    return encodeURI(location.origin + prefix + '/.build' + url);
  }

  href(url,query,fragment){

    if(url.charAt(0) != '/'){
      let base = getPathname(document.baseURI).replace(/[^\/]*$/,'');
      url = url.split(location.origin + prefix + base).join('');
      url = base + url;
    }

    url = app.format(url,query,fragment);
    url = encodeURI(location.origin + prefix + url);
    return url;
  }

  get assetModifier(){
    return (obj) => {
      if(obj.src) obj.src = this.asset(obj.src);
      if(obj.href) obj.href = this.asset(obj.href);
    };
  }

  get scriptModifier(){
    return (obj) => {
      if(obj.src) obj.src = this.script(obj.src);
      if(obj.href) obj.href = this.script(obj.href);
    };
  }

  get buildModifier(){
    return (obj) => {
      if(obj.src) obj.src = this.build(obj.src);
      if(obj.href) obj.href = this.build(obj.href);
    };
  }

  get linkDirective(){
    var self = this;

    return function(){
      var {on} = this.std;

      this.node.href = self.href(this.node.href);

      this.render( on('click', (event) => {
        event.preventDefault();
        self.goTo(this.node.href);
      }) );

    };
  }

  route(route){
    var setter;

    if(this[routes].has(route)) return this[routes].get(route).getter;
    setter = new Setter(null);
    this[routes].set(route,{
      getter: setter.getter,
      detacher: this.on(route,onRoute,setter)
    });

    return setter.getter;
  }

  detachRoute(route){
    if(!this[routes].has(route)) return;
    this[routes].get(route).detacher.detach();
    this[routes].delete(route);
  }

  get title(){
    return document.title;
  }

  set title(title){
    document.title = title;
    if(global.history) history.replaceState(history.state,document.title,location.href);
  }

}

app = new Wapp();

// - handlers

function clean(){
  var i = tasks.indexOf(this),
      task;

  if(i == -1) return;
  for(task of tasks.splice(i)) task.accept();
}

function* onRoute(e,d,setter){
  setter.value = e;
  yield e.changed();
  if(setter.value == e) setter.value = null;
}

// Event

class Event extends PathEvent{

  constructor(p,d){
    var i,url,m;

    super();
    url = app.compute(getPathname() + location.search + location.hash);
    m = url.match(/([^\?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    this[data] = Object.freeze(d);

    this[fragment] = m[3] == null ? null : m[3];
    this[rawQuery] = m[2] == null ? null : m[2];
    this[path] = m[1];
    this[origin] = pct.decode(location.origin);
    this[cookieStr] = document.cookie;
    this[changeYd] = stateChange.yielded;

    this.emit(p || m[1],app[emitter]);
  }

  get data(){ return this[data]; }

  get fragment(){ return this[fragment]; }
  get rawQuery(){ return this[rawQuery]; }
  get query(){ return query(this); }
  get path(){ return this[path]; }
  changed(){ return this[changeYd]; }
  get url(){
    var he,p,q,f;

    if(this[url]) return this[url];

    p = this[path];
    q = this[rawQuery] != null ? '?' + this[rawQuery] : '';
    f = this[fragment] != null ? '#' + this[fragment] : '';

    return this[url] = p + q + f;
  }

  get origin(){ return this[origin]; }
  get cookies(){ return cookies(this,this[cookieStr]); }

  setCookie(obj,props){
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

  }

  language(lang){
    var langs,i;

    if(!this[langMap]){
      langs = navigator.languages || [navigator.language || navigator.userLanguage];
      this[langMap] = new Map();

      for(i = 0;i < langs.length;i++) this[langMap].set(langs[i],1);
      if(!this[langMap].has('*')) this[langMap].set('*',0);
    }

    if(!lang) return filter(this[langMap].entries());
    if(this[langMap].has(lang)) return this[langMap].get(lang);
    return this[langMap].get('*');
  }

}

// - utils

function* filter(it){
  var entry;
  for(entry of it) if(entry[1] > 0) yield entry;
}

function onScriptLoad(){
  this[resolver].accept(global[this.id]);
  delete global[this.id];
}

function onScriptError(e){
  this[resolver].reject(new Error('Could not load ' + this[name]));
}

function onPopState(e){
  var fph = fromPH,
      ev,firstDigit,code,sc,task,state;

  if(xhr){
    xhr.abort();
    xhr = null;
  }

  app[emitter].sun('ready','busy');

  if(global.history) state = history.state;
  else state = e.state;

  if(!(state && state[wappState] === true))
    return handle(getPathname() + location.search + location.hash,null,null,true);

  fromPH = false;
  if(state.skip) return;

  if(state.placeholder){
    if(global.history) history.back();
    return;
  }

  if(task = tasks.pop()){

    fromPH = true;
    history.pushState({
      [wappState]: true,
      placeholder: true
    },document.title,location.href);

    task.accept();
    return;
  }

  if(state.ts && state.ts == sessionStorage[head]){

    if(fph){
      history.back();
      return;
    }

    if(reload){
      state = reload;
      reload = null;
      state.ts = sessionStorage[head] = Date.now();
      history.replaceState(state,document.title,location.href);
    }

    fromPH = true;
    history.pushState({
      [wappState]: true,
      placeholder: true
    },document.title,location.href);

  }

  sc = stateChange;
  lastState = state;
  stateChange = new Resolver();
  firstDigit = Math.floor(state.statusCode / 100);

  if(firstDigit == 2){
    ev = new Event(null,state.data);
    ev.give();
    sc.accept();
    return;
  }

  if(firstDigit != 4 && firstDigit != 5 && state.statusCode != 0) code = 400;
  else code = state.statusCode;

  ev = new Event('e/' + code,state.data);
  ev.give();
  sc.accept();
}

function handle(url,query,fragment,replace,payload){
  var i,qh,old,isFormData;

  if(payload !== undefined){
    if(global.FormData && (payload instanceof FormData)) isFormData = true;
    else payload = JSON.stringify(payload);
  }

  url = app.href(url,query,fragment);

  app[emitter].sun('busy','ready');
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

  if(payload === undefined) xhr.open('GET',url,true);
  else{
    xhr.open('POST',url,true);
    if(!isFormData) xhr.setRequestHeader('Content-type','application/json');
  }

  xhr.setRequestHeader('Accept','application/json');
  if(qh) xhr.setRequestHeader('Query',qh);
  if(payload === undefined) xhr.send();
  else xhr.send(payload);
}

function listener(){
  var data,state,url,pref,i,m;

  if(this.readyState == 4){
    if(xhr != this) return;
    xhr = null;

    try{ data = JSON.parse(this.responseText); }
    catch(e){ }

    state = {
      [wappState]: true,
      statusCode: this.status,
      data: data
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

    if(this.wapp_replaceState || (history.state && history.state.placeholder))
      history.replaceState(state,document.title,url);
    else history.pushState(state,document.title,url);
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

if(global.history) addEventListener('popstate',onPopState);

/*/ exports /*/

module.exports = app;
