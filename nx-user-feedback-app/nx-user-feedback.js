define([
    'backbone',
    'marionette',
], function (Backbone, Marionette) {
    'use strict';
    
    var NxUserFeedbackApp = new Marionette.Application({});
    
    NxUserFeedbackApp.on("start", function(options) {    	
      if (Backbone.History.started !== true) {
        Backbone.history.start();
      }
      require(["nx-user-feedback-app/views/main-layout-view"], function (MainLayoutView) {
    	  var mainLayoutView = new MainLayoutView();
    	  mainLayoutView.render();
      });
    });
    
    return NxUserFeedbackApp;
});