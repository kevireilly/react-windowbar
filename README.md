# windowbar

Emulate OS X and Windows 10 window title bar. Forked from [kapetan/windowbar](https://github.com/kapetan/windowbar). See the [demo](http://katacarbix.xyz/windowbar/demo/index.html).

~~```npm install windowbar```~~

# Usage

Used with browserify, electron, or a similar environment. Use with plain javascript:

```javascript
var windowbar = require('windowbar');

var t = new windowbar({'style':'mac'})
// Bind to any of the events Windowbar emits
t.on('close', console.log('close'))
// Provides a method to attach to DOM
t.appendTo(document.body);
```

The returned instance emits four events: `close`, `minimize`, `fullscreen`, and `maximize`. Note: `maximize` can also be triggered in the Mac style by alt-clicking fullscreen.

The initializer function accepts an options object with these properties:

* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `dblClickable` (default `true`): Allows double clicking windowbar to trigger maximize event.
* `style` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `win`, or `generic`.

# To do

* Make React compatible
* Add generic title bar (similar to [hyper](http://hyper.is))
* Slightly rename repo and publish to npm
