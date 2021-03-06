var PathEvent = require('path-event'),
    Target = require('y-emitter').Target,
    define = require('u-proto/define'),
    Resolver = require('y-resolver'),
    pct = require('pct'),
    UrlRewriter = require('url-rewriter'),
    Setter = require('y-setter'),
    {Getter} = Setter,

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

    assetModifier = Symbol(),
    scriptModifier = Symbol(),
    buildModifier = Symbol(),
    linkModifier = Symbol(),
    formModifier = Symbol(),

    linkDirective = Symbol(),
    formDirective = Symbol(),
    modifiers = Symbol(),
    directives = Symbol(),

    ajax = Symbol(),
    mode = Symbol(),
    fillXHR = Symbol(),
    callback = Symbol(),

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
    xhrSet = new Set(),
    app;

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

    if(typeof loc != 'string'){
      fragment = query;
      query = loc;
      loc = getPathname() + location.search + location.hash;
    }

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    buildXHR(loc,query,fragment,undefined,undefined,null,false);

  }

  post(payload,loc,query,fragment){

    if(typeof loc != 'string'){
      fragment = query;
      query = loc;
      loc = getPathname() + location.search + location.hash;
    }

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    buildXHR(loc,query,fragment,undefined,payload,null,false);

  }

  get(...args){
    return this.goTo(...args);
  }

  trigger(){
    onPopState({state: lastState});
  }

  script(script,unshimmed){
    var base;

    base = location.origin + prefix + '/.scripts/' + pct.encodeComponent(script);
    if(global.YAa22vgIChMzhxs == 'ES5') return encodeURI(base + (unshimmed ? '.us' : '') + '.es5.js');
    return encodeURI(base + (unshimmed ? '.us' : '') + '.js');
  }

  load(script){
    var tag,res,scr,inDoc;

    script = pct.encodeComponent(script);
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
    if(Getter.is(url)) return url.map(url => this.asset(url));
    if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
    url = app.format(url);
    return encodeURI(location.origin + prefix + '/.assets' + url);
  }

  build(url){
    if(Getter.is(url)) return url.map(url => this.build(url));
    if(url.charAt(0) != '/') url = getPathname(document.baseURI).replace(/[^\/]*$/,'') + url;
    url = app.format(url);
    return encodeURI(location.origin + prefix + '/.build' + url);
  }

  href(url,query,fragment){

    if(Getter.is(url) || Getter.inside(query) || Getter.is(fragment)){
      return Getter.map([url,Getter.normalize(query),fragment], (url,query,fragment) => this.href(url,query,fragment));
    }

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
    return this[assetModifier] = this[assetModifier] || ((obj) => {
      if(obj.src) obj.src = this.asset(obj.src);
      if(obj.href) obj.href = this.asset(obj.href);
    });
  }

  get scriptModifier(){
    return this[scriptModifier] = this[scriptModifier] || ((obj) => {
      if(obj.src) obj.src = this.script(obj.src);
      if(obj.href) obj.href = this.script(obj.href);
    });
  }

  get buildModifier(){
    return this[buildModifier] = this[buildModifier] || ((obj) => {
      if(obj.src) obj.src = this.build(obj.src);
      if(obj.href) obj.href = this.build(obj.href);
    });
  }

  get linkModifier(){
    return this[linkModifier] = this[linkModifier] || ((obj) => {
      if(obj.src) obj.src = this.href(obj.src, obj.params);
      if(obj.href) obj.href = this.href(obj.href, obj.params);
    });
  }

  get formModifier(){
    let transformAction;

    if(this[formModifier]) return this[formModifier];
    transformAction = action => this.href((action || location.href).toString().replace(/(\?|#).*/, ''));

    return this[formModifier] = (obj) => {
      if(Getter.is(obj.action)) obj.action = obj.action.map(transformAction);
      else obj.action = transformAction(obj.action);
    };
  }

  get linkDirective(){
    var self = this;

    return this[linkDirective] = this[linkDirective] || function(){
      var {on} = this.std;

      this.render( on('click', (event) => {
        event.preventDefault();
        self.goTo(this.node.href);
      }) );

    };
  }

  get formDirective(){
    var self = this;

    return this[formDirective] = this[formDirective] || function(){
      var {on} = this.std;

      this.render( on('submit', (event) => {

        if(!global.FormData || (this.node.target && this.node.target != '_self')) return;
        event.preventDefault();

        if(this.node.method.toLowerCase() == 'post'){
          self.post(new FormData(this.node), this.node.getAttribute('action'));
        }else{
          let query = {};

          for(let i = 0;i < this.node.elements.length;i++){
            let element = this.node.elements[i];

            if(!element.name) continue;

            if(element.name in query){
              query[element.name] = [].concat(query[element.name], element.value + '');
            }else{
              query[element.name] = element.value + '';
            }

          }

          self.goTo(this.node.getAttribute('action'), query);

        }

      }) );

    };
  }

  get ajax(){
    let request, listener;

    if(this[ajax]) return this[ajax];

    request = (payload, url, query, fragment) => {
      let res = new Resolver();
      buildXHR(url,query,fragment,false,payload,res);
      return res.yielded;
    };

    return this[ajax] = {
      get: (...args) => request(null, ...args),
      post: (...args) => request(...args)
    };
  }

  get modifiers(){
    return this[modifiers] = this[modifiers] || {
      build: this.buildModifier,
      asset: this.assetModifier,
      script: this.scriptModifier,
      internalLink: this.linkModifier,
      internalForm: this.formModifier
    };
  }

  get directives(){
    return this[directives] = this[directives] || {
      internalLink: this.linkDirective,
      internalForm: this.formDirective
    };
  }

  plug(nite){
    Object.assign(nite.modifiers, this.modifiers);
    Object.assign(nite.directives, this.directives);
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

  reduceRight(callback = (...args) => Object.assign({}, ...args)){
    return new Modifier('right', callback);
  }

  reduce(callback = (...args) => Object.assign({}, ...args)){
    return new Modifier('left', callback);
  }

  map(callback = (...args) => Object.assign({}, ...args)){
    return new Modifier('map', callback);
  }

}

class Modifier{

  constructor(m, cb){
    this[mode] = m;
    this[callback] = cb;
  }

  get(...args){
    return this.goTo(...args);
  }

  post(payload,loc,query,fragment){
    var xhr;

    if(typeof loc != 'string'){
      fragment = query;
      query = loc;
      loc = getPathname() + location.search + location.hash;
    }

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    xhr = buildXHR(loc,query,fragment,this[mode] == 'left' || this[mode] == 'right',payload,null,true);
    this[fillXHR](xhr);

  }

  goTo(loc,query,fragment){
    var xhr;

    if(typeof loc != 'string'){
      fragment = query;
      query = loc;
      loc = getPathname() + location.search + location.hash;
    }

    if(typeof query != 'object'){
      fragment = query;
      query = null;
    }

    xhr = buildXHR(loc,query,fragment,this[mode] == 'left' || this[mode] == 'right',undefined,null,true);
    this[fillXHR](xhr);

  }

  [fillXHR](xhr){
    xhr.wapp_callback = this[callback];
    xhr.wapp_modifier = this;
    xhr.wapp_modifier_mode = this[mode];
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

  for(let xhr of xhrSet) xhr.abort();
  xhrSet.clear();

  app[emitter].sun('ready','busy');

  if(global.history) state = history.state;
  else state = e.state;

  if(!(state && state[wappState] === true && (!state.cookie || state.cookie == document.cookie))){
    return buildXHR(getPathname() + location.search + location.hash,null,null,true,undefined,null,false);
  }

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

function buildXHR(url,query,fragment,replace,payload,res,mod){
  var i,qh,isFormData,xhr;

  if(payload !== undefined){
    if(global.FormData && (payload instanceof FormData)) isFormData = true;
    else payload = JSON.stringify(payload);
  }

  url = app.href(url,query,fragment);

  if(mod && app.is('busy')) return;

  if(!(res || mod)){
    app[emitter].sun('busy','ready');
    for(let xhr of xhrSet) xhr.abort();
    xhrSet.clear();
  }

  xhr = new XMLHttpRequest();
  if(!res) xhrSet.add(xhr);

  if(query){
    qh = '';

    for(i in query) if(query.hasOwnProperty(i)){
      let values;

      if(i.charAt(0) != '_') continue;
      values = [].concat(query[i]);
      for(let value of values) qh += (qh ? '&' : '') + pct.encodeComponent(i) + '=' + pct.encodeComponent(value);
    }

  }

  xhr.wapp_fromURL = url;
  xhr.wapp_replaceState = replace;
  xhr.wapp_res = res;

  if(res) xhr.onreadystatechange = ajaxListener;
  else xhr.onreadystatechange = listener;

  if(payload === undefined) xhr.open('GET',url,true);
  else{
    xhr.open('POST',url,true);
    if(!isFormData) xhr.setRequestHeader('Content-type','application/json');
  }

  xhr.setRequestHeader('Accept','application/json');
  if(qh) xhr.setRequestHeader('Query',qh);
  xhr.setRequestHeader('Page-load',res ? 'false' : 'true');
  xhr.setRequestHeader('Partial',mod ? 'true' : 'false');

  if(payload === undefined) xhr.send();
  else xhr.send(payload);

  return xhr;
}

function ajaxListener(){
  var res = this.wapp_res,
      data;

  if(this.readyState == 4) try{
    data = JSON.parse(this.responseText);

    if(Math.floor(this.status / 100) != 2){
      let error = new Error(this.statusText);
      error.code = this.status;
      error.data = data;
      res.reject(error);
    }else{
      res.resolve(data);
    }

  }catch(err){
    res.reject(err);
  }

}

function listener(){
  var data,state,url,pref,i,m;

  if(this.readyState == 4){
    if(!xhrSet.has(this)) return;
    xhrSet.delete(this);

    try{ data = JSON.parse(this.responseText); }
    catch(e){ }

    if(this.wapp_callback) data = this.wapp_callback.call(this.wapp_modifier, ((global.history || {}).state || {}).data, data);

    state = {
      [wappState]: true,
      statusCode: this.status,
      cookie: document.cookie,
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

    if(this.wapp_modifier_mode == 'right') url = location.href;
    if(this.wapp_replaceState || (history.state && history.state.placeholder)) history.replaceState(state,document.title,url);
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
