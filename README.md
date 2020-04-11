# react-windowbar

Emulate OS X and Windows 10 window title bar.
Forked from [katacarbix/windowbar](https://github.com/katacarbix/windowbar).
See the [demo](http://katacarbix.xyz/windowbar/demo/index.html).

Installation
------------
```bash
$ npm install --save react-windowbar
$ # Or with yarn
$ yarn add react-windowbar
```

Usage
-----
For use with webpack, browserify, electron, or a similar environment. As a React component:

```jsx
import Windowbar from 'react-windowbar';

<Windowbar
	style="mac"
	draggable={true}
	transparent={true}
	doubleClickable={false}
	onClose={() => console.log('close')}
    onDoubleClick={() => console.log('double click')}
	onMinimize={() => console.log('minimize')}
	onMaximize={() => console.log('maximize')}
	onFullscreen={() => console.log('fullscreen')}
/>
```

The component takes four event handlers: `onClose`, `onDoubleClick`, `onFullscreen`, `onMaximize`, and `onMinimize`. 
Note: `onMaximize` can also be triggered in the Mac style by alt-clicking the full screen button.

The component accepts options as attributes with these names:

* `dark` (default `false`): Dark theme for Windows.
* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS 
  property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `doubleClickable` (default `true`): Allows double clicking Windowbar to trigger maximize event.
* `transparent` (default `false`): Whether or not the Windowbar background should be transparent
* `style` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `windows`, or `generic`.

# To do

* Add generic style (similar to [hyper](http://hyper.is))
