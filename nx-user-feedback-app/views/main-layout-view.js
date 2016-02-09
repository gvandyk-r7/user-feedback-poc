'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/models/user-feedback-form-model',
        'nx-user-feedback-app/regions/modal-region',
        'nx-user-feedback-app/regions/typeahead-input-region',
        'nx-user-feedback-app/regions/typeahead-list-region',
        'nx-user-feedback-app/views/typeahead-composite-view',
        'nx-user-feedback-app/views/typeahead-input-view',
        'nx-user-feedback-app/collections/typeahead-collection',
        'text!nx-user-feedback-app/templates/modal-layout-view.tmpl',
        ], function(_, Marionette, Radio, MainItemView, UserFeedbackFormModel, ModalRegion, TypeaheadInputRegion, TypeaheadListRegion, TypeaheadCompositeView, TypeaheadInputView, TypeaheadCollection, ModalLayoutViewTemplate) {
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
			'perform:search' : 'onChildPerformSearch'
		},

		onChildPerformSearch : function(childView, query) {
			// TODO: Do actual query here
			this.typeaheadCollection.reset([{result: 'foo'}, { result: 'bar'}])
		},
		
		onChildSubmitForm: function (childView) {
			this.userFeedbackFormModel.save(null, {
			    success: function (model, response) {
			        console.log("success", model, response);
			    },
			    error: function (model, response) {
			        console.log("error", model, response);
			    }
			});
		},
		
		initialize: function(options) {
			//var modalModel = new ModalModel({ title: 'Report Incorrect Fingerprint' });
			this.userFeedbackFormModel = new UserFeedbackFormModel();
			
			this.mainItemView = new MainItemView({
				model: this.userFeedbackFormModel
			});
			
			this.typeaheadCollection = new TypeaheadCollection([{
				result: 'windows 8.1'
			}, {
				result: 'ubuntu 12.04'
			}, {
				result: 'mac osx'
			}]);

			this.typeaheadCompositeView = new TypeaheadCompositeView({
				collection: this.typeaheadCollection
			});
			this.typeaheadInputView = new TypeaheadInputView({
				model: this.userFeedbackFormModel
			});
		},
		
		onRender: function() {
			this.getRegion('modal').show(this.mainItemView);
			this.getRegion('typeaheadInput').show(this.typeaheadInputView);
			this.getRegion('typeaheadList').show(this.typeaheadCompositeView);
		}
	})
});