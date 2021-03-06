define([
    'marionette'
], function(Marionette){
    return Marionette.Region.extend({
    	el: '#modal-region',
    	
        onShow: function(view){
            this.listenTo(view, "dialog:close", this.closeDialog);

            this.$el.modal({
                backdrop: true,
                keyboard: true,
                show: true
            });
        },

        closeDialog: function(){
            this.stopListening();
            this.close();
            this.$el.modal('hide');
        }
    });
});