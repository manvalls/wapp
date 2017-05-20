var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    path = require('path');

function getBr(file,name,watch,instrument,plugins,dir){
  var browserify = require('browserify'),
      babelify = require('babelify'),
      resolve = require('resolve'),

      watchify,es5,es6;

  es5 = browserify({
    cache: {},
    packageCache: {},
    standalone: 'tfbn0jc14vb9nha' + name
  });

  es6 = browserify({
    cache: {},
    packageCache: {},
    standalone: 'tfbn0jc14vb9nha' + name
  });

  for(let [plugin, options = {}, resolveOptions = {}] of plugins){

    for(let [key, value] of Object.entries(resolveOptions)){

      if(value instanceof Array){
        let nv = [];

        for(let elem of value){
          try{ nv.push( resolve.sync(elem, {basedir: dir}) ); }
          catch(e){ nv.push( path.resolve(dir, elem) ); }
        }

        options[key] = nv;

      }else{
        try{ options[key] = resolve.sync(value, {basedir: dir}); }
        catch(e){ options[key] = path.resolve(dir, value); }
      }

    }

    plugin = require( resolve.sync(plugin, {basedir: dir}) );
    es5.plugin(plugin, options);
    es6.plugin(plugin, options);

  }

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
      require('babel-plugin-transform-async-to-generator'),
      require('babel-plugin-transform-exponentiation-operator'),
      require('babel-plugin-transform-regenerator')
    ],
    compact: false
  }),{global: true});

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
