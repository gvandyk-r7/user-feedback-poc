define([
        'underscore',
        'marionette',
        'text!nx-user-feedback/templates/modal-footer-view.html'
        ], function (_, Marionette, ModalFooterViewTemplate) {
	return Marionette.ItemView.extend({
		template: _.template(ModalFooterViewTemplate),
		
		ui: {
			send: '.send',
			cancel: '.cancel'
		},

		events: {
			'click @ui.send': 'formSubmit',
		},
		
		formSubmit: function() {
			this.triggerMethod('form:submit');
		}
	});
});