define([
    'backbone',
    'nx-typeahead-app/models/typeahead-result-model'
], function (Backbone, TypeaheadResultModel) {
    return Backbone.Collection.extend({
    	model: TypeaheadResultModel
    });
});