define([
    'underscore',
    'marionette',
    'text!nx-user-feedback-app/templates/typeahead-result-view.tmpl'
], function (_, Marionette, TypeaheadResultViewTemplate) {
    return Marionette.ItemView.extend({
    	tagName: "option",
    	template: _.template(TypeaheadResultViewTemplate),
    });
});