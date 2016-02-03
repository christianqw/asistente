define (
    [
        'jquery',
        'underscore',
        'marionette',
        './paso3.view'
    ],
    function ($, _, Marionette, Paso3View) {
        'use strict';

        var Paso3Controller = Marionette.Controller.extend({

          initialize: function (options) {
              this.router = options.router;
          },

            show: function () {
                this.paso3View = new Paso3View();
                App.contentRegion.show(this.paso3View);

                this.listenTo(this.paso3View, 'paso3.siguiente', this.showSiguiente);
                this.listenTo(this.paso3View, 'paso3.anterior', this.showAnterior);
            },

            showSiguiente: function () {
                this.router.navigate('paso4', {trigger: true});
            },

            showAnterior: function () {
                this.router.navigate('paso2', {trigger: true});
            }

        });

        return Paso3Controller;
    }
);
