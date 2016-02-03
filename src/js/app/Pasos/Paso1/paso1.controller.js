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
          },

            show: function () {
                this.paso1View = new Paso1View();
                App.contentRegion.show(this.paso1View);

                this.listenTo(this.paso1View, 'paso1.siguiente', this.showSiguiente);
                this.listenTo(this.paso1View, 'paso1.atras', this.showAnterior);
            },

            showSiguiente: function () {
                this.router.navigate('paso2', {trigger: true});
            },

            showAnterior: function () {
                this.router.navigate('comenzando', {trigger: true});
            }

        });

        return Paso1Controller;
    }
);
