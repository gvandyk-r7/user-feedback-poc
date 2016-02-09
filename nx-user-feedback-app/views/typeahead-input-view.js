define([
        'underscore',
        'marionette',
        'nx-user-feedback-app/models/typeahead-input-model',
        'text!nx-user-feedback-app/templates/typeahead-input-view.tmpl'
        ], function (_, Marionette, TypeaheadInputModel, template) {
	return Marionette.ItemView.extend({
		template: _.template(template),
		
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