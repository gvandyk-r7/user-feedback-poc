'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'user-feedback/views/main-item-view',
        'user-feedback/regions/dialog-region',
        'text!user-feedback/templates/dialog-region.tmpl'
        ], function(_, Marionette, Radio, MainItemView, DialogRegion, DialogRegionTemplate) {
	return Marionette.LayoutView.extend({
		el: '#user-feedback-layout-view',
		template: _.template(DialogRegionTemplate),
		
		regions: {
			dialog: DialogRegion
		},

		onBeforeRender: function() {
			//this.getRegion('dialog').show(new MainItemView());//, options);
			//Radio.channel('root').comply('set:content', function(contentView) {
			//	this.getRegion('dialog').show(contentView);
			//});
		},
		onRender: function() {
			this.getRegion('dialog').show(new MainItemView());//, options);
		}
	})
});