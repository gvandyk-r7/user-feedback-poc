define([
    'underscore',
    'marionette',
    'text!nx-user-feedback/templates/typeahead-result-view.html'
], function (_, Marionette, TypeaheadResultViewTemplate) {
    return Marionette.ItemView.extend({
    	tagName: "option",
    	template: _.template(TypeaheadResultViewTemplate),
    });
});