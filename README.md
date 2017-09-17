# titlebar

Emulate OS X and Windows 10 window title bar (plus a generic style). Forked from [kapetan/titlebar](https://github.com/kapetan/titlebar). See the [demo](http://katacarbix.xyz/titlebar/demo/index.html).

	~~npm install titlebar~~

# Usage

Used with browserify, electron, or a similar environment. Use with plain javascript:

```javascript
var titlebar = require('titlebar');

var t = titlebar();
t.appendTo(document.body);

t.on('close', function(e) {
	console.log('close');
});

// t.element exposes the root dom element
t.element.appendChild(document.createElement('div'));
```

The returned instance emits four events: `close`, `minimize`, `fullscreen` (each corresponding to one of the stoplight buttons) and `maximize` when double clicking on the title bar area, or holding down alt key and clicking `fullscreen`.

The initializer function accepts an options object.

* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS property on the root element. Allows a frameless windows to be dragged in an `electron` application.
* `dblClickable` (default `true`): Allows double clicking titlebar to trigger maximize event.
* `os` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `win`, or `generic`.

# To do

* Make React compatible
* Add generic title bar (similar to [hyper](http://hyper.is)) to default to
* Rename the `os` option to `style`
* Slightly rename repo and publish to npm
