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
      require(["user-feedback/views/main-layout-view"], function (MainLayoutView) {
    	  UserFeedbackApp.mainLayoutView = new MainLayoutView();
    	  UserFeedbackApp.mainLayoutView.render();
      });
    });
    
    /*
    UserFeedbackApp.addInitializer(function (){
        app.header.show(header);
        app.footer.show(footer);
        require([
            'common/AppRouter',
            'modules/one/OneApp',
            'modules/two/TwoApp'
        ], function(AppRouter){
            new AppRouter();
            Backbone.history.start({pushState: true})
        });
    });
    */
    
    return UserFeedbackApp;
});