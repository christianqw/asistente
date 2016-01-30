define(
[
    'jquery',
    'backbone',
    './Pasos/Paso1/paso1.controller'
],
function ($, Backbone, Paso1Controller) {
        'use strict';

        var Router = Backbone.Router.extend({

            routes: {
                'paso1': 'showPaso1',
                'paso2': 'showPaso2'
            },

            /**
            * [initialize description]
            * @return {[type]} [description]
            */
            initialize: function () {
                Backbone.history.start();
            },

            showPaso1: function () {
                console.log('show paso 1');
                var paso1Controller = new Paso1Controller({ router: this, descripcion: "Este es el paso 1 que lo creo desde el router" });
                paso1Controller.show();
            },

            showPaso2: function () {
                console.log('estamos en el paso 2');
            }

        });

        return Router;
    }
);
