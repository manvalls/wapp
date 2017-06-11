var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,
    nijm = require('nijm'),

    fs = require('fs'),
    path = require('path'),

    fillTemplate = require('./fillTemplate.js'),
    getConf = require('./getConf.js'),
    newer = require('./newer.js'),
    lock = require('./lock.js'),
    writeBoth = require('./writeBoth.js'),
    prepareDir = require('./prepareDir.js'),

    template = path.resolve(__dirname,'template.html'),

    cache,cacheFolder;

function complete(n){
  return (n >= 10 ? '' : '0') + n;
}

cacheFolder = wrap(function*(folder,from,to,log){
  var cb,files,file,relative,destination,stats,i,data,binary;

  fs.readdir(folder,cb = new Cb());
  files = yield cb;

  for(i = 0;i < files.length;i++){

    file = path.resolve(folder,files[i]);
    relative = path.relative(from,file).replace(/\.[^\.\/\\]*$/,'');
    destination = path.resolve(to,relative + '.json');

    yield prepareDir(destination.replace(/[\/\\][^\/\\]*$/,''));

    fs.stat(file,cb = Cb());
    stats = yield cb;

    if(stats.isDirectory()) yield cacheFolder(file,from,to,log);
    else if(/\.json$/.test(file) && (
      (yield newer(file,destination)) || (yield newer(template,destination))
    )){

      if(log){
        let d = new Date();
        process.stdout.write(
          complete(d.getHours()) + ':' + complete(d.getMinutes()) + ':' + complete(d.getSeconds()) +
          ' - Preparing \u001b[3m' + relative + '\u001b[0m... '
        );
      }

      try{

        fs.readFile(file,cb = Cb());
        data = JSON.stringify(JSON.parse(nijm((yield cb) + '')));

        yield writeBoth(destination,data);
        yield writeBoth(path.resolve(to,relative + '.html'),fillTemplate(data));

        if(log) console.log('\u001b[32m✓\u001b[0m');

      }catch(e){

        if(log){
          console.log('\u001b[31m✗\u001b[0m');
          console.log('\n' + e.message + '\n');
        }

      }

    }

  }

});

cache = wrap(function*(dir,log){
  var conf = yield getConf(dir);

  yield lock.take();

  if(log == null) log = true;
  yield cacheFolder(conf.static,conf.static,path.resolve(conf.build,'static'),log);

  lock.give();
});

/*/ exports /*/

module.exports = cache;
