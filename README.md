# react-windowbar

Emulate OS X and Windows 10 window title bar.
Forked from [katacarbix/windowbar](https://github.com/katacarbix/windowbar).
See the [demo](http://katacarbix.xyz/windowbar/demo/index.html) or `examples/index.html`.

Installation
------------
```bash
$ yarn add react-windowbar
```

Usage
-----
For use with webpack, browserify, electron, or a similar environment. As a React component:

```jsx
import Windowbar from 'react-windowbar';

<Windowbar
    onClose={() => console.log('close')}
    onDoubleClick={() => console.log('double click')}
    onMinimize={() => console.log('minimize')}
    onMaximize={() => console.log('maximize')}
    onFullscreen={() => console.log('fullscreen')}
/>
```

By default, the user's current OS `style` is used. To specify something specific, use the `style` prop.
The component optionally takes five event handlers: `onClose`, `onDoubleClick`, `onFullscreen`, `onMaximize`, and `onMinimize`. 
> Note: `onMaximize` can also be triggered in the Mac style by alt-clicking the full screen button.

The component accepts options as attributes with these names:

* `style` (defaults to current OS, or `generic` if unrecognized): Possible values are `mac`, `windows`, or `generic`.
* `draggable` (default `true`): Disable the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS
* `transparent` (default `false`): Whether or not the Windowbar background should be transparent
* `dark` (default `false`): Dark theme for Windows. 
  property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `doubleClickable` (default `true`): Allows double clicking Windowbar to trigger maximize event.

# To do

* Add generic style (similar to [hyper](http://hyper.is))
