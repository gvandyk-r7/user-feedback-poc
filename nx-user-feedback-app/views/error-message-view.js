define([
        'underscore',
        'marionette',
        'text!nx-user-feedback-app/templates/error-message-view.tmpl'
        ],
        function (_, Marionette, ErrorMessageViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(ErrorMessageViewTemplate)
	});
});