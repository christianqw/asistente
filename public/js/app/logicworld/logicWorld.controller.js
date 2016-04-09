define (
    [
        'jquery',
        'underscore',
        'marionette',
        './logicWorld.view',
        './backbone.components/sentencias/sentencia.controller',
        './backbone.components/frame/frame.controller',
        './backbone.components/elementos/elemento.controller'
    ],
    function ($, _, Marionette, LogicWorldView, SentenciaController, FrameController, ElementoController) {
        'use strict';

        var LogicWorldController = Marionette.Controller.extend({

          initialize: function (options) {
              this.router = options.router;
              this.formModel = options.fModel;
              this.nameModel = options.frame;

              console.log("INIC LOGICWORLD Controller - ");
              console.log(this.nameModel);
          },

          show: function () {
              this.logicWorldView = new LogicWorldView();
              App.contentRegion.show(this.logicWorldView);

              console.log('esqueleto vacio mostrado - se genera la instancia del Frame ...');

              //listenTo go to home. in logo
              //this.listenTo(this.comenzandoView, 'comenzando.siguiente', this.showSiguiente);
              //acá póseo el nombre del modelo por el parametro.

              var sentenciaController = new SentenciaController({frame:this.nameModel});
              sentenciaController.show();
              var frameController = new FrameController();
              frameController.show();

              var elementoController = new ElementoController();
              elementoController.show();
          }

        });
        return LogicWorldController;
    }
);
