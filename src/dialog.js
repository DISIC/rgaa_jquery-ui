var $ = require('jquery');



/**
 *
 */
$.widget( 'ui.dialog', $.ui.dialog, {
	open: function() {
		this._super();
		if (this.options.dialogClass !== null && this.options.dialogClass !== '') {
			var elementsFocusable = $('.' + this.options.dialogClass + ' :focusable');
			if (elementsFocusable[0]) {
				elementsFocusable[0].focus();
			}
		}
	}
});
