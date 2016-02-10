define([ 'marionette' ],
        function (Marionette) {
	'use strict';

	return Marionette.ItemView.extend({
		tagName: 'div',
		className: 'form-group'
	});
});