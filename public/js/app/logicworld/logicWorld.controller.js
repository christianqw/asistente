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

              this.sentenciaController = new SentenciaController({frame:this.nameModel});
              this.sentenciaController.show();
              var frameController = new FrameController();
              frameController.show();

              var elementoController = new ElementoController();
              elementoController.show();

              //eventos que escucha el controlador de su vista asociada...
              this.listenTo(this.logicWorldView, 'logic.addSentencia', this.addNewSentencia);
              this.listenTo(this.logicWorldView, 'logic.clearAll', this.clearAllInputs);
              this.listenTo(this.logicWorldView, 'logic.insertChar', this.insertChar);
          },

          addNewSentencia: function(){
            this.sentenciaController.addNewSentencia();
          },

          clearAllInputs: function(){
            this.sentenciaController.clearAllInputs();
          },

          insertChar: function(char){
            this.sentenciaController.insertCharInFocus(char);
          }

        });
        return LogicWorldController;
    }
);
