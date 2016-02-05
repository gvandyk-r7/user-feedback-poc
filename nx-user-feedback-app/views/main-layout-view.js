'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-user-feedback-app/views/main-item-view',
        'nx-user-feedback-app/regions/dialog-region',
        'text!nx-user-feedback-app/templates/dialog-region.tmpl'
        ], function(_, Marionette, Radio, MainItemView, DialogRegion, DialogRegionTemplate) {
	return Marionette.LayoutView.extend({
		el: '#nx-user-feedback-app',
		template: _.template(DialogRegionTemplate),
		
		regions: {
			dialog: DialogRegion
		},

			//this.getRegion('dialog').show(new MainItemView());//, options);
			//Radio.channel('root').comply('set:content', function(contentView) {
			//	this.getRegion('dialog').show(contentView);
			//});
		
		onRender: function() {
			this.getRegion('dialog').show(new MainItemView());//, options);
		}
	})
});