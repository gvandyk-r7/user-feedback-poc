define([
        'underscore',
        'marionette',
        'text!nx-user-feedback-app/templates/main-item-view.tmpl'
        ],
        function (_, Marionette, MainItemViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(MainItemViewTemplate),
		
		triggers: {
		    'submit form': 'submit:form'
		},
		
		ui: {
			notes: '#user-feedback-notes'
		},

		events: {
			'change @ui.notes': 'setUserFeedbackNotes'
		},
		
		modelEvents: {
		    "change": "modelChanged"
		},

		modelChanged: function(model, value) {
			//console.dir(model.toJSON());
			//console.dir(value.toJSON);
		},

		setUserFeedbackNotes: function(e) {
			console.dir(e);
			this.model.set('notes', this.ui.notes.val());
		}
	});
});