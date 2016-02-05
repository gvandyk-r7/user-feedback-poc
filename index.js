require.config({
	paths: {
		underscore: 'node_modules/underscore/underscore-min',
		backbone: 'node_modules/backbone/backbone-min',
		radio: 'node_modules/backbone.radio/build/backbone.radio.min',
		marionette: 'node_modules/backbone.marionette/lib/backbone.marionette.min',
		jquery: 'node_modules/jquery/dist/jquery.min',
		localStorage: 'node_modules/backbone.localStorage/backbone.localStorage-min',
		tpl: 'node_modules/tpl/lib/tpl',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        text: 'node_modules/requirejs-text/text'
	},

	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},
		
		radio: {
			exports: 'Backbone.Radio',
			deps: ['backbone']
		},

		marionette: {
			exports: 'Backbone.Marionette',
			deps: ['backbone']
		},

        bootstrap: {
            deps: ['jquery']
        }

	}
});

require([
    'nx-user-feedback-app/nx-user-feedback-app',
    'jquery',
	'bootstrap'
], function (NxUserFeedbackApp) {
	'use strict';

	NxUserFeedbackApp.start({});
});