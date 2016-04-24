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
              //console.log('esqueleto vacio mostrado - se genera la instancia del Frame ...');

              //listenTo go to home. in logo
              //this.listenTo(this.comenzandoView, 'comenzando.siguiente', this.showSiguiente);
              //acá póseo el nombre del modelo por el parametro.

              //console.log('sentencia controller');
              this.sentenciaController = new SentenciaController({frame:this.nameModel});
              this.sentenciaController.show();

              //console.log('frame controlller');
              var frameController = new FrameController();
              frameController.show();

              //console.log('elemento Controller');
              this.elementoController = new ElementoController();
              this.elementoController.show();

              //eventos que escucha el controlador de su vista asociada...
              this.listenTo(this.logicWorldView, 'logic.addSentencia', this.addNewSentencia);
              this.listenTo(this.logicWorldView, 'logic.clearAll', this.clearAllInputs);
              this.listenTo(this.logicWorldView, 'logic.insertChar', this.insertChar);
              this.listenTo(this.logicWorldView, 'logic.verificar', this.verificar);

          },

          addNewSentencia: function(){
            this.sentenciaController.addNewSentencia();
          },

          clearAllInputs: function(){
            this.sentenciaController.clearAllInputs();
          },

          insertChar: function(char){
            this.sentenciaController.insertCharInFocus(char);
          },

          verificar: function(){
            /*console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            console.log('collection-Elementos.toJSON(): ',   this.sentenciaController.getCollection().toJSON());
            console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(this.sentenciaController.getCollection().toJSON()));
            console.log('-------------------');
            console.log('collection-Sentencias.toJSON(): ', this.elementoController.getCollection().toJSON());
            console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(this.elementoController.getCollection().toJSON()));
            */
            console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            var listaSentencias = this.sentenciaController.getCollection().toJSON();
            var Json = [{'nombre':'n1', 'x' : 10, 'y':10, 'atributos':{
                                                                            'topo':'tipo1', 'size' : '20'}
                                        },
                                        {'nombre':'n2', 'x' : 20, 'y':20, 'atributos':{
                                                                            'topo':'tipo2', 'ancho' : '25', 'otro':'otro-valor'}
                                        }
                                    ];
            console.log('collection-Elementos.toJSON(): ',   this.elementoController.getCollection().toJSON());
            console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(this.elementoController.getCollection().toJSON()));
            console.log('-------------------');
            console.log('collection-Elementos.toJSON(): ',   JSON.stringify( Json));

            //beggin AJAX
            $.ajax({
            type: 'post',
            headers: { 'content-type': 'application/json' },
            data:JSON.stringify({
                    "listaElementos":Json,
                    "listaSentencias": listaSentencias
                  }),
            url: "http://localhost:8080/actionTest",
            //success: function(data){
            //		that.trigger("event_formulario:insert_Char", "dentro del Ajax");
            //}
            }).then(function(data, status, jqxhr) {
            //	var lsentenciasR = data["listaSentencias"];
            console.log('status: ' + status);
            console.log(data);
            //that.trigger("event_formulario:respuestaResivida",  data["listaSentencias"]);

            //for (var i in  s) {
            //  $('#respuesta').append('Elemenento ' + i +' : ' + s[i] + '<br/>');
            //}
            });
            //end AJA
          }

        });
        return LogicWorldController;
    }
);
