define([
    'marionette',
    'nx-typeahead-app/views/typeahead-result-view',
    'text!nx-typeahead-app/templates/typeahead-composite-view.tmpl'
], function (Marionette, TypeaheadResultView, TypeaheadCompositeViewTemplate) {
    return Marionette.CompositeView.extend({

    	  childView: TypeaheadResultView,
    	  
    	  childViewContainer: "datalist",

    	  template: _.template(TypeaheadCompositeViewTemplate)
    });
});