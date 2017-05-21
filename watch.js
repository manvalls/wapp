var wrap = require('y-walk').wrap,
    chokidar = require('chokidar'),
    Detacher = require('detacher'),
    Cb = require('y-callback/node'),

    path = require('path'),
    fs = require('fs'),

    cache = require('./utils/cache.js'),
    getConf = require('./utils/getConf.js'),
    getBr = require('./utils/getBr.js'),
    packBundles = require('./utils/packBundles.js'),
    removeDeleted = require('./utils/removeDeleted.js'),

    watch,onPkg;

function getSw(staticDir,dir,log){
  var sw = chokidar.watch(staticDir);

  sw.on('all',onStatic);
  sw.dir = dir;
  sw.log = log;

  cache(dir,log);

  return sw;
}

function getPw(conf,dir,log){
  var pw = chokidar.watch(path.resolve(dir,'app.json')),
      wMap = {},
      brs,i;

  pw.on('all',onPkg);

  pw.prevConf = conf;
  pw.dir = dir;
  pw.sw = getSw(conf.static,dir,log);

  for(i in conf.scripts) if(conf.scripts.hasOwnProperty(i)){
    wMap[i] = getW(conf.scripts[i],i,path.resolve(conf.build,'scripts'),log,conf.instrument,conf.plugins,dir);
  }

  pw.wMap = wMap;

  return pw;
}

function getW(file,name,folder,log,instrument,plugins,dir){
  var brs = getBr(file,name,true,instrument,plugins,dir);

  brs[0].name = name;
  brs[0].folder = folder;
  brs[0].log = log;
  brs[0].other = brs[1];

  brs[0].on('update',onUpdate);

  packBundles(name,folder,brs[0],brs[1],log);
  return brs;
}

function closePw(pw){
  var i;

  pw.sw.close();

  for(i in pw.wMap) if(pw.wMap.hasOwnProperty(i)){
    pw.wMap[i][0].close();
    pw.wMap[i][1].close();
  }

  pw.close();
}

function onUpdate(){
  packBundles(this.name,this.folder,this,this.other,this.log);
}

watch = wrap(function*(dir,log,detacher){
  var conf = yield getConf(dir);
  detacher.listen(closePw,[getPw(conf,dir,log)]);
});

onPkg = wrap(function*(){
  var conf = yield getConf(this.dir),
      keys = new Set(Object.keys(conf.scripts).concat(Object.keys(this.prevConf.scripts))),
      i,cb;

  if(conf.static != this.prevConf.static){
    this.sw.close();
    this.sw = getSw(conf.static,this.dir,this.log);
  }

  for(i of keys){

    if(conf.scripts[i] != this.prevConf.scripts[i]){

      if(this.wMap[i]){
        this.wMap[i][0].close();
        this.wMap[i][1].close();
        delete this.wMap[i];
      }

      if(conf.scripts[i])
        this.wMap[i] = getW(conf.scripts[i],i,path.resolve(conf.build,'scripts'),this.log,conf.instrument,conf.plugins,this.dir);

    }

  }

  this.prevConf = conf;
  removeDeleted(this.dir);

});

function onStatic(){
  cache(this.dir,this.log);
  removeDeleted(this.dir);
}

/*/ exports /*/

module.exports = function(dir,log){
  var det = new Detacher();
  watch(dir,log,det);
  return det;
};
