'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/models/modal-model',
        'nx-user-feedback-app/regions/modal-region',
        'text!nx-user-feedback-app/templates/modal-layout-view.tmpl',
        ], function(_, Marionette, Radio, MainItemView, ModalModel, ModalRegion, ModalLayoutViewTemplate, mlv) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback-app',
		
		template: _.template(ModalLayoutViewTemplate),
		
		initialize: function(options) {
			this.getOption('rootChannel').on('some:event', function() {
				  console.log('An event has happened!');
			});
		},
		
		regions: {
			modal: ModalRegion,
		},
		
		childEvents: {
		    'submit:form': 'onChildSubmitForm',
		},
				
		onChange: function (childView) {
			console.dir(childView);
		},
		
		onChildSubmitForm: function (childView) {
			console.log('A child view fired submit:form');
		},
		
		onRender: function(o) {
			var modalModel = new ModalModel({ title: 'Report Incorrect Fingerprint' });
			var mainItemView = new MainItemView({
				model: modalModel
			});
			this.getRegion('modal').show(mainItemView);
		}
	})
});