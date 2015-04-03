var Emitter = require('y-emitter'),
    wrap = require('y-walk').wrap,
    Hybrid = require('y-resolver').Hybrid,
    Su = require('u-su'),
    
    summary = document.getElementById('2nEI77dDCExbZNo'),
    emitter = new Emitter(),
    start = new Hybrid(),
    
    code = global['c3hM9mLiIxK6DYj'],
    data = global['1wqDxiG274aqleT'],
    prefix = global['1ZN9cOC3OuKILjF'],
    title = document.title,
    
    path = Su(),
    
    k = 0,
    
    wapp;

summary.remove();
summary = summary.innerHTML;

wapp = module.exports = emitter.target;
emitter.set('busy');
emitter.syn('rsc ','top rsc');
emitter.syn('path ','top path');

function listener(){
  if(this.readyState == 4){
    if(this.status == 0) this.yd.reject(new Error('A network error happened'));
    else this.yd.accept();
  }
}

wapp.goTo = wrap(function*(rsc,replace){
  var url = prefix + (rsc = (rsc || '').toString()),
      xhr,data,pk,e;
  
  if(!global.history) return location.href = url;
  
  emitter.unset('ready');
  emitter.set('busy');
  
  rsc = rsc.replace(/(\?|#).*$/,'');
  
  xhr = new XMLHttpRequest();
  xhr.yd = new Hybrid();
  xhr.open('GET',prefix + rsc + '?format=json',true);
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
  
  e = new Event(data);
  
  if(global.history){
    if(replace) history.replaceState(e,e.title,url);
    else history.pushState(e,e.title,url);
  }
  
  emitter.unset('busy');
  emitter.set('ready');
  
  onPopState({state: e});
});

function onPopState(e){
  var event,en;
  
  k = (k + 1)%1e15;
  
  if(e.state instanceof Event){
    event = e.state;
    
    en = 'rsc ' + event.rsc;
    if(wapp.listeners(en)) emitter.give(en,event);
    else event.next();
    
  }else wapp.goTo(location.href.slice(prefix.length),true);
}

if(global.history) window.addEventListener('popstate',onPopState);

wapp.walk(function*(){
  var obj = {
        rsc: decodeURI(location.href).slice(prefix.length).replace(/(\?|#).*$/,''),
        title: title,
        summary: summary,
        data: data,
        code: code
      },
      e = new Event(obj),
      pk = k;
  
  title = null;
  summary = null;
  data = null;
  code = null;
  
  if(global.history) history.replaceState(e,e.title,location.href);
  
  yield start;
  if(pk != k) return;
  
  emitter.unset('busy');
  emitter.set('ready');
  
  onPopState({state: e});
});

wapp.start = function(){
  start.accept();
};

// Event

function Event(data){
  this.rsc = data.rsc;
  this.title = data.title;
  this.summary = data.summary;
  this.data = data.data;
  this.code = data.code;
  
  this.parts = [];
  this[path] = this.rsc.split('/');
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

