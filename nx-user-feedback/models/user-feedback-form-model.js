define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
    	defaults: {
		    "fingerprint": "",
		    "notes": ""
		},
		urlRoot: "/user-feedback",
		url: function() {
			return this.urlRoot + '/?details=true';
		}
    });
});