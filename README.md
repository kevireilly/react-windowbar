# windowbar

Emulate OS X and Windows 10 window title bar. Forked from [kapetan/titlebar](https://github.com/kapetan/titlebar). See the [demo](http://katacarbix.xyz/windowbar/demo/index.html).

```npm install windowbar-react```

# Usage

Used with browserify, electron, or a similar environment. Use as a React component:

```javascript
import Windowbar from 'windowbar-react';
```

```JSX
<Windowbar
	style="mac"
	draggable={true}
	transparent={true}
	dblClickable={false}
	onClose={() => console.log('close')}
	onMinimize={() => console.log('minimize')}
	onMaximize={() => console.log('maximize')}
	onFullscreen={() => console.log('fullscreen')}
/>
```

The returned instance emits four events: `close`, `minimize`, `fullscreen`, and `maximize`. Note: `maximize` can also be triggered in the Mac style by alt-clicking fullscreen.

The initializer function accepts options as attributes with these names:

* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `dblClickable` (default `true`): Allows double clicking windowbar to trigger maximize event.
* `style` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `win`, or `generic`.

# To do

* Add generic style (similar to [hyper](http://hyper.is))
