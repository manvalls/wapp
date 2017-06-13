var walk = require('y-walk'),
    Resolver = require('y-resolver'),
    Detacher = require('detacher'),
    Cb = require('y-callback'),
    path = require('path'),
    pct = require('pct'),
    fs = require('fs'),
    zlib = require('zlib'),
    wait = require('y-timers/wait'),
    Lock = require('y-lock'),
    lock = require('./lock'),
    {PassThrough} = require('stream');

function* build(scripts, plugins, dir, dest, watch, instrument, log, watchifyOptions = {}, d){
  var SourceMap = require('fast-sourcemap-concat'),
      browserify = require('browserify'),
      watchify = require('watchify'),
      babelify = require('babelify'),
      resolve = require('resolve'),

      es5, es6, es5Common, es6Common;

  if(log == null) log = true;

  // Instantiate browserify

  es5 = browserify({
    debug: true,
    cache: {},
    packageCache: {}
  });

  es6 = browserify({
    debug: true,
    cache: {},
    packageCache: {}
  });

  // Add files

  for(let [name, file] of Object.entries(scripts)){
    let st;

    st = new PassThrough();
    st.file = path.resolve('node_modules', 'wapp_entrypoint', name);

    st.end(`
      global[${ JSON.stringify('tfbn0jc14vb9nha' + name) }] = require(${ JSON.stringify(file) });
    `);

    es5.add(st);

    st = new PassThrough();
    st.file = path.resolve('node_modules', 'wapp_entrypoint', name);

    st.end(`
      global[${ JSON.stringify('tfbn0jc14vb9nha' + name) }] = require(${ JSON.stringify(file) });
    `);

    es6.add(st);

  }

  // Apply custom plugins

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

  // Add default transformations

  function es5Plugins(){
    return [
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
    ];
  }

  function es6Plugins(){
    return [];
  }

  es5.transform(babelify.configure({
    plugins: es5Plugins(),
    comments: false,
    compact: true
  }),{global: true});

  es6.transform(babelify.configure({
    plugins: es6Plugins(),
    comments: false,
    compact: true
  }),{global: true});

  if(instrument){
    es5.transform(require('browserify-istanbul'));
    es6.transform(require('browserify-istanbul'));
  }

  // File write logic

  function* handleStream(name, file, stream, common, es5, d){
    var files = [],
        generated = [
          path.resolve(dest, name + (es5 ? '.es5' : '') + '.js'),
          path.resolve(dest, name + '.us' + (es5 ? '.es5' : '') + '.js')
        ],
        data, shimmed, lock, unshimmed;

    data = (yield stream) + '';
    lock = common.lock;

    shimmed = new SourceMap({
      baseDir: dir,
      outputFile: generated[0]
    });

    unshimmed = new SourceMap({
      baseDir: dir,
      outputFile: generated[1]
    });

    yield lock.take();

    try{

      if(es5){
        files = fs.readdirSync( path.resolve(__dirname,'shims') );
        files.sort();
        files = files.map(file => path.resolve(__dirname,'shims',file));
        files.unshift( require.resolve('babel-polyfill/dist/polyfill.js') );
      }

      for(let file of files){
        let source = fs.readFileSync(file, 'utf8');
        shimmed.addFileSource(file, source);
      }

      shimmed.addFileSource(path.resolve('/.scripts', 'node_modules', 'wapp_common', name), (yield common) + '');
      shimmed.addFileSource(file, data);
      unshimmed.addFileSource(file, data);

      yield [
        shimmed.end(),
        unshimmed.end()
      ];

      generated = generated.concat( generated.map(file => file.replace(/\.js$/, '') + '.map') );

      yield generated.map((file) => {
        return fs.createReadStream(file).pipe( zlib.createGzip({level: 9, memLevel: 9}) ).pipe( fs.createWriteStream(file + '.gz') );
      });

    }finally{
      lock.give();
    }

  }

  function getStream(name, file, common, es5){
    var stream = new PassThrough();
    walk(handleStream, [name, file, stream, common, es5]);
    return stream;
  }

  function getOutputStreams(common, es5){
    var result = [];

    for(let [name, file] of Object.entries(scripts)){
      result.push( getStream(name, file, common, es5) );
    }

    return result;
  }

  es5.plugin(require('factor-bundle'), { outputs: () => getOutputStreams(es5Common, true) });
  es6.plugin(require('factor-bundle'), { outputs: () => getOutputStreams(es6Common) });

  if(watch){
    es5.plugin(watchify, watchifyOptions);
    es6.plugin(watchify, watchifyOptions);
  }

  function* bundle(br, res){
    var lock = new Lock();

    res.yielded.lock = lock;
    res.resolve( yield br.bundle() );
    yield lock.take();
    lock.give();
  }

  function* bundleAll(){
    var es6Res = new Resolver(),
        es5Res = new Resolver();

    es6Common = es6Res.yielded;
    es5Common = es5Res.yielded;
    yield lock.take();

    if(log){
      let d = new Date();

      process.stdout.write(
        complete(d.getHours()) + ':' + complete(d.getMinutes()) + ':' + complete(d.getSeconds()) +
        ' - Building scripts... '
      );

    }

    try{

      yield [
        walk(bundle, [es6, es6Res]),
        walk(bundle, [es5, es5Res])
      ];

      if(log){
        let scriptNames = Object.keys(scripts);
        let scriptsTree = '';
        let i = 0;

        for(i = 0;i < scriptNames.length - 1;i++){
          scriptsTree += ' ├ ' + pct.decodeComponent(scriptNames[i]) + '\n';
        }

        scriptsTree += ' └ ' + pct.decodeComponent(scriptNames[i]) + '\n';

        console.log('\u001b[32m✓\u001b[0m');
        console.log(scriptsTree);
      }

    }catch(e){

      if(log){
        console.log('\u001b[31m✗\u001b[0m\n');

        e = e.errors[0] || e.errors[1] || e.errors[2];
        if(e.codeFrame && e.filename){
          console.log(e.filename);
          console.log('\n' + e.codeFrame + '\n');
        }else process.stdout.write(e.toString().replace(/^\n+|\n+$/g,'') + '\n\n');

      }

    }

    lock.give();

  }

  function complete(n){
    return (n >= 10 ? '' : '0') + n;
  }

  while(watch){
    let cb = Cb(),
        op;

    yield wait(100);
    es5.once('update', cb);
    es6.once('update', cb);

    yield walk(bundleAll);
    op = yield {cb, d};

    if('d' in op){
      es5.close();
      es6.close();
      return;
    }

  }

  yield walk(bundleAll);

}

/*/ exports /*/

module.exports = function(...args){
  var d = new Detacher();
  walk(build, [...args, d]).add(d);
  return d;
};
