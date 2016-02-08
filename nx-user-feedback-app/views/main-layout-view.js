'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/models/modal-model',
        'nx-user-feedback-app/regions/modal-region',
        'nx-user-feedback-app/regions/modal-body-region',
        'text!nx-user-feedback-app/templates/modal-layout-view.tmpl',
        ], function(_, Marionette, Radio, MainItemView, ModalModel, ModalRegion, ModalBodyRegion, ModalLayoutViewTemplate, mlv) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback-app',
		
		template: _.template(ModalLayoutViewTemplate),
		
		regions: {
			modal: ModalRegion,
			modalBody: ModalBodyRegion
		},
		
		childEvents: {
		    'submit:form': 'onChildSubmitForm'
		},
		
		onChildSubmitForm: function (childView) {
			console.log('A child view fired submit:form');
		},
		
			//this.getRegion('dialog').show(new MainItemView());//, options);
			//Radio.channel('root').comply('set:content', function(contentView) {
			//	this.getRegion('dialog').show(contentView);
			//});
		
		onRender: function() {
			var modalModel = new ModalModel({ title: 'Report Incorrect Fingerprint' });
			var mainItemView = new MainItemView({
				model: modalModel
			});
			this.getRegion('modal').show(mainItemView);
		}
	})
});