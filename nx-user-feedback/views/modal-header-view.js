define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/modal-header-view.html'
        ], function (_, Marionette, ModalHeaderViewTemplate) {
	return Marionette.ItemView.extend({
		template: _.template(ModalHeaderViewTemplate)
	});
});