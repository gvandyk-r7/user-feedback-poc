define([
    'marionette',
    'text!user-feedback/templates/main-item-view.tmpl'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
    	template: _.template(template)
    });
});