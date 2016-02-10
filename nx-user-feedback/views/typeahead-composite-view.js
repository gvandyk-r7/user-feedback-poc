define([
    'marionette',
    'nx-user-feedback/views/typeahead-result-view',
    'text!nx-user-feedback/templates/typeahead-composite-view.html'
], function (Marionette, TypeaheadResultView, TypeaheadCompositeViewTemplate) {
    return Marionette.CompositeView.extend({
    	template: _.template(TypeaheadCompositeViewTemplate),
    	
    	childView: TypeaheadResultView,
    	
    	childViewContainer: "datalist"
    });
});