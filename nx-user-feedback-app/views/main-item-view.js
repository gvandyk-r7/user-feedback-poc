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
			notes: '#user-feedback-notes',
			sendLogsButton: 'button[type=submit]'
		},

		events: {
			'change @ui.notes': 'setUserFeedbackNotes'
		},
		
		setUserFeedbackNotes: function(e) {
			this.model.set('notes', this.ui.notes.val());
		}
	});
});