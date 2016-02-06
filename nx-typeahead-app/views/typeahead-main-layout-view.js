'use strict';

define([
        'underscore',
        'marionette',
        'radio',
        'nx-typeahead-app/views/typeahead-composite-view',
        'nx-typeahead-app/views/typeahead-input-view',
        'nx-typeahead-app/regions/upper-region',
        'nx-typeahead-app/regions/lower-region',
        'text!nx-typeahead-app/templates/typeahead-main-layout-view.tmpl',
        ], function(_, Marionette, Radio, TypeaheadCompositeView, TypeaheadInputView, UpperRegion, LowerRegion, TypeaheadMainLayoutViewTemplate) {
	return Marionette.LayoutView.extend({
		el: '#nx-typeahead-app',
		
		template: _.template(TypeaheadMainLayoutViewTemplate),
		
		regions: {
			upper: UpperRegion,
			lower: LowerRegion
		},
		
		onRender: function() {
			this.getRegion('upper').show(new TypeaheadCompositeView());//, options);
			this.getRegion('lower').show(new TypeaheadInputView());//, options);
		}
	})
});