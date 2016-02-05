define([
    'marionette'
], function (Marionette) {
    'use strict';

    var UserFeedbackApp = new Marionette.Application();
    
    UserFeedbackApp.on("before:start", function(options) {
      options.somethingOrOther = true;
    });
    
    UserFeedbackApp.on("start", function(options) {
      if (Backbone.history) {
        Backbone.history.start();
      }
      require(["nx-user-feedback-app/views/main-layout-view"], function (MainLayoutView) {
    	  UserFeedbackApp.mainLayoutView = new MainLayoutView();
    	  UserFeedbackApp.mainLayoutView.render();
      });
    });
    
    return UserFeedbackApp;
});