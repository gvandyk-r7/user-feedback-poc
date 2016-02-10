'use strict';

define([
        'underscore',
        'marionette',
        'nx-user-feedback/views/modal-content-layout-view',
        'nx-user-feedback/regions/modal-dialog-region',
        'text!nx-user-feedback/templates/modal-layout-view.html',
        ], function(_, Marionette, ModalContentLayoutView, ModalDialogRegion, ModalLayoutViewTemplate) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback',

		template: _.template(ModalLayoutViewTemplate),
		
		regions: {
			dialogRegion: ModalDialogRegion
		},
		
		ui: {
			modal: '.modal'
		},
		
		onRender: function(event) {
			// show the modal
			this.ui.modal.modal();
			
			var modalContentLayoutView = new ModalContentLayoutView(event.options);
			this.showChildView('dialogRegion', modalContentLayoutView);
		}
	})
});