var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,
    pct = require('pct'),

    prepareDir = require('./prepareDir.js'),

    path = require('path'),
    fs = require('fs'),

    getConf,parseDirs;



parseDirs = wrap(function*(dir,opt){
  var resolve = require('resolve');
  var i,j,keys,p;

  keys = Object.keys(opt.scripts);
  for(j = 0;j < keys.length;j++){

    i = keys[j];
    p = resolve.sync(opt.scripts[i], {basedir: dir});
    delete opt.scripts[i];
    opt.scripts[pct.encodeComponent(i)] = p;

  }

  yield prepareDir(opt.static = path.resolve(dir,opt.static));
  yield prepareDir(opt.assets = path.resolve(dir,opt.assets));

  yield prepareDir(opt.build = path.resolve(dir,opt.build));
  yield prepareDir(path.resolve(opt.build,'scripts'));
  yield prepareDir(path.resolve(opt.build,'static'));
  yield prepareDir(path.resolve(opt.build,'other'));

  return opt;
});

getConf = wrap(function*(dir){
  var pkg = path.resolve(dir,'app.json'),

      defaults = {
        static: './static',
        assets: './assets',
        build: './build',
        scripts: {
          main: './client'
        },
        plugins: [],
        instrument: false
      },

      cb,opt;

  fs.readFile(pkg,cb = Cb());
  try{ opt = JSON.parse((yield cb) + ''); }
  catch(e){ return yield parseDirs(dir,defaults); }

  opt.static = opt.static || defaults.static;
  opt.assets = opt.assets || defaults.assets;
  opt.build = opt.build || defaults.build;
  opt.plugins = opt.plugins || defaults.plugins;
  opt.scripts = opt.scripts || defaults.scripts;
  opt.scripts.main = opt.scripts.main || defaults.scripts.main;


  return yield parseDirs(dir,opt);
});

/*/ exports /*/

module.exports = getConf;
