define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/success-status-message-view.html'
        ],
        function (_, Marionette, SuccessStatusMessageViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(SuccessStatusMessageViewTemplate),
		className: 'alert alert-success col-xs-12',
		attributes: {
			role: 'alert'
		}
	});
});