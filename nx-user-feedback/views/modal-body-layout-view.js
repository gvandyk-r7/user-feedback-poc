'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback/views/user-feedback-form-view',
        'nx-user-feedback/views/failure-status-message-view',
        'nx-user-feedback/views/success-status-message-view',
        'text!nx-user-feedback/templates/modal-body-layout-view.html'
        ], function(_, Marionette, Radio, UserFeedbackFormView, FailureStatusMessageView, SuccessStatusMessageView, ModalBodyLayoutViewTemplate) {
	return Marionette.LayoutView.extend({
		
		initialize: function(options) {
			var messageBus = this.getOption('messageBus');
			this.listenTo(messageBus, 'send:logs:failure', this.onSendLogsFailure);
			this.listenTo(messageBus, 'send:logs:success', this.onSendLogsSuccess);
		},
		
		template: _.template(ModalBodyLayoutViewTemplate),
		
		regions: {
			form: '.form-region',
			message: '.status-message-region'
		},
		
		onBeforeShow: function(event) {
			this.getRegion('form').show(new UserFeedbackFormView(event.options));
		},
		
		onSendLogsFailure: function() {
			this.getRegion('message').show(new FailureStatusMessageView());
		},
		
		onSendLogsSuccess: function() {
			this.getRegion('message').show(new SuccessStatusMessageView());
		}
		
	})
});