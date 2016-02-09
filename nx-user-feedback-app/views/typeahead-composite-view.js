define([
    'marionette',
    'nx-user-feedback-app/views/typeahead-result-view',
    'text!nx-user-feedback-app/templates/typeahead-composite-view.tmpl'
], function (Marionette, TypeaheadResultView, TypeaheadCompositeViewTemplate) {
    return Marionette.CompositeView.extend({

    	  childView: TypeaheadResultView,
    	  
    	  childViewContainer: "datalist",

    	  template: _.template(TypeaheadCompositeViewTemplate)
    });
});