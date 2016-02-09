define([
        'underscore',
        'marionette',
        'text!nx-user-feedback-app/templates/success-message-view.tmpl'
        ],
        function (_, Marionette, SuccessMessageViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(SuccessMessageViewTemplate),
	});
});