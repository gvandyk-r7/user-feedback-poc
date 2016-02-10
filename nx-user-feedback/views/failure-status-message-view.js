define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/failure-status-message-view.html'
        ],
        function (_, Marionette, FailureStatusMessageViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(FailureStatusMessageViewTemplate),
	});
});