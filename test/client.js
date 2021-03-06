var app = require('../main.js'),
    t = require('u-test'),
    assert = require('assert'),
    walk = require('y-walk'),
    wait = require('y-timers/wait');

module.exports = 'foobar';

// Tests

app.take('/',function*(e){

  global.__U_TEST_REMOTE__ = e.data.testEndpoint;

  yield t('app.load',function*(){
    var error;

    assert.deepEqual(yield [
      app.load('foo'),
      app.load('foo')
    ],['bar','bar']);
    assert.strictEqual(yield app.load('foo'),'bar');

    error = null;
    try{ yield app.load('bar'); }
    catch(e){ error = e; }
    assert(!!error);

    assert.strictEqual('foobar',yield app.load('main'));
    yield wait(0);
    assert.strictEqual(yield app.load('baz'),'bar');

    error = null;
    try{ yield app.load('foobar'); }
    catch(e){ error = e; }
    assert(!!error);
  });

  yield t('app.task()',function*(){
    var t1,t2;

    t1 = app.task();
    t2 = app.task();

    t1.accept();
    yield t1;
    yield t2;

    t1 = app.task();
    t2 = app.task();
    app.popTask();
    yield t2;
    history.back();
    yield t1;

    t1 = app.task();
    t2 = app.task();

    history.back();
    yield t2;

    history.back();
    yield t1;

    t1 = app.task();
    t2 = app.task();
    history.back();

    yield t2;
    assert(!t1.done);

    t2 = app.task();
    history.back();
    yield t2;

    yield wait(100);
    assert(!t1.done);
    history.back();
    yield t1;

  });

  yield t('Static',function*(){
    var e,pe,yd,txt,res;

    app.get('/static',{foo: 'bar'},'foo');
    e = yield app.until('/static');
    assert.strictEqual(e.data,'hi');
    assert.strictEqual(e.path,'/static');
    assert.strictEqual(e.query.foo,'bar');
    assert.strictEqual(e.fragment,'foo');
    assert.strictEqual(e.url,'/static?foo=bar#foo');
    assert.strictEqual(e.url,'/static?foo=bar#foo');
    assert.strictEqual(e.origin,location.origin);

    app.goTo('/static2','foo');
    e = yield app.until('/static2');
    assert.deepEqual(e.data,{foo: 'bar'});
    assert.strictEqual(e.fragment,'foo');

    app.goTo('/static2');
    app.goTo('/static');
    e = yield app.until('/static');

    app.goTo('/static404');
    yield app.until('e/404');

    txt = yield (yield fetch('/static',{
      headers: new Headers({
        accept: 'text/html'
      })
    })).text();

    assert(txt.indexOf('"hi"') != -1)
    assert(txt.indexOf('"hi"') != 0)

    res = yield fetch('/static404',{
      headers: new Headers({
        accept: 'text/html'
      })
    });

    assert.strictEqual(res.status,404);

    res = yield fetch('/static',{
      headers: new Headers({
        accept: '*/*'
      })
    });

    assert.strictEqual(res.status,403);

    app.goTo('/redirect');
    e = yield app.until('/static');
    assert.strictEqual(e.data,'hi');

    let error;

    try{
      yield app.ajax.get('/static404');
    }catch(e){
      error = e;
    }

    assert.strictEqual(error.code, 404);

  });

  yield t('Query',function*(){
    var e;

    app.goTo('/query',{
      _hidden: true,
      foo: 'bar'
    });

    e = yield app.until('/query');
    assert(!e.query.hidden);
    assert(!e.data.hidden);
    assert.strictEqual(e.data.foo,'bar');
    assert.strictEqual(e.query.foo,'bar');
  });

  yield t('Assets',function*(){
    var res,pe;

    res = yield fetch('/robots.txt');
    assert.strictEqual((yield res.text()).trim(),'hi :)');
    assert.strictEqual(app.asset('/./../foo/../robots'),location.origin + '/.assets/robots');

    app.goTo('/foo/bar');
    e = yield app.until('/foo/bar');
    assert.strictEqual(app.asset('./foo/../robots'),location.origin + '/.assets/foo/robots');

    app.goTo('/asset',{asset: '/./../foo/../robots'});
    pe = e;
    e = yield app.until('/asset');
    assert.strictEqual(e.data,'/.assets/robots');
    yield pe.changed();
  });

  yield t('Language',function*(){
    var lang,e;

    app.goTo('/language/client');
    e = yield app.until('/language/client');

    for(lang of e.language()) assert.strictEqual(e.language(lang[0]),1);
    assert.strictEqual(e.language('foo-bar'),0);
  });

  t('Title',function(){
    app.title = 'foo';
    assert.strictEqual(document.title,app.title);
    assert.strictEqual(document.title,'foo');
  });

  yield t('Cookies',function*(){
    var e;

    app.goTo('/cookies');
    e = yield app.until('/cookies');

    e.setCookie({client: 'cookie'});
    app.goTo('/cookies');
    e = yield app.until('/cookies');
    assert.strictEqual(e.cookies.client,'cookie');
    assert.deepEqual(e.cookies,e.data);
  });

  yield t('Error',function*(){

    app.goTo('/error');
    yield app.until('e/400');

    app.goTo('/e500');
    yield app.until('e/500');

  });

  yield t('Prefix',function*(){
    var e;

    app.goTo('/prefix');
    e = yield app.until('/prefix');
    assert.strictEqual(e.data,app.prefix);
    assert.strictEqual(e.data,'');

    app.goTo('/prefix');
    e = yield app.until('/prefix');
    assert.strictEqual(e.data,'');
  });

  yield t('Url',function*(){
    var e;

    app.goTo('/url?foo',{bar: 'foo'});
    e = yield app.until('/url');
    assert.strictEqual(e.data.url,e.url);
    assert.strictEqual(e.data.url,'/url?foo&bar=foo');
    assert.strictEqual(e.data.rawQuery,e.rawQuery);
    assert.strictEqual(e.data.rawQuery,'foo&bar=foo');
    assert.strictEqual(e.data.fragment,e.fragment);
    assert.strictEqual(e.data.fragment,null);

  });

  yield t('Origin',function*(){
    var e;

    app.goTo('/origin');
    e = yield app.until('/origin');
    assert.strictEqual(e.data,null);
    assert.strictEqual(e.origin,location.origin);
  });

  yield t('Language',function*(){
    var e;

    app.goTo('/language');
    e = yield app.until('/language');
    assert.strictEqual(e.data.toLowerCase(),e.language().next().value[0].toLowerCase());
  });

  yield t('app.route()',function*(){
    var getter = app.route('/route/*'),
        e;

    assert.strictEqual(getter.value,null);
    assert.strictEqual(getter,app.route('/route/*'));

    app.goTo('/route/1');
    e = yield app.until('/route/1');
    yield e.take();
    assert.strictEqual(getter.value.common,e.common);

    app.goTo('/route/2');
    e = yield app.until('/route/2');
    yield e.take();
    assert.strictEqual(getter.value.common,e.common);

    app.goTo('/default');
    yield e.changed();
    assert.strictEqual(getter.value,null);

    app.detachRoute('/route/*');
    app.goTo('/route/1');
    e = yield app.until('/route/1');
    yield e.take();
    assert.strictEqual(getter.value,null);

  });

  yield t('app.post()',function*(){
    var e,fd;

    app.post('test', '/echo');
    e = yield app.until('/echo');
    assert.strictEqual(e.data, 'test');

    fd = new FormData();
    fd.append('foo', 'bar');
    fd.append('bar', 'baz');
    fd.append('bar', 'buzz');
    app.post(fd, '/echo');
    e = yield app.until('/echo');
    assert.deepEqual(e.data, {foo: 'bar', bar: ['baz', 'buzz']});

    fd = new FormData();
    fd.append('file', new Blob(['foobar'], {type: 'text/plain'}), 'foobar.txt');
    app.post(fd, '/echoFile');
    e = yield app.until('/echoFile');

    assert.deepEqual(e.data, {
      name: 'foobar.txt',
      type: 'text/plain',
      content: 'foobar'
    });

    assert.strictEqual('test', (yield app.ajax.post('test', '/echo')));

  });

  yield t('isAJAX',function*(){
    var e;

    assert.strictEqual((yield app.ajax.get('/isajax')), true);

    app.get('/isajax');
    e = yield app.until('/isajax');
    assert.strictEqual(e.data, false);

  });

  yield t('Partials',function*(){
    var e;

    app.post({foo: 'bar'},'/echo');
    e = yield app.until('/echo');
    assert.deepEqual(e.data, {foo: 'bar'});

    app.reduce((...args) => Object.assign({}, ...args)).get('/ispartial');
    e = yield app.until('/ispartial');
    assert.deepEqual(e.data, {foo: 'bar', partial: true});

    app.reduceRight().post({bar: 'foo'},'/echo');
    e = yield app.until('/ispartial');
    assert.deepEqual(e.data, {foo: 'bar', bar: 'foo', partial: true});

    app.map().post({map: true},'/echo');
    e = yield app.until('/echo');
    assert.deepEqual(e.data, {foo: 'bar', bar: 'foo', partial: true, map: true});

    history.back();
    e = yield app.until('/ispartial');
    assert.deepEqual(e.data, {foo: 'bar', bar: 'foo', partial: true});

    app.get({foo: 'bar'});
    e = yield app.until('/ispartial');
    assert.deepEqual(e.data, {partial: false});
    assert.deepEqual(e.query, {foo: 'bar'});

  });

});

app.trigger();

// Cleanup

t.done.listen(function(){
  app.goTo('/detach');
});
