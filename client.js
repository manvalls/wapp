var Emitter = require('y-emitter'),
    walk = require('u-proto/walk'),
    until = require('u-proto/until'),
    wrap = require('y-walk').wrap,
    Hybrid = require('y-resolver').Hybrid,
    
    summary = document.getElementById('wapp-summary'),
    emitter,
    
    code = wapp_code,
    data = wapp_data,
    prefix = wapp_prefix,
    title = document.title,
    
    k = 0,
    
    wapp;

summary.remove();
summary = summary.innerHTML;

emitter = new Emitter();
wapp = module.exports = emitter.target;

emitter.set('ready');

function listener(){
  if(this.readyState == 4){
    if(this.status == 0) this.yd.reject(new Error('A network error happened'));
    else this.yd.accept();
  }
}

wapp.goTo = wrap(function*(rsc,replace){
  var url = prefix + (rsc = (rsc || '').toString()),
      xhr,data,pk;
  
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
  
  if(global.history){
    if(replace) history.replaceState(data,data.title,url);
    else history.pushState(data,data.title,url);
  }
  
  emitter.unset('busy');
  emitter.set('ready');
  
  emitter.give('rsc',data);
});

if(global.history) window[walk](function* walker(){
  var e = yield this[until]('popstate');
  
  this[walk](walker);
  k = (k + 1)%1e15;
  
  if(e.state) emitter.give('rsc',e.state);
  else wapp.goTo(location.href.slice(prefix.length),true);
});

wapp.walk(function*(){
  var obj = {
    rsc: decodeURI(location.href).slice(prefix.length).replace(/(\?|#).*$/,''),
    title: title,
    summary: summary,
    data: data,
    code: code
  };
  
  title = null;
  summary = null;
  data = null;
  code = null;
  
  if(global.history) history.replaceState(obj,obj.title,location.href);
  if(!this.listeners('rsc')) yield this.until('rsc').listeners.change();
  
  if(global.history) emitter.give('rsc',history.state);
  else emitter.give('rsc',obj);
});

