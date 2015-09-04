# wapp

wapp combines a Node.js server and a build system to help you develop single page applications with ease and control, providing a thin layer of abstraction above the HTML5 History API and the XMLHttpRequest object and letting you fill remaining gaps with whatever technology you may like.

## Architecture

Web applications developed with wapp have a file structure similar to the following:

```
- myApp
  - build
  - assets
  - static
  server.js
  client.js
```

You can see here a server, a client and several folders. The server is in charge of interacting with databases, third party services and all those things only servers can do, and sending resulting data to the client, which will show it to the user in a way (s)he understands.

Both are written the Node.js way, and wapp will make sure that its module system and all its ECMAScript capabilities function equally well at both sides, despite being executed in different environments, i.e the Node.js platform and the browser.

That being said, wapp is centered around one single thing: the URL. Each time it changes, the client requests some data to the server, and when it arrives it is in charge of updating what is shown to the user. As a result of the user's actions, the client may decide to change the URL, triggering the whole process again.

## Configuration

Applications developed with wapp may be configured by placing a `package.json` file at the project root, e.g:

```json
{
  "wapp": {
    "static": "./static",
    "assets": "./assets",
    "build": "./build",
    "scripts": {
      "main": "./client.js"
    }
  }
}
```

Above shown are wapp's defaults. `scripts` are those scripts that you want to make available to the client. The `main` script will be executed as soon as the client loads, and it's in charge of loading the rest of them at its discretion.

## Server

```javascript
var Wapp = require('wapp'),
    server = require('http').createServer().listen(8080),
    app = new Wapp(server,__dirname);

app.on('/*',function([e]){
  e.answer('Hello world!');
});
```

The server decides which data corresponds to each URL. The `Wapp` - a subclass of [UrlRewriter](https://www.npmjs.com/package/url-rewriter) - constructor can have the following arguments, in order:

- server ( *http.Server* )
- location ( *String* )
- options ( *Object* )
  - gzipLevel ( *Number* ) `= 4`
  - prefix ( *String* ) `= ''`
  - host ( *String* )
  - cors ( *Object* )
    - origin ( *String* | *RegExp* | *Function* )
    - methods ( *Set* )
    - requestHeaders ( *Set* )
    - responseHeaders ( *Set* )
    - timeout ( *Number* )
    - allowCredentials ( *Boolean* )

If you choose a prefix other than the empty string, your app will be served at `http://yourhost.com <prefix> /`. CORS and host options refer to their [Hsm counterparts](https://www.npmjs.com/package/hsm). If you want wapp to ignore some URLs, include a path segment starting with a dot other than `.` and `..`, e.g:

```
/my-site/.forum
/my-site/.blog
/my-site/foo/.bar
/my-site/.websockets
```

All those paths will bypass the wapp server, so that you can host other services of your choice there. Please note that `<prefix>/.assets` and `<prefix>/.build` are reserved for internal usage of wapp. Keep also in mind that these special segments are ignored if they are inside the prefix.

Fired events are [path events](https://www.npmjs.com/package/path-event) which share a lot of methods and properties from [Hsm PathEvent extenssions](https://www.npmjs.com/package/hsm). In particular, only these properties and methods are not exposed:

- `request`
- `response`
- `sendFile()`
- `send()`
- `checkOrigin()`
- `accept()`
- `charset()`
- `encoding()`

These are replaced with some methods that allow you to specify which data to send in each case: `event.answer()`, `event.throw()` and `event.use()`. The first one, `event.answer()`, directly sends some dynamic data to the client, serialized, encoded and compressed on the fly, as seen on our first server example.

The second one, `event.throw()`, allows you to maintain your error logic clean and tidy. It will delegate the current event to handlers of the `e/<code>` path event, as seen on the following example:

```javascript
var Wapp = require('wapp'),
    server = require('http').createServer().listen(8080),
    app = new Wapp(server,__dirname);

app.on('/foo',function([e]){
  e.answer('bar');
});

app.on('/*',function([e]){
  e.throw(404);
});

app.on('e/404',function([e]){
  e.answer('Not found');
});
```

Note that the event queue still applies, you can listen for the `e/*` event to answer errors with some data by default. Only one method is left: `event.use()`. Until now, we've been preparing our data on the fly, but wouldn't it be more efficient to prepare static data ahead of time? That's what `event.use()` and the `static` folder are for.

Let's suppose our static folder looks like this:

```
- myApp
  - static
    - animals
      dog.json
    root.json
    default.json
```

For the next step, we'll have to install `wapp` globally:

```
sudo npm install -g wapp
```

And then:

```
cd myApp
wapp build
```

You can also use `wapp watch` to keep listening for changes. This command will also prepare your client files, which we will discuss later. Now it's time to see `event.use()` in action:

```javascript
var Wapp = require('wapp'),
    server = require('http').createServer().listen(8080),
    app = new Wapp(server,__dirname);

app.on('/dog',function([e]){
  e.use('animals/dog');
});

app.on('/',function([e]){
  e.use('root');
});

app.on('/*',function([e]){
  e.use('default');
});
```

As you may imagine, `event.use()` will send the already prepared data contained in the JSON files stored under the `static` folder to the client. You can include JavaScript comments in those files, they will be stripped out. With this, we're mostly done with the server.

## Client

```javascript
var app = require('wapp'),
    container = document.createElement('div');

document.body.appendChild(container);

app.on('/*',function([e]){
  container.textContent = JSON.stringify(e.data);
});

app.trigger();
```

A wapp client looks a lot like a wapp server, with only one difference: instead of sending data, it receives it. Fired events are exactly the same except for `answer`, `use` and `throw`: those are replaced with a property called `data`, which contains the data sent from the server. Error handling mirrors that of the server:

```javascript
var app = require('wapp'),
    container = document.createElement('div');

document.body.appendChild(container);

app.on('/foo',function([e]){
  container.textContent = `foo ${e.data}`;
});

app.on('e/*',function([e, [code] ]){
  container.textContent = `A ${code} error happened! Info: ${e.data}`;
});

app.trigger();
```

Unlike the server, the client doesn't throw errors, it only reacts to those sent from it. You may have noticed a new thing: `app.trigger()`. This is a client only method which processes the current URL and fires events accordingly. You should call it once you're done with listeners and want to populate your GUI for the first time or repaint it.

One thing remains: how do we navigate to another URL? In a wapp client you should do it through `app.goTo()` or `event.redirect()`. These calls will request the relevant data to the server and, when it reaches the client, update the URL and fire appropriate events. Note that you can use relative URLs:

```javascript
var app = require('wapp'),
    up = document.createElement('input');

up.type = 'button';
up.value = 'click me to go up';
document.body.appendChild(up);

app.on('ready',function(){
  up.disabled = false;
});

app.on('busy',function(){
  up.disabled = true;
});

up.addEventListener('click',function(){
  app.goTo('..');
});

app.goTo('/one/two/three/four/',{foo: 'bar'},'frag');
```

The client can be in one of two states: `busy` or `ready`, depending on whether there is an HTTP request in progress or not. You can also use the History API, but please do not mess with states, only navigate through the history and leave `pushState` and `replaceState` for the internal usage of wapp, otherwise errors will surely happen.

By now you've got almost everything you need to build your web application using wapp. We'll discuss two more concepts: assets and dynamic script loading. You'll most probably need to use things like images, videos and the like: those are called assets. Place them at your `assets` folder, and get their URL using `app.asset()` like this:

```javascript
var app = require('wapp'),
    a = app.asset,
    img = document.createElement('img');

img.src = a('/images/test.png');
document.body.appendChild(img);
```

You can also use relative URLs. Now it's dynamic script loading's turn. Your client is bundled ahead of time into a single script, but you may want to load some parts of it dynamically. Previously you've seen how you can define your scripts in your `package.json`, but until now you've only been able to use your `main` script. Well, you're about to know how to load the rest of them. Suppose you have the following `package.json`:

```json
{
  "wapp": {
    "scripts": {
      "test": "./test.js"
    }
  }
}
```

And, inside `test.js`:

```javascript
exports.foo = 'bar';
```

That's a pretty simple script, right? You can make it as much complicated as you want, but for this example it'll be enough. Now it's time to use `app.load()` in your main script:

```javascript
var app = require('wapp');

app.load('test').then(function(exports){
  console.log(exports.foo); // bar
});
```

I'm sure you can see what `app.load()` does, think of it as an asynchronous version of `require()`. With this you're ready to go. Only one more thing: you need to build the client and the static data for your web application to work. As seen before:

```
sudo npm install -g wapp
cd myApp
wapp watch
```

That'll keep your build updated. For not so modern browsers, several polyfills are included in generated bundles, see them at [server/shims](server/shims). If you want a specific shim feel free to open an issue, it won't take long for it to be included. You can also run the build process using the API:

```javascript
var Wapp = require('wapp');

Wapp.build(__dirname);
Wapp.watch(__dirname);
```

And that's it for now, happy coding!
