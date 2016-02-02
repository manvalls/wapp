var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,
    nijm = require('nijm'),

    fs = require('fs'),
    path = require('path'),
    Readable = require('stream').Readable,

    writeBoth = require('./writeBoth.js'),
    lock = require('./lock.js'),

    packBundles,packES5,packES6;


function complete(n){
  return (n >= 10 ? '' : '0') + n;
}

packES5 = wrap(function*(file,b){
  var src = (yield b) + '',
      cb,i,files;

  fs.readFile(require.resolve('babel-polyfill/dist/polyfill.js'),cb = Cb());
  src = (yield cb) + '\n' + src;

  fs.readdir(path.resolve(__dirname,'shims'),cb = Cb());
  files = yield cb;

  files.sort();
  files.reverse();

  for(i = 0;i < files.length;i++){
    fs.readFile(path.resolve(__dirname,'shims',files[i]),cb = Cb());
    src = (yield cb) + '\n' + src;
  }

  yield writeBoth(file,nijm(src));
});

packES6 = wrap(function*(file,b){
  yield writeBoth(file,nijm((yield b) + ''));
});

packBundles = wrap(function*(name,folder,es5,es6,log){
  var file = path.resolve(folder,name),
      es5b,es6b;

  yield lock.take();

  es5b = es5.bundle();
  es6b = es6.bundle();
  
  if(log == null) log = true;

  if(log){
    d = new Date();
    process.stdout.write(
      complete(d.getHours()) +
      ':' +
      complete(d.getMinutes()) +
      ' - Building \u001b[3m' + name + '\u001b[0m... ');
  }

  try{

    yield [
      packES5(file + '.es5.js',es5b),
      packES6(file + '.js',es6b)
    ];

    if(log) console.log('\u001b[92m✓\u001b[0m');

  }catch(e){

    if(log){
      console.log('\u001b[91m✗\u001b[0m\n');

      e = e.errors[0] || e.errors[1];
      if(e.codeFrame && e.filename){
        console.log(e.filename);
        console.log('\n' + e.codeFrame + '\n');
      }else console.log(e.message + '\n');

    }

  }

  lock.give();

});

/*/ exports /*/

module.exports = packBundles;
