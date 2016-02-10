define([
    'backbone',
    'nx-user-feedback-app/models/typeahead-result-model'
], function (Backbone, TypeaheadResultModel) {
    return Backbone.Collection.extend({
    	model: TypeaheadResultModel
    });
});