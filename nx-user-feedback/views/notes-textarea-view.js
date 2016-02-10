define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/notes-textarea-view.html'
        ], function (_, Marionette, NotesTextareaViewTemplate) {
	return Marionette.ItemView.extend({
		template: _.template(NotesTextareaViewTemplate),
		
		ui: {
			notes: '.user-feedback-notes'
		},

		events: {
			'change @ui.notes': 'setUserFeedbackNotes'
		},
		
		setUserFeedbackNotes: function() {
			this.model.set('notes', this.ui.notes.val());
		}
	});
});