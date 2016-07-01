define(
[
    'jquery',
    'backbone',
    './data.model',
    './logicworld/logicWorld.controller'
  ],
function ($, Backbone, FormModel, LogicWorldController) {
        'use strict';

        var formModel = new FormModel ();

        var Router = Backbone.Router.extend({

            dataLocal : formModel,

            routes: {
              //'modelos/:nameModel' : 'showModelo', no funca
                ':nameModel' : 'showModelo',
            },

            /**
            * [initialize description]
            * @return {[type]} [description]
            */
            initialize: function () {
              Backbone.history.start();
            },

            showModelo : function (nameModel){
              console.log("dentro de <show modelo>" + nameModel);
              //console.log("fragmento = " + Backbone.history);
              //App.event_aggregator.trigger('some:event2', 2);
              var logicWorldController = new LogicWorldController({ router: this, fModel: formModel, frame:nameModel});
              logicWorldController.show();
            }


        });

        return Router;
    }
);
