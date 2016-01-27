var wrap = require('y-walk').wrap,
    Cb = require('y-callback/node'),

    path = require('path'),
    fs = require('fs'),

    lock = require('./lock.js'),
    getConf = require('./getConf.js'),

    RE = /((\.es5\.js\.gz)|(\.es5\.js)|(\.js\.gz)|(\.js))$/,
    SRE = /((\.html\.gz)|(\.html)|(\.json\.gz)|(\.json))$/,

    removeDeleted,rmScripts,rmStatic,rmEntity,checkStaticFolder;

rmEntity = wrap(function*(ent){
  var stats,files,cb,i;

  fs.stat(ent,cb = Cb());
  stats = yield cb;

  if(stats.isDirectory()){

    fs.readdir(ent,cb = Cb());
    files = yield cb;

    for(i = 0;i < files.length;i++) yield rmEntity(path.resolve(ent,files[i]));
    fs.rmdir(ent,cb = Cb());
    yield cb;

  }else{

    fs.unlink(ent,cb = Cb());
    yield cb;

  }

});

rmScripts = wrap(function*(conf){
  var files,cb,i;

  fs.readdir(path.resolve(conf.build,'scripts'),cb = Cb());
  files = yield cb;

  for(i = 0;i < files.length;i++) if(!conf.scripts.hasOwnProperty(files[i].replace(RE,''))){
    yield rmEntity(path.resolve(conf.build,'scripts',files[i]));
  }

});

checkStaticFolder = wrap(function*(folder,from){
  var files,i,cb,stats,file;

  fs.readdir(folder,cb = Cb());
  files = yield cb;

  for(i = 0;i < files.length;i++) try{

    try{

      fs.stat(path.resolve(from,files[i].replace(SRE,'') + '.json'),cb = Cb());
      stats = yield cb;

      if(stats.isDirectory()) throw new Error();

    }catch(e){

      fs.stat(path.resolve(from,files[i]),cb = Cb());
      stats = yield cb;

      if(!stats.isDirectory()) throw new Error();
      yield checkStaticFolder(path.resolve(folder,files[i]),path.resolve(from,files[i]));

    }

  }catch(e){ yield rmEntity(path.resolve(folder,files[i])); }

});

rmStatic = wrap(function*(conf){
  var from = conf.static,
      to = path.resolve(conf.build,'static');

  yield checkStaticFolder(to,from);
});

removeDeleted = wrap(function*(dir){
  var conf = yield getConf(dir);

  yield lock.take();

  try{

    yield [
      rmScripts(conf),
      rmStatic(conf)
    ];

  }catch(e){}

  lock.give();

});

/*/ exports /*/

module.exports = removeDeleted;
