define (
    [
        'jquery',
        'underscore',
        'marionette',
        './paso1.view'
    ],
    function ($, _, Marionette, Paso1View) {
        'use strict';

        var Paso1Controller = Marionette.Controller.extend({

            initialize: function (options) {
                this.router = options.router;
                this.descripcion = options.descripcion;
            },

            show: function () {
                this.paso1View = new Paso1View({'descripcion': this.descripcion});
                App.contentRegion.show(this.paso1View);

                this.listenTo(this.paso1View, 'paso1.siguiente', this.showSiguiente);
            },

            showSiguiente: function () {
                this.router.navigate('paso2', {trigger: true});
            }

        });

        return Paso1Controller;
    }
);
