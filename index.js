var EventEmitter = require('events');
var fs = require('fs');
var path = require('path');
var defaultCss = require('defaultcss');
var domify = require('domify');
var classes = require('component-classes');

var ALT = 18;

var css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
var html = fs.readFileSync(path.join(__dirname, 'titlebar.html'), 'utf-8');

class Titlebar extends EventEmitter {
	constructor(options = {}){
		super();
		// Get Options
		this.options = {};
		this.options.style = options.style;
		this.options.transparent = options.transparent;
		this.options.draggable = options.draggable;
		this.options.dblClickable = options.dblClickable;
		
		// Set proper style
		if (!['mac','win','generic'].includes(this.options.style)){
			if (this.options.style === 'darwin' || platform.system === 'darwin') this.options.style = 'mac';
			else if (this.options.style === 'win32' || platform.system === 'win32') this.options.style = 'win';
			else this.options.style = 'generic';
		}
		
		// Create Titlebar element
		if (this.options.style === 'mac' || this.options.style === 'darwin') this.element = domify(html, document).querySelector('.tb-mac');
		else if (this.options.style === 'win' || this.options.style === 'win32') this.element = domify(html, document).querySelector('.tb-win');
		else if (this.options.style === 'generic') this.element = domify(html, document);
		
		// Register buttons
		this.minimizeButton = this.element.querySelector('.titlebar-minimize');
		this.maximizeButton = this.element.querySelector('.titlebar-maximize');
		this.closeButton = this.element.querySelector('.titlebar-close');
		
		// Draggable
		if (this.options.draggable) classes(this.element).add('draggable');
		// Transparent
		if (this.options.transparent) classes(this.element).add('transparent');
		
		// Add click events
		this.element.addEventListener('dblclick', event => this.onDblClick(event));
		this.minimizeButton.addEventListener('click', event => this.clickMinimize(event));
		this.maximizeButton.addEventListener('click', event => this.clickMaximize(event));
		this.closeButton.addEventListener('click', event => this.clickClose(event));
		
		// Show maximize svg while holding alt (mac only)
		if (this.options.style === 'mac'){
			var self = this;
			window.addEventListener('keydown', function(e) {
				if(e.keyCode === ALT && !classes(self.element).has('fullscreen')) classes(self.element).add('alt');
			});
			window.addEventListener('keyup', function(e) {
				if(e.keyCode === ALT) classes(self.element).remove('alt');
			});
		}
	}
	
	clickClose(e){ this.emit('close', e); };
	
	clickMinimize(e){ this.emit('minimize', e); };
	
	clickMaximize(e){
		if (this.options.style === 'mac'){
			if (e.altKey && !classes(this.element).has('fullscreen')){ this.emit('maximize', e); }
			else {
				classes(this.element).toggle('fullscreen');
				this.emit('fullscreen', e);
			}
		} else {
			classes(this.element).toggle('fullscreen');
			this.emit('maximize', e);
		}
	};
	
	onDblClick(e){
		e.preventDefault;
		if (this.options.dblClickable && !(this.minimizeButton.contains(e.target) || this.maximizeButton.contains(e.target) || this.closeButton.contains(e.target))){
			this.clickMaximize(e);
			console.log('dblclick', e);
		}
	};
	
	appendTo(context = document.body){
		//defaultCss('titlebar', css);
		context.appendChild(this.element);
		return this;
	};
	
	destroy(){
		parent.removeChild(this.element);
		return this;
	};
}

module.exports = Titlebar;
