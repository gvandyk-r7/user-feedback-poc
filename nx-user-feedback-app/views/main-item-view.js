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
		/*
		template: function(serialized_model) {
			var name = serialized_model.name;
			//return _.template(template)({
			//	some_custom_attribute : some_custom_key
			//});
		}*/
	});
});