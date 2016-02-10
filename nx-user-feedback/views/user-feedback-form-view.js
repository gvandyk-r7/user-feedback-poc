define([
        'underscore',
        'marionette',
        'nx-user-feedback/models/user-feedback-form-model',
        'nx-user-feedback/collections/typeahead-collection',
        'nx-user-feedback/views/typeahead-composite-view',
        'nx-user-feedback/views/notes-textarea-view',
        'nx-user-feedback/views/typeahead-input-view',
        'text!nx-user-feedback/templates/user-feedback-form-view.html'
        ],
        function (_, Marionette, UserFeedbackFormModel, TypeaheadCollection, TypeaheadCompositeView, NotesTextareaView, TypeaheadInputView, UserFeedbackFormViewTemplate) {
	'use strict';

	return Marionette.LayoutView.extend({
		
		initialize: function(options) {
			this.userFeedbackFormModel = new UserFeedbackFormModel;
			
			this.typeaheadInputView = new TypeaheadInputView({
				model: this.userFeedbackFormModel
			});
			
			this.notesTextareaView = new NotesTextareaView({
				model: this.userFeedbackFormModel
			});
			
			this.typeaheadCollection = new TypeaheadCollection();
			this.typeaheadCompositeView = new TypeaheadCompositeView({
				collection: this.typeaheadCollection
			});
			
			this.messageBus = this.getOption('messageBus');
			this.listenTo(this.messageBus, 'send:logs', this.onSendLogs);
		},

		tagName: 'form',
		
		attributes: {
			role: 'form'
		},
		
		template: _.template(UserFeedbackFormViewTemplate),
		
		regions: {
			input: '.typeahead-input-region',
			list: '.typeahead-list-region',
			notes: '.notes-textarea-region'
		},
		
		childEvents: {
			'perform:search' : 'onChildPerformSearch'
		},

		onChildPerformSearch : function(childView, query) {
			// TODO: Do actual query here
			//this.typeaheadCollection.fetch();
			this.typeaheadCollection.reset([{result: 'windows'}, { result: 'linux'}])
		},
		
		onSendLogs: function() {
			var self = this;
			this.userFeedbackFormModel.save(null, {
			    success: function (model, response) {
			        self.messageBus.trigger('send:logs:success');
			    },
			    error: function (model, response) {
			        self.messageBus.trigger('send:logs:failure');
			    }
			});
		},
		
		onBeforeShow: function() {
			this.showChildView('input', this.typeaheadInputView);
			this.showChildView('list', this.typeaheadCompositeView);
			this.showChildView('notes', this.notesTextareaView);
		}
	});
});