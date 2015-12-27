var path = require('path')
var webpack = require('webpack')
var _ = require('lodash')
var baseConfig = require('./webpack.config.base.js')

// var config = Object.creat(baseConfig)
// config.plugins = []
module.exports = _.extend(baseConfig, {
	// The entry point for the bundle
	entry: [
		// React Hot Replace
		// 'webpack-dev-server/client?http://localhost:8000',
		// 'webpack/hot/only-dev-server',
		'./app/index.js'
	],
	output: {
		// If set, export the bundle as library
		library: 'webpack-react',
		// Which format to export the library : var, this, commonjs, commonjs2, amd, umd
		libraryTarget: 'amd',
		// The output directory as absolute path (required)
		path: path.resolve(__dirname, 'dist'),
		// This is for React hot 
		// path: path.join(__dirname, 'dist'),
		// filename: 'bundle.js',
		// publicPath: '/static/'
		// The filename of the entry chunk as relative path inside the output.path directory
		filename: 'webpack-react.js'
	},
	// Add additional plugins to the compiler
	plugins: [
		// Webpack can find these files and deduplicate them
		new webpack.optimize.DedupePlugin(),
		// Invoke them in code
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
			__PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true'))
		})
	],
	// Specify dependencies that shouldn’t be resolved by webpack
	//externals: {}
})
