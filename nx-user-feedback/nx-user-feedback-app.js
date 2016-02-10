define([
    'underscore',
    'backbone',
    'marionette'
], function (_, Backbone, Marionette) {
    'use strict';
    
    var NxUserFeedbackApp = new Marionette.Application();
    
    NxUserFeedbackApp.on("before:start", function(options) {
        options = _.extend(options, { messageBus: Backbone.Events });
    });
    
    NxUserFeedbackApp.on("start", function(options) {
      if (Backbone.History.started !== true) {
        Backbone.history.start();
      }
      require(["nx-user-feedback/views/modal-layout-view"], function (ModalLayoutView) {
    	  var view = new ModalLayoutView(options);
    	  view.render();
      });
    });
    
    return NxUserFeedbackApp;
});