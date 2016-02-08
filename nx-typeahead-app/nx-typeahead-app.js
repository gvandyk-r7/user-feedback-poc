define([
        'underscore',
        'backbone',
        'marionette'
        ], function (_, Backbone, Marionette) {
	'use strict';

	var NxTypeaheadApp = new Marionette.Application();

	NxTypeaheadApp.on("start", function(results) {
		if (Backbone.History.started !== true) {
			Backbone.history.start();
		}
		
		require(["nx-typeahead-app/views/typeahead-main-layout-view",
		         "text!nx-typeahead-app/templates/typeahead-main-layout-view.tmpl"],
				function(TypeaheadMainLayoutView, TypeaheadMainLayoutViewTemplate) {
			var view = new TypeaheadMainLayoutView();
			view.render();
		});
		/*
		require(["nx-typeahead-app/collections/typeahead-collection",
		         "nx-typeahead-app/views/typeahead-composite-view"],
		         function (TypeaheadCollection, TypeaheadCompositeView) {

			var fingerprintList = new TypeaheadCollection([{
				result: 'windows 8.1'
			}, {
				result: 'ubuntu 12.04'
			}, {
				result: 'mac osx'
			}]);

			NxTypeaheadApp.typeaheadCompositeView = new TypeaheadCompositeView({
				el: '#nx-typeahead-app',
				collection: fingerprintList
			});
			NxTypeaheadApp.typeaheadCompositeView.render();
		});*/
	});

	return NxTypeaheadApp;
});