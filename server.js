var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	// Enable special support for Hot Module Replacement
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
}).listen(8000, 'localhost', function(err){
	if(err) {
		console.log(err)
	}

	console.log('Listening at localhost:8000')
})