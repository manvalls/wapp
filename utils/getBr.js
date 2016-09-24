var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    path = require('path');

function getBr(file,name,watch,instrument){
  var browserify = require('browserify'),
      babelify = require('babelify'),

      watchify,es5,es6;

  es5 = browserify({
    cache: {},
    packageCache: {},
    standalone: 'tfbn0jc14vb9nha' + name
  });

  es5.transform(babelify.configure({
    plugins: [
      require('babel-plugin-check-es2015-constants'),
      require('babel-plugin-transform-es2015-arrow-functions'),
      require('babel-plugin-transform-es2015-block-scoped-functions'),
      require('babel-plugin-transform-es2015-block-scoping'),
      require('babel-plugin-transform-es2015-classes'),
      require('babel-plugin-transform-es2015-computed-properties'),
      require('babel-plugin-transform-es2015-destructuring'),
      require('babel-plugin-transform-es2015-duplicate-keys'),
      require('babel-plugin-transform-es2015-for-of'),
      require('babel-plugin-transform-es2015-function-name'),
      require('babel-plugin-transform-es2015-literals'),
      require('babel-plugin-transform-es2015-object-super'),
      require('babel-plugin-transform-es2015-parameters'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      require('babel-plugin-transform-es2015-spread'),
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-template-literals'),
      require('babel-plugin-transform-es2015-typeof-symbol'),
      require('babel-plugin-transform-es2015-unicode-regex'),
      require('babel-plugin-transform-exponentiation-operator'),
      require('babel-plugin-transform-regenerator')
    ],
    compact: false
  }),{global: true});

  es6 = browserify({
    cache: {},
    packageCache: {},
    standalone: 'tfbn0jc14vb9nha' + name
  });

  es6.transform(babelify.configure({compact: false}),{global: true});

  if(instrument){
    es5.transform(require('browserify-istanbul'));
    es6.transform(require('browserify-istanbul'));
  }

  es5.add(file);
  es6.add(file);

  if(watch){
    watchify = require('watchify');

    es5.plugin(watchify);
    es6.plugin(watchify);
  }

  return [es5,es6];
}

/*/ exports /*/

module.exports = getBr;
