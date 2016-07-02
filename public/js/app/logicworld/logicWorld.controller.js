define (
    [
        'jquery',
        'underscore',
        'marionette',
        './logicWorld.view',
        './app.components/sentencias/sentencia.controller',
        './app.components/frame/frame.controller',
        './app.components/elementos/elemento.controller'
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
              this.sentenciaController = new SentenciaController();
              this.sentenciaController.show();

              //console.log('frame controlller');
              var frameController = new FrameController({nameModel:this.nameModel});
              frameController.show();

              //console.log('elemento Controller');
              this.elementoController = new ElementoController();
              this.elementoController.show();

              //cargamos la configuracionde la semantica para la verificacion
              this.JsonConfig = this.getJsonConfigEstructura('js/app/logicworld/modelos/'+this.nameModel+'/estructura-config.json');

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

          generateListaElementos: function(arrJson){
            var lista = [];
            _.each(arrJson, function(item){
              var eAux = {'nombre': item.nombre, 'left' : item.left, 'top' : item.top, 'dominio' : item.dominio, 'id' : item.id};
              delete item.nombre; delete item.left; delete item.top; delete item.dominio; delete item.id;
              //ademas quitamos ls que no utilizamos en la lógica
              delete item.img; delete item.imgWidth; delete item.imgHeight;
              eAux.atributos = item;
              lista.push(eAux);
            });
            console.log('lista >>>>>');
            console.log(lista);
            return lista;
          },

          verificar: function(){
            console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            var listaSentencias = this.sentenciaController.getCollection().toJSON();
            var listaElementos = this.generateListaElementos(this.elementoController.getCollection().toJSON());
            var nameModel = this.nameModel;
            var Json = JSON.stringify(this.JsonConfig);
            var that = this;

            console.log('nameModel: ',   nameModel);
            console.log('collection-Elementos.toJSON(): ',   JSON.stringify( listaElementos));
            console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(listaSentencias));
            console.log('JSON.stringify(collection.toJSON()): ', this.JsonConfig);
            console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            //beggin AJAX
            $.ajax({
            type: 'post',
            headers: { 'content-type': 'application/json' },
            data:JSON.stringify({
                    "nameIdFrame" : nameModel,
                    "listaElementos": listaElementos,
                    "listaSentencias": listaSentencias,
                    "jsonConfig" : Json
                  }),
                  url: "http://localhost:8080/actionVerificar",
            }).then(function(data, status, jqxhr) {

            console.log('status: ' + status);console.log(data);
            that.sentenciaController.respuestaVerificada(data);

            });
            //end AJAX
          },


          //-------------
          //get and load JSON
          //-------------
          getJsonConfigEstructura: function (path){
            var that = this;
            this.loadJSON(function(response) {
              // Parse JSON string into object
              that.Json = JSON.parse(response);
              console.log(that.Json);
            }, path);
            return  this.Json;
          },

          loadJSON: function (callback, path) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', path, false); // Replace 'my_data' with the path to your file // Replace 'false' for "true" to asicronic method
            xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
            };
            xobj.send(null);
          }

        });
        return LogicWorldController;
    }
);
