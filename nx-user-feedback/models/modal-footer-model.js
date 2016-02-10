define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
    	defaults: {
		    send: 'Send Now',
		    cancel: 'Cancel'
		},
    });
});