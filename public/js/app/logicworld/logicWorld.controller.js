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

          generateListaElementos: function(arrJson){
            var lista = [];
            _.each(arrJson, function(item){
              var eAux = {'nombre': item.nombre, 'left' : item.left, 'top' : item.top};
              delete item.nombre; delete item.left; delete item.top;
              //ademas quitamos ls que no utilizamos en la lógica
              delete item.img; delete item.imgWidth; delete item.imgHeight;
              eAux.atributos = item;
              lista.push(eAux);
            });
            console.log('lista >>>>>');
            return lista;
          },

          verificar: function(){
            console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            var listaSentencias = this.sentenciaController.getCollection().toJSON();
            var listaElementos = this.generateListaElementos(this.elementoController.getCollection().toJSON());
            var JsonConfig = JSON.stringify(this.getJsonConfigEstructura());
            var nameModel = this.nameModel;
            /*var Json = [{'nombre':'n1', 'x' : 10, 'y':10, 'atributos':{
                                                                            'topo':'tipo1', 'size' : '20'}
                                        },
                                        {'nombre':'n2', 'x' : 20, 'y':20, 'atributos':{
                                                                            'topo':'tipo2', 'ancho' : '25', 'otro':'otro-valor'}
                                        }
                                    ];*/
            //console.log('collection-Elementos.toJSON(): ',   this.elementoController.getCollection().toJSON());
            //console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(this.elementoController.getCollection().toJSON()));
            //console.log('-------------------');
            console.log('nameModel: ',   nameModel);
            console.log('collection-Elementos.toJSON(): ',   JSON.stringify( listaElementos));
            console.log('JSON.stringify(collection.toJSON()): ', JSON.stringify(listaSentencias));
            console.log('JSON.stringify(collection.toJSON()): ', JsonConfig);
            console.log('XXXXXXXXXXXXXXXXXXXX..........XXXXXXXXXXXXXXXXXXXXXX');
            //beggin AJAX
            $.ajax({
            type: 'post',
            headers: { 'content-type': 'application/json' },
            data:JSON.stringify({
                    "nameIdFrame" : nameModel,
                    "listaElementos": listaElementos,
                    "listaSentencias": listaSentencias,
                    "jsonConfig" : JsonConfig
                  }),
            url: "http://localhost:8080/actionVerificar",
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
          },

          //-------------
          //emulando JSON
          //-------------
          getJsonConfigEstructura: function (){
            var Json ={
              "Predicado":[
                {"NombrePred":"Despierto",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"att2", "ParametroD":0, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"Dormido",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"att2", "ParametroD":1, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"EsChancho",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"tipo", "ParametroD":0, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"EsGallina",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"tipo", "ParametroD":1, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"EsPato",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"tipo", "ParametroD":2, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"EsVaca",
                  "CantParam":1,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"tipo", "ParametroD":3, "AtributoD":"_constante"}
                          ]},
                {"NombrePred":"MismoLugar",
                  "CantParam":2,
                  "Componentes" :[{"Clase":"IGUAL", "ParametroI":0, "AtributoI":"zona", "ParametroD":1, "AtributoD":"zona"}
                          ]}
                      ],
                "Funcion":[
                {"Rename":"ELMASLEJANO","Class":"ElMasLejano"},
                {"Rename":"ELMASCERANO","Class":"ElMasCercano"}
                ],

                "Elemento":[{"Dominio":"animal",
                    "ListAtributos":[{"Atributo":"tipo","Opciones":["tipo1","tipo2","tipo3", "tipo4"]},
                          {"Atributo":"att1","Opciones":["chico","mediano","grande"]},
                          {"Atributo":"att2","Opciones":["despierto","dormido"]},
                          {"Atributo":"zona","Opciones":["bosque","cielo","corral"]}]
                      }]
              };
            return  Json;
          }

        });
        return LogicWorldController;
    }
);
