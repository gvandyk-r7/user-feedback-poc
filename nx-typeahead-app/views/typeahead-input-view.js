define([
        'underscore',
        'marionette',
        'nx-typeahead-app/models/typeahead-input-model',
        'text!nx-typeahead-app/templates/typeahead-input-view.tmpl'
        ], function (_, Marionette, TypeaheadModel, template) {
	return Marionette.ItemView.extend({
		template: _.template(template),
		
		model: new TypeaheadModel(),
		
		ui: {
			input: '.typeahead-input'
		},

		events: {
			'keyup @ui.input': 'performSearch'
		},

		performSearch: function(e) {
			var query = this.ui.input.val();
			this.triggerMethod('perform:search', query);
		},
	});
});