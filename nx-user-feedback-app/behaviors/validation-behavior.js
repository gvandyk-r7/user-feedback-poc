define([
    'marionette'
], function (Marionette) {
    return Mn.Behavior.extend({

        modelEvents: {
            'validated': 'setValidated',
        },

        onRender: function() {
            //Set up any other form related stuff here
            Validation.bind(this.view);
            if(this.hasBeenValidated) {
                this.view.model.validate();
            }
        },

        setValidated: function() {
            this.hasBeenValidated = true;
        }

    });
});