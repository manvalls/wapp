var Wapp = require('../main.js'),
    watch = require('../watch.js'),
    build = require('../build.js'),
    browser = require('u-test/browser'),
    http = require('http'),
    Hsm = require('hsm'),
    fs = require('fs'),
    server = http.createServer().listen(0),
    hsm = new Hsm(server),
    app = new Wapp(__dirname),
    endpoint, watcher;

app.bind(hsm);

server.once('listening',function(){
  try{
    fs.mkdirSync(__dirname + '/static/dir');
    fs.writeFileSync(__dirname + '/static/dir/404.json','404');
  }catch(e){ }

  watcher = watch(__dirname,true);
  build(__dirname,true).listen(() => {
    try{
      fs.unlinkSync(__dirname + '/static/dir/404.json');
      fs.rmdirSync(__dirname + '/static/dir');
      fs.writeFileSync(__dirname + '/app.json',`{
  "instrument": true,
  "scripts": {
    "foo": "./foo.js",
    "baz": "./foo.js",
    "fake": "./fake.js"
  }
}
`);

      setTimeout(()=>fs.writeFileSync(__dirname + '/app.json',`{
  "instrument": true,
  "scripts": {
    "foo": "./foo.js",
    "baz": "./foo.js"
  }
}
`),500);
    }catch(e){ console.log(e.stack); }
    endpoint = browser('http://localhost:' + server.address().port);
  });
});

app.rewrite('/robots.txt','/.assets/robots.txt');

app.take('/',function*(e){

  e.answer({
    testEndpoint: yield endpoint
  });

});

app.take('/detach',function(e){
  e.answer('ok');
  watcher.detach();
  server.close();
});

app.take('/static',function(e){
  e.use('hi');
});

app.take('/static404',function(e){
  e.use('dir/404');
});

app.take('/cookies',function(e){
  e.setCookie({server: 'cookie'});
  e.answer(e.cookies);
});

app.take('/query',function(e){
  e.answer(e.query);
});

app.take('/error',function(e){
  e.throw(400);
});

app.take('/prefix',function(e){
  if(e.lastTime > new Date(0)) return e.notModified();
  e.answer(app.prefix);
});

app.take('/static2',function(e){
  e.use('es/test');
});

app.take('/url',function(e){

  e.answer({
    url: e.url,
    fragment: e.fragment,
    rawQuery: e.rawQuery,
    path: e.path
  });

});

app.take('/origin',function(e){
  e.answer(e.origin);
});

app.take('/language',function(e){
  e.answer(e.language().next().value[0]);
});

app.take('/redirect',function(e){
  e.redirect('/static');
});

app.take('/asset',function(e){
  e.answer(app.asset(e.query.asset));
});

app.take('/echo',function(e){
  e.answer(e.data);
});

app.take('/e500',function(e){
  var obj = {};
  obj.self = obj;
  e.answer(obj);
});

app.take('/*',function(e){
  e.answer('default');
});

app.take('e/*',function(e){
  e.answer('NOO');
});
