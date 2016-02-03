define(
[
    'jquery',
    'backbone',
    './Pasos/Comenzando/comenzando.controller',
    './Pasos/Paso1/paso1.controller',
    './Pasos/Paso2/paso2.controller',
    './Pasos/Paso3/paso3.controller'

],
function ($, Backbone, ComenzandoController, Paso1Controller, Paso2Controller, Paso3Controller) {
        'use strict';

        var Router = Backbone.Router.extend({

            routes: {
                'paso1': 'showPaso1',
                'paso2': 'showPaso2',
                'paso3': 'showPaso3',
                'comenzando' : 'showComenzandoAsistente'
            },

            /**
            * [initialize description]
            * @return {[type]} [description]
            */
            initialize: function () {
                Backbone.history.start();
            },

            showComenzandoAsistente : function(){
              var comenzandoController = new ComenzandoController({ router: this});
              comenzandoController.show();
            },

            showPaso1: function () {
                var paso1Controller = new Paso1Controller({ router: this});
                paso1Controller.show();
            },

            showPaso2: function () {
                console.log('estamos en el paso 2');
                var paso2Controller = new Paso2Controller({ router: this});
                paso2Controller.show();
            },

            showPaso3: function () {
                console.log('estamos en el paso 3');

                var paso3Controller = new Paso3Controller({ router: this});
                paso3Controller.show();
            }

        });

        return Router;
    }
);
