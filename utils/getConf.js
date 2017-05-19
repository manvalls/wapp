var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    prepareDir = require('./prepareDir.js'),

    path = require('path'),
    fs = require('fs'),

    getConf,parseDirs;



parseDirs = wrap(function*(dir,opt){
  var i,j,keys,p;

  keys = Object.keys(opt.scripts);
  for(j = 0;j < keys.length;j++){

    i = keys[j];
    p = path.resolve(dir,opt.scripts[i]);

    delete opt.scripts[i];
    opt.scripts[i.toLowerCase().replace(/\W/g,'')] = p;

  }

  yield prepareDir(opt.static = path.resolve(dir,opt.static));
  yield prepareDir(opt.assets = path.resolve(dir,opt.assets));

  yield prepareDir(opt.build = path.resolve(dir,opt.build));
  yield prepareDir(path.resolve(opt.build,'scripts'));
  yield prepareDir(path.resolve(opt.build,'static'));

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
        instrument: false
      },

      cb,opt;

  fs.readFile(pkg,cb = Cb());
  try{ opt = JSON.parse((yield cb) + ''); }
  catch(e){ return yield parseDirs(dir,defaults); }

  opt.static = opt.static || defaults.static;
  opt.assets = opt.assets || defaults.assets;
  opt.build = opt.build || defaults.build;
  opt.scripts = opt.scripts || defaults.scripts;
  opt.scripts.main = opt.scripts.main || defaults.scripts.main;


  return yield parseDirs(dir,opt);
});

/*/ exports /*/

module.exports = getConf;
