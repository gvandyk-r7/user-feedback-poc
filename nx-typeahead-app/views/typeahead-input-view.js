define([
        'underscore',
        'marionette',
        'nx-typeahead-app/models/typeahead-input-model',
        'text!nx-typeahead-app/templates/typeahead-input-view.tmpl'
        ], function (_, Marionette, TypeaheadInputModel, template) {
	return Marionette.ItemView.extend({
		template: _.template(template),
		
		model: new TypeaheadInputModel(),
		
		ui: {
			input: '.typeahead-input'
		},

		events: {
			'keyup @ui.input': 'performSearch'
		},

		performSearch: function() {
			var query = this.ui.input.val();
			this.triggerMethod('perform:search', query);
		}
	});
});