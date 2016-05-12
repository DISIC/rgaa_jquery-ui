var $ = require('jquery');



/**
 *
 */
$.widget( 'ui.accordion', $.ui.accordion, {
	_toggleComplete: function(data) {
		this._super( data );
		if(
			typeof(data.newHeader[0]) === typeof undefined &&
			typeof(data.oldHeader[0]) !== typeof undefined &&
			typeof($('#'+data.oldHeader[0].id)) !== typeof undefined
			) {
			$('#' + data.oldHeader[0].id).attr('aria-expanded', false);
		}
	}
});
