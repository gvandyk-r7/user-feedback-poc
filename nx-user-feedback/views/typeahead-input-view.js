define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/typeahead-input-view.html',
        'nx-form/views/nx-form-group-view'
        ], function (_, Marionette, TypeaheadInputViewTemplate, NxFormGroupView) {
	return NxFormGroupView.extend({
		template: _.template(TypeaheadInputViewTemplate),
		
		ui: {
			input: '.typeahead-input'
		},

		events: {
			'keyup @ui.input': 'performSearch',
			'change @ui.input': 'setFingerprint'
		},
		
		performSearch: function() {
			var query = this.ui.input.val();
			this.triggerMethod('perform:search', query);
		},
		
		setFingerprint: function() {
			this.model.set('fingerprint', this.ui.input.val());
		}
	});
});