import React from 'react';
import ReactDOM from 'react-dom';
import Windowbar from './Windowbar.jsx';

class WindowbarDemo extends React.Component {
	render(){
		return (
			<div>
			
				<Windowbar
					style="mac"
					draggable={true}
					onClose={() => console.log('close')}
					onMinimize={() => console.log('minimize')}
					onMaximize={() => console.log('maximize')}
					onFullscreen={() => console.log('fullscreen')}
				/>
				
				<br />
				
				<Windowbar
					style="win"
					draggable={true}
					onClose={() => console.log('close')}
					onMinimize={() => console.log('minimize')}
					onMaximize={() => console.log('maximize')}
				/>
				
			</div>
		);
	}
};

ReactDOM.render(
	<WindowbarDemo />,
	document.getElementById('root')
);
