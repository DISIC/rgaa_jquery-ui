var path = require('path');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: fullPath('index.js'),
	output: {
		path: 'dist',
		filename: 'rgaa_jquery-ui.js'
	},
	externals: {
		'jquery': 'jQuery'
	}
};
