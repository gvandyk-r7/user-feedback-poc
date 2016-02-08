define([
    'backbone',
    'marionette'
], function (Backbone, Marionette) {
    'use strict';

    var NxUserFeedbackApp = new Marionette.Application();
    
    NxUserFeedbackApp.on("before:start", function(options) {
      options = options || {};
      options.somethingOrOther = true;
    });
    
    NxUserFeedbackApp.on("start", function(options) {
      if (Backbone.History.started !== true) {
        Backbone.history.start();
      }
      require(["nx-user-feedback-app/views/main-layout-view"], function (MainLayoutView) {
    	  NxUserFeedbackApp.mainLayoutView = new MainLayoutView();
    	  NxUserFeedbackApp.mainLayoutView.render();
      });
    });
    
    return NxUserFeedbackApp;
});