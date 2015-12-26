var path = require('path')
var webpack = require('webpack')
var _ = require('lodash')
var baseConfig = require('./webpack.config.base.js')

// var config = Object.creat(baseConfig)
// config.plugins = []
module.exports = _.extend(baseConfig, {
	// The entry point for the bundle
	entry: [
		'./app/index.js'
	],
	output: {
		// If set, export the bundle as library
		library: 'webpack-react',
		// Which format to export the library : var, this, commonjs, commonjs2, amd, umd
		libraryTarget: 'amd',
		// The output directory as absolute path (required)
		path: path.resolve(__dirname, 'dist'),
		// The filename of the entry chunk as relative path inside the output.path directory
		filename: 'webpack-react.js'
	}//,
	// Add additional plugins to the compiler
	//plugins: [],
	// Specify dependencies that shouldn’t be resolved by webpack
	//externals: {}
})