/* jshint node: true */
var path = require('path');

module.exports = {
	context: path.join(__dirname),
	entry: './lib/index.js',

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'Windowbar'
	},

	externals: {
	 'react': 'var React',
	 'react/addons': 'var React'
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				// Query parameters are passed to node-sass
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' +
					'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
					'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
			},
			{
				test: /(\.js)|(\.jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	}
};
