define (
    [
        'jquery',
        'underscore',
        'marionette',
        './paso2.view'
    ],
    function ($, _, Marionette, Paso2View) {
        'use strict';

        var Paso2Controller = Marionette.Controller.extend({

            initialize: function (options) {
                this.router = options.router;
                //this.descripcion = options.descripcion;
            },

            show: function () {         //{'descripcion': this.descripcion}
                this.paso2View = new Paso2View();
                App.contentRegion.show(this.paso2View);

                this.listenTo(this.paso2View, 'paso2.siguiente', this.showSiguiente);
                this.listenTo(this.paso2View, 'paso2.anterior', this.showAnterior);
            },

            showSiguiente: function () {
                this.router.navigate('paso3', {trigger: true});
            },

            showAnterior: function () {
                this.router.navigate('paso1', {trigger: true});
            }

        });

        return Paso2Controller;
    }
);
