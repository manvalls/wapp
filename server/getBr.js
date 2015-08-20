var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    path = require('path'),

    es5Args = {cache:{}, packageCache: {}},
    es6Args = {cache:{}, packageCache: {}};

function getBr(file,name,watch){
  var browserify = require('browserify'),
      babelify = require('babelify'),

      watchify,es5,es6;

  es5 = browserify({
    cache: es5Args.cache,
    packageCache: es5Args.packageCache,
    standalone: 'wapp_script_' + name
  });

  es6 = browserify({
    cache: es6Args.cache,
    packageCache: es6Args.packageCache,
    standalone: 'wapp_script_' + name
  });

  es5.transform(babelify.configure({
    blacklist: ['strict'],
    nonStandard: false
  }),{global: true});

  es5.add(file);
  es6.add(file);

  if(watch){
    watchify = require('watchify');

    es5 = watchify(es5);
    es6 = watchify(es6);
  }

  return [es5,es6];
}

/*/ exports /*/

module.exports = getBr;
