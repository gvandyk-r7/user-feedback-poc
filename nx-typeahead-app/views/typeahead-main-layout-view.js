'use strict';

define([ 'underscore', 'marionette', 'radio',
		'nx-typeahead-app/views/typeahead-composite-view',
		'nx-typeahead-app/views/typeahead-input-view',
		'nx-typeahead-app/regions/upper-region',
		'nx-typeahead-app/regions/lower-region',
		'text!nx-typeahead-app/templates/typeahead-main-layout-view.tmpl', ],
		function(_, Marionette, Radio, TypeaheadCompositeView,
				TypeaheadInputView, UpperRegion, LowerRegion,
				TypeaheadMainLayoutViewTemplate) {
			return Marionette.LayoutView.extend({
				el : '#nx-typeahead-app',

				template : _.template(TypeaheadMainLayoutViewTemplate),

				regions : {
					upper : UpperRegion,
					lower : LowerRegion
				},

				childEvents : function() {
					return {
						render : this.onChildRendered
					}
				},

				onChildRendered : function() {
					console.log('A child view has been rendered.');
				},

				onRender : function() {
					var self = this;
					
					require(["nx-typeahead-app/collections/typeahead-collection",
					         "nx-typeahead-app/views/typeahead-composite-view"],
					         function (TypeaheadCollection, TypeaheadCompositeView) {

						var fingerprintList = new TypeaheadCollection([{
							result: 'windows 8.1'
						}, {
							result: 'ubuntu 12.04'
						}, {
							result: 'mac osx'
						}]);

						var typeaheadCompositeView = new TypeaheadCompositeView({
							collection: fingerprintList
						});
						typeaheadCompositeView.render();

						self.getRegion('upper').show(new TypeaheadInputView());//, options);
						self.getRegion('lower').show(typeaheadCompositeView);//, options);
					});
				}
			})
		});