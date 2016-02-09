'use strict';

define([ 'underscore', 'marionette', 'radio',
         'nx-typeahead-app/collections/typeahead-collection',
         'nx-typeahead-app/views/typeahead-composite-view',
         'nx-typeahead-app/views/typeahead-input-view',
         'nx-typeahead-app/regions/upper-region',
         'nx-typeahead-app/regions/lower-region',
         'text!nx-typeahead-app/templates/typeahead-main-layout-view.tmpl'],
         function(_, Marionette, Radio, TypeaheadCollection, TypeaheadCompositeView,
        		 TypeaheadInputView, UpperRegion, LowerRegion,
        		 TypeaheadMainLayoutViewTemplate) {

	return Marionette.LayoutView.extend({
		el : '#nx-typeahead-app',

		template : _.template(TypeaheadMainLayoutViewTemplate),
		
		regions : {
			upper : UpperRegion,
			lower : LowerRegion
		},

		childEvents : {
			'perform:search' : 'onChildPerformSearch'
		},

		onChildPerformSearch : function(childView, query) {
			this.typeaheadCollection.reset([{result: 'foo'}, { result: 'bar'}])
		},

		initialize: function(options) {			
			this.typeaheadCollection = new TypeaheadCollection([{
				result: 'windows 8.1'
			}, {
				result: 'ubuntu 12.04'
			}, {
				result: 'mac osx'
			}]);

			this.typeaheadCompositeView = new TypeaheadCompositeView({
				collection: this.typeaheadCollection
			});
			this.typeaheadInputView = new TypeaheadInputView();
		},

		onRender : function() {
			var self = this;

			require(["nx-typeahead-app/collections/typeahead-collection",
			         "nx-typeahead-app/views/typeahead-composite-view"],
			         function (TypeaheadCollection, TypeaheadCompositeView) {
				self.typeaheadCompositeView.render();
				self.getRegion('upper').show(self.typeaheadInputView);//, options);
				self.getRegion('lower').show(self.typeaheadCompositeView);//, options);

				self.getOption('rootChannel').reply('some:request', 'food is good');
			});
		}
	})
});