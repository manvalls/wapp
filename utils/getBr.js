var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    path = require('path'),

    es5Args = {cache:{}, packageCache: {}},
    es6Args = {cache:{}, packageCache: {}};

function getBr(file,name,watch,instrument){
  var browserify = require('browserify'),
      babelify = require('babelify'),
      es2015 = require('babel-preset-es2015'),

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
    presets: [es2015]
  }),{global: true});

  if(instrument){
    es5.transform(require('browserify-istanbul'));
    es6.transform(require('browserify-istanbul'));
  }

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
