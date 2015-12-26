var path = require('path')
var webpack = require('webpack')

module.exports = {
	resolve: {
		alias: {
			'react$': path.resolve(__dirname, './node_modules/react'),
			'react-dom$': path.resolve(__dirname, './node_modules/react-dom')
		},
		// A directory (or array of directories absolute paths), 
		// in which webpack should look for modules that weren’t found in 
		// resolve.root or resolve.modulesDirectories
		fallback: path.join(__dirname, 'node_modules')
	},
	resolveLoader: {
		fallback: path.join(__dirname, 'node_modules')
	},
	entry: {},
	output: {},
	externals: {},
	plugins: [],
	module: {
		// A array of automatically applied loaders.
		loaders: [
			{
				// A condition that must be met
				test: /\.js/,
				// A condition that must not be met
				exclude: /(node_modules|\.json)/,
				// A array of loaders as string
				loaders: ['react-hot-loader', 'babel-loader?cacheDirectory']
			}
		]
	}
}