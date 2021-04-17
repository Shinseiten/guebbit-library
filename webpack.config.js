const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
	return {
		mode: process.env.WEBPACK_DEV_SERVER ? "development" : "production",
		entry: './index.ts',
		output: {
			filename: 'guebbit.js',
			path: path.resolve(__dirname, 'dist'),
			library: "G",				// Configuring the library namespace
			libraryTarget: "umd",		// Configuring the library target
			libraryExport: "default",	// Configuring the default export of the entry point to the namespace
			umdNamedDefine: true,
		},
		plugins: [
			// Generates default index.html (development mode ONLY)
			process.env.WEBPACK_DEV_SERVER ? new HtmlWebpackPlugin({
				title: 'Guebbit Test',
				myPageHeader: 'Hello World',
				template: './index.html',
			}) : false,
		].filter(Boolean),
		resolve: {
		    extensions: ['.ts', '.js', '.json'],
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)?$/,
					exclude: /(node_modules)/,
					include: path.resolve(__dirname, 'src'),
					use: [
						{
							loader: 'ts-loader'
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
				}
			]
		},

		// webpack-dev-server configuration
		devServer: {
			// https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920
			// 'Live-reloading' happens when you make changes to code
			// dependency pointed to by 'entry' parameter explained earlier.
			// To make live-reloading happen even when changes are made
			// to the static html pages in 'contentBase', add
			// 'watchContentBase'
			watchContentBase: true,
			compress: true
		},
		/*
		// disable hashes in filenames
		filenameHashing: false,
		// delete HTML related webpack plugins
		chainWebpack: config => {
		config.plugins.delete('html')
		config.plugins.delete('preload')
		config.plugins.delete('prefetch')
		}
		*/
	}
};
