var wrap = require('y-walk').wrap,

    path = require('path'),

    cache = require('./utils/cache.js'),
    getConf = require('./utils/getConf.js'),
    getBr = require('./utils/getBr.js'),
    packBundles = require('./utils/packBundles.js'),
    removeDeleted = require('./utils/removeDeleted.js'),

    build;

build = wrap(function*(dir,log){
  var conf = yield getConf(dir),
      brs,c,i;

  yield cache(dir,log);

  for(i in conf.scripts) if(conf.scripts.hasOwnProperty(i)){
    brs = getBr(conf.scripts[i],i,false,conf.instrument);
    yield packBundles(i,path.resolve(conf.build,'scripts'),brs[0],brs[1],log);
  }

  yield removeDeleted(dir);

});

/*/ exports /*/

module.exports = build;
