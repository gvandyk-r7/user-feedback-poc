define([
    'backbone',
    'nx-user-feedback/models/typeahead-result-model'
], function (Backbone, TypeaheadResultModel) {
    return Backbone.Collection.extend({
    	model: TypeaheadResultModel,
    	url: '/books',
    	parse: function(data) {
    	    return data;
    	},
    	fetch: function(options) {
            return Backbone.Collection.prototype.fetch.call(this, _.extend({
                data: [{
                    result: 'windows'
                }]
            }, options));
        }
    });
});