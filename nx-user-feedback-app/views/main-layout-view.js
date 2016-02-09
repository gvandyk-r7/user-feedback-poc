'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/models/modal-model',
        'nx-user-feedback-app/regions/modal-region',
        'nx-user-feedback-app/regions/typeahead-input-region',
        'nx-user-feedback-app/regions/typeahead-list-region',
        'nx-user-feedback-app/views/typeahead-composite-view',
        'nx-user-feedback-app/views/typeahead-input-view',
        'nx-user-feedback-app/collections/typeahead-collection',
        'text!nx-user-feedback-app/templates/modal-layout-view.tmpl',
        ], function(_, Marionette, Radio, MainItemView, ModalModel, ModalRegion, TypeaheadInputRegion, TypeaheadListRegion, TypeaheadCompositeView, TypeaheadInputView, TypeaheadCollection, ModalLayoutViewTemplate, mlv) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback-app',
		
		template: _.template(ModalLayoutViewTemplate),
		
		regions: {
			modal: ModalRegion,
			typeaheadInput: TypeaheadInputRegion,
			typeaheadList: TypeaheadListRegion
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
		
		initialize: function(options) {
			
		},
		
		onBeforeShow: function(options) {
			/*
			initialize: function(options) {			
				
			},*/
			
		},
		
		onRender: function() {
			var modalModel = new ModalModel({ title: 'Report Incorrect Fingerprint' });
			var mainItemView = new MainItemView({
				model: modalModel
			});
			this.getRegion('modal').show(mainItemView);
			
			this.typeaheadCollection = new TypeaheadCollection([{
				result: 'windows 8.1'
			}, {
				result: 'ubuntu 12.04'
			}, {
				result: 'mac osx'
			}]);
			
			var typeaheadInputView = new TypeaheadInputView();
			this.getRegion('typeaheadInput').show(typeaheadInputView);
			
			var typeaheadCompositeView = new TypeaheadCompositeView({
				collection: this.typeaheadCollection
			});
			this.getRegion('typeaheadList').show(typeaheadCompositeView);
		}
	})
});