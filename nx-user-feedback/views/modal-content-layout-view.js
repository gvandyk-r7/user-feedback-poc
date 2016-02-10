'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback/models/user-feedback-form-model',
        'nx-user-feedback/views/modal-body-layout-view',
        'nx-user-feedback/views/modal-footer-view',
        'text!nx-user-feedback/templates/modal-content-layout-view.html'
        ], function(_, Marionette, Radio, UserFeedbackFormModel, ModalBodyLayoutView, ModalFooterView, ModalContentLayoutViewTemplate) {
	return Marionette.LayoutView.extend({

		template: _.template(ModalContentLayoutViewTemplate),
		
		regions: {
			body: '.modal-body',
			header: '.modal-header',
			footer: '.modal-footer'
		},
		
		onBeforeShow: function(event) {
			this.showChildView('body', new ModalBodyLayoutView(event.options));
			this.showChildView('footer', new ModalFooterView());
		},
		
		childEvents: {
		    'form:submit': 'onFormSubmit',
		},
		
		onFormSubmit: function (childView) {
			this.getOption('messageBus').trigger('send:logs');
		},
	})
});