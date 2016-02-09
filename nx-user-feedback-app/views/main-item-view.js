define([
        'underscore',
        'marionette',
        'nx-user-feedback-app/models/user-feedback-form-model',
        'text!nx-user-feedback-app/templates/main-item-view.tmpl'
        ],
        function (_, Marionette, UserFeedbackFormModel, MainItemViewTemplate) {
	'use strict';

	return Marionette.ItemView.extend({
		template: _.template(MainItemViewTemplate),
		
		triggers: {
		    'submit form': 'submit:form'
		},

		model: new UserFeedbackFormModel(),
		
		ui: {
			notes: '#user-feedback-notes'
		},

		events: {
			'change @ui.fingerprint': 'setFingerprint'
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