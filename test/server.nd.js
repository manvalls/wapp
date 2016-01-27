var Wapp = require('../main.js'),
    watch = require('../watch.js'),
    build = require('../build.js'),
    browser = require('u-test/browser'),
    http = require('http'),
    server = http.createServer().listen(8888),
    app = new Wapp(server,__dirname),
    endpoint;

server.once('listening',function(){
  build(__dirname,false).listen( () => endpoint = browser('http://localhost:8888/') );
});

app.rewrite('/robots.txt','/.assets/robots.txt');

app.on('/',function*(e){

  yield e.take();
  e.answer({
    testEndpoint: yield endpoint
  });

});

app.on('/detach',function*(e){
  yield e.take();
  e.answer('ok');
  app.detach();
  server.close();
});

app.on('/static',function*(e){
  yield e.take();
  e.use('hi');
});

app.on('/static2',function*(e){
  yield e.take();
  e.use('es/test');
});

app.on('/*',function*(e){
  yield e.take();
  e.answer('default');
});

app.on('e/*',function*(e){
  yield e.take();
  e.answer('NOO');
});
