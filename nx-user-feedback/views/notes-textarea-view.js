define([
        'underscore',
        'marionette',
        'nx-form/views/nx-form-group-view',
        'text!nx-user-feedback/templates/notes-textarea-view.html'
        ], function (_, Marionette, NxFormGroupView, NotesTextareaViewTemplate) {
	return NxFormGroupView.extend({
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