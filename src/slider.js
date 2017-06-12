var $ = require('jquery');



/**
 *
 */
$.widget( 'ui.slider', $.ui.slider, {
	_createHandles: function () {
		this._super();
		var newVal, attrHandle,
		self = this,
		options = this.options;
		this.handles.each(function(index) {
			//Set constant attribut
			attrHandle = {
				'role'	: 'slider',
				'aria-valuemin'	: options.min,
				'aria-valuemax'	: options.max,
			};

			if(options.orientation === "vertical") {
				attrHandle['aria-orientation'] =  'vertical';
			}

			if (typeof(options.label[index] !== typeof undefined)) {
				if(jQuery.type(options.label[index]) === 'string') {
					attrHandle.title =  options.label[index];
				}else if(jQuery.type(options.label[index]) === 'object' && options.label.length > 0){
					attrHandle['aria-labelledby'] =  options.label[0].id;
				}
			}
			$(this).attr(attrHandle);
			//Set live attribut
			if ( options.values && options.values.length ) {
				newVal = self.values( index );
			} else {
				newVal = self.value();
			}
			self._updateHandles(index, newVal);
		});
	},
	_slide: function(event, index, newVal) {
		this._super(event, index, newVal);
		//Set live attribut
		this._updateHandles(index, newVal);
	},
	_updateHandles: function(index, newVal) {
		var options = this.options,
				attrHandle = {};

		if (options.ariaValuetext) {
					attrHandle['aria-valuetext'] =  newVal + ' ' + options.ariaValuetext;
		}

		attrHandle['aria-valuenow'] =  newVal;
		$(this.handles[index]).attr(attrHandle);
	}
});
