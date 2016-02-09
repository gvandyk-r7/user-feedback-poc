define([
        'underscore',
        'backbone',
        'marionette'
        ], function (_, Backbone, Marionette) {
	'use strict';

	var NxTypeaheadApp = new Marionette.Application();

	NxTypeaheadApp.on("start", function(options) {
		
		if (Backbone.History.started !== true) {
			Backbone.history.start();
		}
		
		require(["nx-typeahead-app/views/typeahead-main-layout-view",
		         "text!nx-typeahead-app/templates/typeahead-main-layout-view.tmpl"],
				function(TypeaheadMainLayoutView, TypeaheadMainLayoutViewTemplate) {
			var view = new TypeaheadMainLayoutView(options);
			view.render();
		});
	});

	return NxTypeaheadApp;
});