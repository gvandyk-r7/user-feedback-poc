define([
    'marionette',
    'text!nx-user-feedback-app/templates/main-item-view.tmpl'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
    	template: _.template(template)
    });
});