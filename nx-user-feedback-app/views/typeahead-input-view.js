define([
    'marionette',
    'nx-user-feedback-app/models/typeahead-model',
    'text!nx-user-feedback-app/templates/typeahead-input-view.tmpl'
], function (Marionette, TypeaheadModel, template) {
    return Marionette.ItemView.extend({
    	template: _.template(template),
    	model: new TypeaheadModel(),
    	ui: {
    	    input: '.typeahead-input'
    	  },

    	  events: {
    	    'keydown @ui.input': 'performFingerprintSearch'
    	  },
    	  
    	  performFingerprintSearch: function(e) {
    	  	console.log("SEARCH");
    	  },
    });
});