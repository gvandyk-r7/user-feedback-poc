define([
        'underscore',
        'marionette',
        'nx-user-feedback-app/models/modal-model',
        'text!nx-user-feedback-app/templates/main-item-view.tmpl'
        ], function (_, Marionette, template) {
	return Marionette.ItemView.extend({
		// template: _.template(template)
		
		template: function(serialized_model) {
			var name = serialized_model.name;
			return _.template(my_template_html)({
				name : name,
				some_custom_attribute : some_custom_key
			});
		}
	});
});