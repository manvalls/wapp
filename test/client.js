var app = require('../main.js'),
    t = require('u-test'),
    assert = require('assert'),
    walk = require('y-walk');

// Set test endpoint

app.on('/',function(e){
  __U_TEST_REMOTE__ = e.data.testEndpoint;
});

app.trigger();

// Tests

walk(function*(){

  yield t('Static',function*(){
    var e;

    app.goTo('/static',{foo: 'bar'},'foo');
    e = yield app.until('/static');
    assert.strictEqual(e.data,'hi');
    assert.strictEqual(e.path,'/static');
    assert.strictEqual(e.query.foo,'bar');
    assert.strictEqual(e.fragment,'foo');

    app.goTo('/static2','foo');
    e = yield app.until('/static2');
    assert.deepEqual(e.data,{foo: 'bar'});
    assert.strictEqual(e.fragment,'foo');
  });

  yield t('Assets',function*(){
    var res;

    res = yield fetch('/robots.txt');
    assert.strictEqual((yield res.text()).trim(),'hi :)');
    assert.strictEqual(app.asset('/./../foo/../robots'),'http://localhost:8888/.assets/robots');

    app.goTo('/foo/bar');
    e = yield app.until('/foo/bar');
    assert.strictEqual(app.asset('./foo/../robots'),'http://localhost:8888/.assets/foo/robots');
  });

  yield t('app.load',function*(){
    assert.deepEqual(yield [
      app.load('foo'),
      app.load('foo')
    ],['bar','bar']);
    assert.strictEqual(yield app.load('foo'),'bar');
  });

  yield t('Language',function*(){
    var lang,e;

    app.goTo('/language/client');
    e = yield app.until('/language/client');

    for(lang of e.language()) assert.strictEqual(e.language(lang[0]),1);
    assert.strictEqual(e.language('foo-bar'),0);
  });

});

// Cleanup

t.done.listen(function(){
  app.goTo('/detach');
});
