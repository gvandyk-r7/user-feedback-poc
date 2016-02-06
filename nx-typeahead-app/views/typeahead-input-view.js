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
			'keydown @ui.input': 'performFingerprintSearch'
		},

		performFingerprintSearch: function(e) {
			console.log("SEARCH");
		},
	});
});