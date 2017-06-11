var wrap = require('y-walk').wrap,
    chokidar = require('chokidar'),
    Detacher = require('detacher'),
    Cb = require('y-callback'),
    path = require('path'),
    assert = require('assert'),
    wait = require('y-timers/wait'),

    cache = require('./utils/cache.js'),
    getConf = require('./utils/getConf.js'),
    buildScripts = require('./utils/buildScripts.js'),
    removeDeleted = require('./utils/removeDeleted.js'),

    watch;

watch = wrap(function*(dir, log, watchifyOptions, d){
  var conf = yield getConf(dir),
      staticWatcher = chokidar.watch(conf.static),
      confWatcher = chokidar.watch( path.resolve(dir,'app.json') ),
      build = buildScripts(conf.scripts, conf.plugins, dir, path.resolve(conf.build,'scripts'), true, conf.instrument, log, watchifyOptions);

  while(true){
    let cb = Cb(),
        newConf, op;

    yield wait(100);
    staticWatcher.once('all', cb);
    confWatcher.once('all', cb);

    newConf = yield getConf(dir);

    try{
      assert.deepEqual(newConf.scripts, conf.scripts);
      assert.deepEqual(newConf.plugins, conf.plugins);
      assert.deepEqual(newConf.build, conf.build);
      assert.deepEqual(newConf.instrument, conf.instrument);
    }catch(err){
      build.detach();
      build = buildScripts(newConf.scripts, newConf.plugins, dir, path.resolve(newConf.build,'scripts'), true, newConf.instrument, log, watchifyOptions);
    }

    try{
      assert.equal(newConf.static, conf.static);
    }catch(err){
      staticWatcher.close();
      staticWatcher = chokidar.watch(newConf.static);
    }

    conf = newConf;

    yield cache(dir, log);
    yield removeDeleted(dir);
    op = yield {cb, d};

    if('d' in op){
      staticWatcher.close();
      confWatcher.close();
      build.detach();
      return;
    }

  }

});

/*/ exports /*/

module.exports = function(dir,log,watchifyOptions){
  var det = new Detacher();
  watch(dir,log,watchifyOptions,det);
  return det;
};
