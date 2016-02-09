define([
    'backbone',
    'marionette',
    'radio'
], function (Backbone, Marionette, Radio) {
    'use strict';
    
    var NxUserFeedbackApp = new Marionette.Application({});
    
    NxUserFeedbackApp.on("start", function(options) {    	
      if (Backbone.History.started !== true) {
        Backbone.history.start();
      }
      require(["nx-user-feedback-app/views/main-layout-view", "nx-typeahead-app/nx-typeahead-app"], function (MainLayoutView, NxTypeaheadApp) {
    	  var opts = {"rootChannel": new Radio.channel('typeahead')};
    	  NxUserFeedbackApp.mainLayoutView = new MainLayoutView(opts);
    	  NxUserFeedbackApp.mainLayoutView.render();
    	  NxTypeaheadApp.start(opts);
      });
    });
    
    return NxUserFeedbackApp;
});