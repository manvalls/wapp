var Emitter = require('y-emitter'),
    wrap = require('y-walk').wrap,
    Hybrid = require('y-resolver').Hybrid,
    Su = require('u-su'),
    
    sElem = document.getElementById('2nEI77dDCExbZNo'),
    summary = global['3ZpN50xnziPmRcG'] = global['3ZpN50xnziPmRcG'] || sElem.innerHTML,
    emitter = new Emitter(),
    start = new Hybrid(),
    
    byJson = '4qTpdL-kUvC6',
    fromWapp = '4qWfaW-14lt5',
    
    code = global['c3hM9mLiIxK6DYj'],
    data = global['1wqDxiG274aqleT'],
    prefix = global['1ZN9cOC3OuKILjF'],
    title = document.title,
    
    path = Su(),
    
    k = 0,
    
    wapp;

if(sElem) sElem.remove();

wapp = module.exports = emitter.target;
emitter.set('ready');
emitter.syn('rsc ','top rsc');
emitter.syn('path ','top path');

function listener(){
  if(this.readyState == 4){
    if(this.status == 0) this.yd.reject(new Error('A network error happened'));
    else this.yd.accept();
  }
}

function fillWithQuery(obj,path){
  var m = path.match(/^(.*?)(?:\?(.*?))?(?:#(.*?))?$/);
  
  obj.rsc = m[1].replace('%3F','?').replace('%23','#');
  obj.query = {};
  obj.fragment = decodeURIComponent(m[3]);
  
  if(m[2]){
    
    m[2].replace(/([^&]+)(?:\=([^&]*))?/g,function(m,key,value){
      key = decodeURIComponent(key);
      value = decodeURIComponent(value || '');
      
      obj.query[key] = value;
    });
    
  }
  
  return obj;
}

function fromQuery(query){
  var keys = Object.keys(query),
      txt = '',
      i,j;
  
  for(j = 0;j < keys.length;j++){
    i = keys[j];
    txt += (txt?'&':'') + encodeURIComponent(i) + (query[i] ? '=' + encodeURIComponent(query[i] + '') : '');
  }
  
  return txt;
}

wapp.goTo = wrap(function*(rsc,opt){
  var url,xhr,data,pk,query,queryTxt;
  
  emitter.unset('ready');
  emitter.set('busy');
  
  opt = opt || {};
  query = opt.query || {};
  queryTxt = fromQuery(query);
  
  rsc = rsc.replace('?','%3F').replace('#','%23');
  url = prefix + rsc + (queryTxt ? '?' + queryTxt : '') + (opt.fragment ? '#' + opt.fragment : '');
  
  if(!global.history) return location.href = url;
  
  xhr = new XMLHttpRequest();
  xhr.yd = new Hybrid();
  xhr.open('GET',url + (queryTxt ? '&' : '?') + byJson,true);
  xhr.onreadystatechange = listener;
  xhr.send();
  
  k = (k + 1)%1e15;
  pk = k;
  
  try{ yield xhr.yd; }
  catch(e){
    location.href = url;
    throw e;
  }
  
  if(k != pk) return;
  
  data = JSON.parse(xhr.responseText);
  data.code = xhr.status;
  data.rsc = rsc;
  data.query = query;
  data.fragment = opt.fragment;
  
  data[fromWapp] = true;
  
  if(global.history){
    if(opt.replaceState) history.replaceState(data,data.title,url);
    else history.pushState(data,data.title,url);
  }
  
  emitter.unset('busy');
  emitter.set('ready');
  
  onPopState({state: data});
});

function onPopState(e){
  var event,en,old;
  
  k = (k + 1)%1e15;
  
  if(e.state && e.state[fromWapp]){
    
    global['3ZpN50xnziPmRcG'] = e.state.summary;
    global['c3hM9mLiIxK6DYj'] = e.state.code;
    global['1wqDxiG274aqleT'] = e.state.data;
    
    event = new Event(e.state);
    
    old = wapp.current;
    wapp.current = event;
    
    emitter.give('change',{new: event, old: old});
    
    en = 'rsc ' + event.rsc;
    if(wapp.listeners(en)) emitter.give(en,event);
    else event.next();
    
  }else wapp.goTo(location.href.slice(prefix.length),{replaceState: true});
  
}

if(global.history) window.addEventListener('popstate',onPopState);

(function(){
  var obj = {
        title: title,
        summary: summary,
        data: data,
        code: code
      },
      pk = k;
  
  obj[fromWapp] = true;
  fillWithQuery(obj,decodeURI(location.href).slice(prefix.length));
  
  title = null;
  summary = null;
  data = null;
  code = null;
  
  wapp.current = new Event(obj);
  
  if(global.history) history.replaceState(obj,obj.title,location.href);
  
})();

wapp.handleCurrent = function(){
  onPopState({state: wapp.current});
};

// Event

function Event(data){
  
  this.rsc = data.rsc;
  this.title = data.title;
  this.summary = data.summary;
  this.data = data.data;
  this.code = data.code;
  
  this.query = data.query;
  this.fragment = data.fragment;
  
  this.parts = [];
  this[path] = this.rsc.split('/');
  this[fromWapp] = true;
  
}

Object.defineProperties(Event.prototype,{
  
  next: {value: function(){
    var p = this[path],
        en;
    
    this.parts.unshift(p.pop());
    while(p.length){
      en = 'path ' + p.join('/');
      if(wapp.listeners(en)) return emitter.give(en,this);
      
      this.parts.unshift(p.pop());
    }
    
    emitter.give('rsc',this);
  }}
  
});

