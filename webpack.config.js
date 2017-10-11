var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './lib/index.js',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'index.js',
		library: 'Windowbar',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' +
					'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [
					'/node_modules/',
				],
				query: {
					presets: ['env', 'react']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin
	],
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		}
	],
};
