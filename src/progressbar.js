var $ = require('jquery');



/**
 *
 */
$.widget( 'ui.progressbar', $.ui.progressbar, {
	_create: function( event, index ) {
		// Si une région est défini
		if (typeof(this.options.region !== typeof undefined)) {
			// si la région est défini en string, on recherche le node avec l'id associé
			if(jQuery.type(this.options.region) === 'string') {
				this.options.region = $('#' + this.options.region);
			}
			this.options.region.attr('aria-describedby', this.element[0].id);
		}
		// Si un labelledby est défini
		if (typeof(this.options.labelledby !== typeof undefined)) {
			if(jQuery.type(this.options.labelledby) === 'string') {
				// si la région est défini en string, on ajoute un attr 'title'
				this.element.attr('title', this.options.labelledby);
			}else if(jQuery.type(this.options.labelledby) === 'object'){
				// sinon, on ajout l'id du node associé dans le aria-labelledby
				this.element.attr('aria-labelledby', this.options.labelledby[0].id);
			}
		}
		this._super( event, index );
		if(typeof(this.element.attr('aria-valuemax')) === typeof undefined) {
			this.element.attr('aria-valuemax', this.options.max);
		}
	},
	_destroy: function( event, index ) {
		var attr = this.element.attr('aria-valuetext');
		if (typeof attr !== typeof undefined && attr !== false) {
			this.element.removeAttr( 'aria-valuetext' );
		}
		this._super( event, index );
	},
	_refreshValue: function(event, index ) {
		this._super( event, index );
		// MAj de l'attribut aria-valuetext
		if ( !this.indeterminate ) {
			var valuetext = this.options.value;
			if(typeof(this.options.ariaValuetextPrefix !== typeof undefined)) {
				valuetext = this.options.ariaValuetextPrefix + ' ' + valuetext;
			}
			if(typeof(this.options.ariaValuetextSuffix !== typeof undefined)) {
				valuetext += ' ' + this.options.ariaValuetextSuffix;
			}
			this.element.attr({
				'aria-valuetext': valuetext
			});
		}
		if(typeof(this.options.region !== typeof undefined)) {
			if (this.options.value === this.options.max) {
				// Suppression de l'attribut aria-busy si on est arrivés au bout de la progressbar
				this.options.region.attr('aria-busy', false);
			}else if(!this.indeterminate && this.options.value !== 0){
				this.options.region.attr('aria-busy', true);
			}
		}
	}
});
