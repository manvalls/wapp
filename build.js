var wrap = require('y-walk').wrap,

    path = require('path'),

    cache = require('./utils/cache.js'),
    getConf = require('./utils/getConf.js'),
    buildScripts = require('./utils/buildScripts.js'),
    removeDeleted = require('./utils/removeDeleted.js'),

    build;

build = wrap(function*(dir,log){
  var conf = yield getConf(dir),
      brs,c,i;

  yield cache(dir,log);
  yield buildScripts(conf.scripts, conf.plugins, dir, path.resolve(conf.build,'scripts'), false, conf.instrument, log);
  yield removeDeleted(dir);

});

/*/ exports /*/

module.exports = build;
