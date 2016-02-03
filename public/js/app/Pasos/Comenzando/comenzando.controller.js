define (
    [
        'jquery',
        'underscore',
        'marionette',
        './comenzando.view'
    ],
    function ($, _, Marionette, ComenzandoView) {
        'use strict';

        var ComenzandoController = Marionette.Controller.extend({

            initialize: function () {
            },

            show: function () {
                this.comenzandoView = new ComenzandoView();
                App.contentRegion.show(this.comenzandoView);

                this.listenTo(this.comenzandoView, 'comenzando.siguiente', this.showSiguiente);
            },

            showSiguiente: function () {
                this.router.navigate('paso1', {trigger: true});
            }

        });

        return ComenzandoController;
    }
);
