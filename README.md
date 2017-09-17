# titlebar

Emulate OS X and Windows 10 window title bar. Forked from [kapetan/titlebar](https://github.com/kapetan/titlebar). See the [demo](http://katacarbix.xyz/titlebar/demo/index.html).

~~```npm install titlebar```~~

# Usage

Used with browserify, electron, or a similar environment. Use with plain javascript:

```javascript
var titlebar = require('titlebar');

var t = new titlebar({'style':'mac'})
	// All the events it emits
	.on('close', log('close'))
	.on('minimize', log('minimize'))
	.on('fullscreen', log('fullscreen'))
	.on('maximize', log('maximize'))
	// Returns a DOM object to put in your document
	.appendTo(document.body);
```

The returned instance emits four events: `close`, `minimize`, `fullscreen`, and `maximize`. Note: `maximize` can also be triggered in the Mac style by alt-clicking fullscreen.

The initializer function accepts an options object with these properties:

* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `dblClickable` (default `true`): Allows double clicking titlebar to trigger maximize event.
* `os` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `win`, or `generic`.

# To do

* Make React compatible
* Add generic title bar (similar to [hyper](http://hyper.is))
* Slightly rename repo and publish to npm
