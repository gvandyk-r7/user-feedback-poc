define([
    'marionette',
    'nx-user-feedback/views/typeahead-result-view',
    'text!nx-user-feedback/templates/typeahead-datalist-view.html'
], function (Marionette, TypeaheadResultView, TypeaheadDatalistViewTemplate) {
    return Marionette.CompositeView.extend({
    	template: _.template(TypeaheadDatalistViewTemplate),

    	tagName: 'datalist',
    	
    	childView: TypeaheadResultView,
    	
    	childViewContainer: "datalist"
    });
});