'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ALT = 18;
const defaultProps = {
	style: process.platform === 'darwin' ? 'mac' : process.platform === 'win32' ? 'win' : 'generic',
	transparent: false,
	draggable: true,
	dblClickable: true
};

class Windowbar extends _react2.default.Component {
	constructor(props, defaultProps) {
		super(props, defaultProps);

		this.state = {
			keyAltDown: false,
			fullscreen: false
		};

		this.handleMaximize = this.handleMaximize.bind(this);
	}

	componentDidMount() {
		this.setStyleHeader();

		if (this.props.style === 'mac') {
			document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
			document.body.addEventListener('keyup', this.handleKeyUp.bind(this));
		}
	}

	componentWillUnMount() {
		if (this.props.style === 'mac') {
			document.body.removeEventListener('keydown', this.handleKeyDown);
			document.body.removeEventListener('keyup', this.handleKeyUp);
		}
	}

	handleKeyDown(e) {
		if (this.props.style === 'mac' && e.keyCode === ALT) {
			this.setState({
				keyAltDown: true
			});
		}
	}

	handleKeyUp(e) {
		if (this.props.style === 'mac' && e.keyCode === ALT) {
			this.setState({
				keyAltDown: false
			});
		}
	}

	handleMaximize(e) {
		var { onMaximize, onFullscreen } = this.props;
		var { keyAltDown, fullscreen } = this.state;

		if (this.props.style === 'mac') {
			if (keyAltDown && !fullscreen) {
				onMaximize(e);
			} else {
				this.setState({ fullscreen: !this.state.fullscreen });
				onFullscreen(e);
			}
		} else {
			this.setState({ fullscreen: !this.state.fullscreen });
			onMaximize(e);
		}
	}

	handleDblClick(e) {
		e.preventDefault;
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();

		if (this.state.dblClickable) {
			this.handleMaximize(e);
		}
	}

	setStyleHeader() {
		if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-windowbar-osx"]')) {
			var tag = document.createElement('style');
			tag.id = 'react-windowbar-osx';
			tag.innerHTML = this.styles();
			document.getElementsByTagName('head')[0].appendChild(tag);
		}
	}

	render() {
		var {
			draggable,
			transparent,
			onClose,
			onMinimize
		} = this.props;
		var { keyAltDown, fullscreen } = this.state;

		var classes = (0, _classnames2.default)({
			windowbar: true,
			'wb-mac': this.props.style === 'mac',
			'wb-win': this.props.style === 'win',
			draggable,
			transparent,
			fullscreen,
			alt: keyAltDown
		});

		if (this.props.style === 'mac') {
			return _react2.default.createElement(
				'div',
				{ className: classes, onDoubleClick: this.handleDblClick },
				_react2.default.createElement(
					'div',
					{ className: 'windowbar-controls' },
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-close', onClick: onClose },
						_react2.default.createElement(
							'svg',
							{ x: '0px', y: '0px', viewBox: '0 0 6 6' },
							_react2.default.createElement('polygon', { fill: '#860006', points: '6,1 6,0 5,0 3,2 1,0 0,0 0,1 2,3 0,5 0,6 1,6 3,4 5,6 6,6 6,5 4,3' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-minimize', onClick: onMinimize },
						_react2.default.createElement(
							'svg',
							{ x: '0px', y: '0px', viewBox: '0 0 7 2' },
							_react2.default.createElement('rect', { fill: '#9d5615', width: 7, height: 2 })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-maximize', onClick: this.handleMaximize },
						_react2.default.createElement(
							'svg',
							{ className: 'fullscreen-svg', x: '0px', y: '0px', viewBox: '0 0 6 6' },
							_react2.default.createElement('path', { fill: '#006413', d: 'M0,1.4v3.8c0.4,0,0.8,0.3,0.8,0.8h3.8L0,1.4z' }),
							_react2.default.createElement('path', { fill: '#006413', d: 'M6,4.6V0.8C5.6,0.8,5.2,0.4,5.2,0H1.4L6,4.6z' })
						),
						_react2.default.createElement(
							'svg',
							{ className: 'exit-fullscreen-svg', x: '0px', y: '0px', viewBox: '0 0 6 6' },
							_react2.default.createElement('path', { fill: '#006413', d: 'M3,0v2.5c0.3,0,0.5,0.2,0.5,0.5H6L3,0z' }),
							_react2.default.createElement('path', { fill: '#006413', d: 'M3,6V3.5C2.7,3.5,2.5,3.3,2.5,3H0L3,6z' })
						),
						_react2.default.createElement(
							'svg',
							{ className: 'maximize-svg', x: '0px', y: '0px', viewBox: '0 0 7.9 7.9' },
							_react2.default.createElement('polygon', { fill: '#006413', points: '7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5' })
						)
					)
				)
			);
		} else if (this.props.style === 'win') {
			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(
					'div',
					{ className: 'windowbar-controls' },
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-minimize', onClick: onMinimize },
						_react2.default.createElement(
							'svg',
							{ x: '0px', y: '0px', viewBox: '0 0 10 1' },
							_react2.default.createElement('rect', { fill: '#000000', width: 10, height: 1 })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-maximize', onClick: this.handleMaximize },
						_react2.default.createElement(
							'svg',
							{ className: 'maximize-svg', x: '0px', y: '0px', viewBox: '0 0 10 10' },
							_react2.default.createElement('path', { fill: '#000000', d: 'M 0 0 L 0 10 L 10 10 L 10 0 L 0 0 z M 1 1 L 9 1 L 9 9 L 1 9 L 1 1 z ' })
						),
						_react2.default.createElement(
							'svg',
							{ className: 'unmaximize-svg', x: '0px', y: '0px', viewBox: '0 0 10 10' },
							_react2.default.createElement(
								'mask',
								{ id: 'Mask' },
								_react2.default.createElement('rect', { fill: '#ffffff', width: 10, height: 10 }),
								_react2.default.createElement('path', { fill: '#000000', d: 'M 3 1 L 9 1 L 9 7 L 8 7 L 8 2 L 3 2 L 3 1 z' }),
								_react2.default.createElement('path', { fill: '#000000', d: 'M 1 3 L 7 3 L 7 9 L 1 9 L 1 3 z' })
							),
							_react2.default.createElement('path', { fill: '#000000', d: 'M 2 0 L 10 0 L 10 8 L 8 8 L 8 10 L 0 10 L 0 2 L 2 2 L 2 0 z', mask: 'url(#Mask)' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'windowbar-close', onClick: onClose },
						_react2.default.createElement(
							'svg',
							{ x: '0px', y: '0px', viewBox: '0 0 12 12' },
							_react2.default.createElement('polygon', { fill: '#000000', points: '12,1 11,0 6,5 1,0 0,1 5,6 0,11 1,12 6,7 11,12 12,11 7,6' })
						)
					)
				)
			);
		}
	}

	styles() {
		return `.windowbar{display:flex;box-sizing:padding-box}.windowbar *{box-sizing:inherit}.windowbar::after{content:' ';display:table;clear:both}.windowbar.draggable{-webkit-app-region:drag}.windowbar.draggable .windowbar-minimize,.windowbar.draggable .windowbar-maximize,.windowbar.draggable .windowbar-close{-webkit-app-region:no-drag}.windowbar .windowbar-controls::after{content:' ';display:table;clear:both}.windowbar.wb-mac{align-items:center;justify-content:space-between;padding:0 3px}.windowbar.wb-mac:not(.transparent){background-color:#e5e5e5}.windowbar.wb-mac.unfocused:not(.transparent){background-color:#f6f6f6}.windowbar.wb-mac .windowbar-controls:hover svg{opacity:1 !important}.windowbar.wb-mac.alt:not(.fullscreen) svg.fullscreen-svg{display:none}.windowbar.wb-mac.alt:not(.fullscreen) svg.maximize-svg{display:block !important}.windowbar.wb-mac.fullscreen svg.fullscreen-svg{display:none}.windowbar.wb-mac.fullscreen svg.exit-fullscreen-svg{display:block !important}.windowbar.wb-mac .windowbar-close,.windowbar.wb-mac .windowbar-minimize,.windowbar.wb-mac .windowbar-maximize{float:left;width:10px;height:10px;border-radius:50%;margin:6px 4px;line-height:0}.windowbar.wb-mac .windowbar-close{border:1px solid #e94343;background-color:#ff5d5b;margin-left:6px}.windowbar.wb-mac .windowbar-close:active{border-color:#b43737;background-color:#c64845}.windowbar.wb-mac .windowbar-close svg{width:6px;height:6px;margin-top:2px;margin-left:2px;opacity:0}.windowbar.wb-mac .windowbar-minimize{border:1px solid #e5a03a;background-color:#ffbc45}.windowbar.wb-mac .windowbar-minimize:active{border-color:#b07b2e;background-color:#c38e34}.windowbar.wb-mac .windowbar-minimize svg{width:8px;height:8px;margin-top:1px;margin-left:1px;opacity:0}.windowbar.wb-mac .windowbar-maximize{border:1px solid #13ad3e;background-color:#00c94f}.windowbar.wb-mac .windowbar-maximize:active{border-color:#138532;background-color:#009a3c}.windowbar.wb-mac .windowbar-maximize svg.fullscreen-svg{width:6px;height:6px;margin-top:2px;margin-left:2px;opacity:0}.windowbar.wb-mac .windowbar-maximize svg.exit-fullscreen-svg{width:10px;height:10px;margin-top:0;margin-left:0;opacity:0;display:none}.windowbar.wb-mac .windowbar-maximize svg.maximize-svg{width:8px;height:8px;margin-top:1px;margin-left:1px;opacity:0;display:none}.windowbar.wb-mac.unfocused .windowbar-controls:not(:hover)>*{background-color:#dcdcdc;border-color:#d1d1d1}.windowbar.wb-win{justify-content:flex-end;padding:0}.windowbar.wb-win:not(.transparent){background-color:#fff}.windowbar.wb-win.unfocused .windowbar-controls:not(:hover) svg{opacity:60%}.windowbar.wb-win .windowbar-minimize,.windowbar.wb-win .windowbar-maximize,.windowbar.wb-win .windowbar-close{float:left;width:45px;height:29px;margin:0 0 1px 1px;text-align:center;line-height:29px;-webkit-transition:background-color .2s;-moz-transition:background-color .2s;-ms-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s}.windowbar.wb-win .windowbar-minimize svg,.windowbar.wb-win .windowbar-maximize svg,.windowbar.wb-win .windowbar-close svg{width:10px;height:10px}.windowbar.wb-win .windowbar-close svg polygon{-webkit-transition:fill .2s;-moz-transition:fill .2s;-ms-transition:fill .2s;-o-transition:fill .2s;transition:fill .2s}.windowbar.wb-win.fullscreen .windowbar-minimize,.windowbar.wb-win.fullscreen .windowbar-maximize,.windowbar.wb-win.fullscreen .windowbar-close{height:21px;line-height:21px}.windowbar.wb-win:not(.fullscreen) .windowbar-maximize svg.unmaximize-svg{display:none}.windowbar.wb-win.fullscreen .windowbar-maximize svg.maximize-svg{display:none}.windowbar.wb-win .windowbar-minimize:hover,.windowbar.wb-win .windowbar-maximize:hover{background-color:#E5E5E5}.windowbar.wb-win .windowbar-close:hover{background-color:#E81123}.windowbar.wb-win .windowbar-close:hover svg polygon{fill:#fff}`;
	}
}

Windowbar.propTypes = {
	transparent: _react.PropTypes.bool,
	draggable: _react.PropTypes.bool,
	dblClickable: _react.PropTypes.bool,
	onClose: _react.PropTypes.func.isRequired,
	onMinimize: _react.PropTypes.func.isRequired,
	onMaximize: _react.PropTypes.func.isRequired,
	onFullscreen: process.platform === 'darwin' ? _react.PropTypes.func.isRequired : _react.PropTypes.func
};

exports.default = Windowbar;
//# sourceMappingURL=Windowbar.js.map
