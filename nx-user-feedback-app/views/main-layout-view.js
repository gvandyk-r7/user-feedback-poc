'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/models/user-feedback-form-model',
        'nx-user-feedback-app/regions/modal-region',
        'nx-user-feedback-app/regions/modal-body-region',
        'nx-user-feedback-app/regions/typeahead-input-region',
        'nx-user-feedback-app/regions/typeahead-list-region',
        'nx-user-feedback-app/regions/status-message-region',
        'nx-user-feedback-app/views/typeahead-composite-view',
        'nx-user-feedback-app/views/typeahead-input-view',
        'nx-user-feedback-app/views/success-message-view',
        'nx-user-feedback-app/views/error-message-view',
        'nx-user-feedback-app/collections/typeahead-collection',
        'text!nx-user-feedback-app/templates/modal-layout-view.tmpl',
        ], function(_, Marionette, Radio, MainItemView, UserFeedbackFormModel, ModalRegion, ModalBodyRegion, TypeaheadInputRegion, TypeaheadListRegion, StatusMessageRegion, TypeaheadCompositeView, TypeaheadInputView, SuccessMessageView, ErrorMessageView, TypeaheadCollection, ModalLayoutViewTemplate) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback-app',
		
		template: _.template(ModalLayoutViewTemplate),
		
		regions: {
			modal: ModalRegion,
			typeaheadInput: TypeaheadInputRegion,
			typeaheadList: TypeaheadListRegion,
			statusMessage: StatusMessageRegion
		},
		
		childEvents: {
		    'submit:form': 'onChildSubmitForm',
			'perform:search' : 'onChildPerformSearch'
		},

		onChildPerformSearch : function(childView, query) {
			// TODO: Do actual XHR query in model
			this.typeaheadCollection.reset([{result: 'foo'}, { result: 'bar'}])
		},
		
		onChildSubmitForm: function (childView) {
			var self = this;
			childView.ui.sendLogsButton.prop('disabled', true);
			this.userFeedbackFormModel.save(null, {
			    success: function (model, response) {
			    	childView.ui.sendLogsButton.prop('disabled', false);
			    	self.getRegion('statusMessage').show(self.successMessageView);
			    },
			    error: function (model, response) {
			    	childView.ui.sendLogsButton.prop('disabled', false);
			    	self.getRegion('statusMessage').show(self.errorMessageView);
			    }
			});
		},
		
		initialize: function(options) {
			this.userFeedbackFormModel = new UserFeedbackFormModel();
			
			this.errorMessageView = new ErrorMessageView();
			
			this.successMessageView = new SuccessMessageView();
			
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