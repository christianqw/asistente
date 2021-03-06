define(
[
    'jquery',
    'backbone',
    './data.model',
    './Pasos/Comenzando/comenzando.controller',
    './Pasos/Paso1/paso1.controller',
    './Pasos/Paso2/paso2.controller',
    './Pasos/Paso3/paso3.controller',
    './Pasos/Color/color.controller'

],
function ($, Backbone, FormModel, ComenzandoController, Paso1Controller, Paso2Controller, Paso3Controller, ColorController) {
        'use strict';

        var formModel = new FormModel ();

        var Router = Backbone.Router.extend({

            //dataLocal : formModel,

            routes: {
                'paso1': 'showPaso1',
                'paso2': 'showPaso2',
                'paso3': 'showPaso3',
                'comenzando' : 'showComenzandoAsistente',
                "color" : "showColor",
                'form' : "showForm"
            },

            /**
            * [initialize description]
            * @return {[type]} [description]
            */
            initialize: function () {
                Backbone.history.start();
            },

            showComenzandoAsistente : function(){
              var comenzandoController = new ComenzandoController({ router: this, fModel: formModel});
              comenzandoController.show();
            },

            showPaso1: function () {
                var paso1Controller = new Paso1Controller({ router: this, fModel: formModel});
                paso1Controller.show();
                console.log("Paso1  model:" + JSON.stringify(formModel));
            },

            showPaso2: function () {
                var paso2Controller = new Paso2Controller({ router: this, fModel: formModel});
                paso2Controller.show();
                console.log("Paso2  model:" + JSON.stringify(formModel));
            },

            showPaso3: function () {
                console.log('estamos en el paso 3');

                var paso3Controller = new Paso3Controller({ router: this});
                paso3Controller.show();
            },

            showColor:function (){
              console.log("Dentro de colores");
              var colorController = new ColorController({ router: this});
              colorController.show();
            }


        });

        return Router;
    }
);
