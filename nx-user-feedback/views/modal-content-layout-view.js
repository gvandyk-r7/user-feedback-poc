'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback/models/modal-header-model',
        'nx-user-feedback/models/modal-footer-model',
        'nx-user-feedback/models/user-feedback-form-model',
        'nx-user-feedback/views/modal-header-view',
        'nx-user-feedback/views/modal-body-layout-view',
        'nx-user-feedback/views/modal-footer-view',
        'text!nx-user-feedback/templates/modal-content-layout-view.html'
        ], function(_, Marionette, Radio, ModalHeaderModel, ModalFooterModel, UserFeedbackFormModel, ModalHeaderView, ModalBodyLayoutView, ModalFooterView, ModalContentLayoutViewTemplate) {
	return Marionette.LayoutView.extend({

		template: _.template(ModalContentLayoutViewTemplate),
		
		regions: {
			body: '.modal-body',
			header: '.modal-header',
			footer: '.modal-footer'
		},
		
		onBeforeShow: function(event) {
			// TODO: L18N for the models here
			var headerModel = new ModalHeaderModel();
			var footerModel = new ModalFooterModel();

			var headerView = new ModalHeaderView(_.extend(event.options, { model: headerModel }));
			var footerView = new ModalFooterView(_.extend(event.options, { model: footerModel }));
			
			this.showChildView('header', headerView);
			this.showChildView('body', new ModalBodyLayoutView(event.options));
			this.showChildView('footer', footerView);
		},
		
		childEvents: {
		    'form:submit': 'sendUserFeedback',
		},
		
		sendUserFeedback: function () {
			this.getOption('messageBus').trigger('send:logs');
		},
	})
});