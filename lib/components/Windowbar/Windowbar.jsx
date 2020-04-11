import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import platform from 'platform';

import WindowbarMac from './WindowbarMac.jsx';
import WindowbarWindows from './WindowbarWindows.jsx';
import './Windowbar.scss';

const ALT = 18;
const Platforms = {
	Mac: 'mac',
	Windows: 'windows',
	Generic: 'generic'
};

const getPlatformName = () => {
	let os = platform.os.family || '';
	os = os.toLowerCase().replace(/ /g, '');
	if (/\bwin/.test(os)) {
		os = Platforms.Windows;
	} else if (/darwin|osx/.test(os)) {
		os = Platforms.Mac;
	} else {
		os = Platforms.Generic;
	}
	return os;
};

const Windowbar = ({
	style = getPlatformName(),
	dark = false,
	draggable = true,
	doubleClickable = true,
	transparent = false,
	onClose = function(){},
	onDoubleClick = function(){},
	onFullscreen = function(){},
	onMaximize = function(){},
	onMinimize = function(){},
}) => {
	const [ keyAltDown, setKeyAltDown ] = useState(false);
	const [ fullscreen, setFullscreen ] = useState(false);

	const handleKeyDown = useCallback((e) => {
		if (style === Platforms.Mac && e.keyCode === ALT){
			setKeyAltDown(true);
		}
	}, []);

	const handleKeyUp = useCallback((e) => {
		if (style === Platforms.Mac && e.keyCode === ALT){
			setKeyAltDown(false);
		}
	}, []);

	const handleMaximize = useCallback((e) => {
		if (style === Platforms.Mac){
			if (keyAltDown && !fullscreen){ onMaximize(e); }
			else {
				setFullscreen(!this.state.fullscreen);
				onFullscreen(e);
			}
		} else {
			setFullscreen(!this.state.fullscreen);
			onMaximize(e);
		}
	}, [onMaximize, onFullscreen]);

	const handleDoubleClick = useCallback((e) => {
		e.preventDefault;
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();

		if (doubleClickable) {
			handleMaximize(e);
		}
	}, [handleMaximize, onDoubleClick, doubleClickable]);

	useEffect(() => {
		if (style === Platforms.Mac){
			document.body.addEventListener('keydown', handleKeyDown);
			document.body.addEventListener('keyup', handleKeyUp);
		}

		return () => {
			if (style === Platforms.Mac){
				document.body.removeEventListener('keydown', handleKeyDown);
				document.body.removeEventListener('keyup', handleKeyUp);
			}
		}
	}, []);

	const classes = classNames({
		windowbar: true,
		'wb-mac': style === Platforms.Mac,
		'wb-win': style === Platforms.Windows,
		draggable,
		transparent,
		dark,
		fullscreen,
		alt: keyAltDown,
	});

	if (style === Platforms.Mac){
		return (
			<WindowbarMac
				classes={classes}
				onDoubleClick={handleDoubleClick}
				onClose={onClose}
				onMinimize={onMinimize}
				onMaximize={handleMaximize}
			/>
		);
	} else if (style === Platforms.Windows){
		return (
			<WindowbarWindows
				classes={classes}
				onDoubleClick={handleDoubleClick}
				onClose={onClose}
				onMinimize={onMinimize}
				onMaximize={handleMaximize}
			/>
		);
	} else {
		return ( <div>Generic Windowbar not yet available</div> );
	}
};

export default Windowbar;
