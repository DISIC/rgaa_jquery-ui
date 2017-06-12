var path = require('path');
var fullPath = path.resolve.bind(null, __dirname);

/**
 *
 */
module.exports = function(config) {
	config.set({
		files: [
			'node_modules/jquery-ui/themes/base/base.css',
			'node_modules/jquery-ui/themes/base/theme.css',
			'node_modules/bootstrap/dist/css/bootstrap.css',
			'node_modules/jquery/dist/jquery.js',
			'node_modules/jquery-ui-dist/jquery-ui.min.js',
			'dist/rgaa-jquery-ui.js',
			'test/*.js'
		],
		frameworks: [
			'mocha'
		],
		reporters: [
			'mocha'
		],
		mochaReporter: {
			colors: {
				info: 'yellow'
			}
		},
		browsers: [
			'Chrome',
			'Firefox'
		],
		preprocessors: {
			'test/*.js': ['webpack']
		},
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{
						test: /\.js$/i,
						loader: 'babel-loader',
						include: [
							fullPath('src'),
							fullPath('test')
						]
					}
				]
			}
		}
	});
};
