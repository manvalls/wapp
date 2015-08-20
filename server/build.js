var wrap = require('y-walk').wrap,

    path = require('path'),

    cache = require('./cache.js'),
    getConf = require('./getConf.js'),
    getBr = require('./getBr.js'),
    packBundles = require('./packBundles.js'),
    removeDeleted = require('./removeDeleted.js'),

    build;

build = wrap(function*(dir,log){
  var conf = yield getConf(dir),
      brs,c,i;

  yield cache(dir,log);

  for(i in conf.scripts) if(conf.scripts.hasOwnProperty(i)){
    brs = getBr(conf.scripts[i],i);
    yield packBundles(i,path.resolve(conf.build,'scripts'),brs[0].bundle(),brs[1].bundle(),log);
  }

  yield removeDeleted(dir);

});

/*/ exports /*/

module.exports = build;
