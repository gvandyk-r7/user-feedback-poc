define([
    'marionette',
    'nx-typeahead-app/views/typeahead-result-view',
    'text!nx-typeahead-app/templates/typeahead-composite-view.tmpl'
], function (Marionette, TypeaheadResultView, TypeaheadCompositeViewTemplate) {
    return Marionette.CompositeView.extend({

    	  childView: TypeaheadResultView,
    	  
    	  childViewContainer: "select",

    	  template: _.template(TypeaheadCompositeViewTemplate),

    	  modelEvents: {
    	    "change": "modelChanged"
    	  },

    	  collectionEvents: {
    	    "add": "modelAdded"
    	  },

    	  modelChanged: function(e) {
    	    // e.preventDefault();
    	    console.log('changed', e);
    	  },

    	  modelAdded: function(e) {
    	    // e.preventDefault();
    	    console.log('added', e);
    	  }
    });
});