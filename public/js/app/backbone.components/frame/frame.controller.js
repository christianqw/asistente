define (
    [
        'jquery',
        'underscore',
        'marionette',
        'jquery-ui',
        './board.model',
        './board.view',
        './panel.view'
    ],
    function ($, _, Marionette, JQUI, BoardModel, BoardView, PanelView) {
        'use strict';

        var BoardController = Marionette.Controller.extend({

          initialize: function () {
              var JsonBoardConfig = this.generateJson();
              this.jsonPanelConfig = this.generateJson2();

              this.boardModel = new BoardModel(JsonBoardConfig.boardModel, JsonBoardConfig.boardMap);
          },

          show: function () {
            this.boardView = new BoardView({model:this.boardModel});
            App.boardRegion.show(this.boardView);

            this.panelView = new PanelView({'jsonConfig' : this.jsonPanelConfig});
            App.panelRegion.show(this.panelView);

            console.log('aca tendria que andar JQUI');
            //defino receptor donde se pueden soltar los elementos
            //$(".contenedor_modelo").droppable();
            //defino menu de elementos como tabs
            $( "#marco_elementos" ).tabs();

          },

          cargar: function (){
            var formDataInic = {};
            this.sentenciaCollection.add(new SentenciaModel(formDataInic));
            formDataInic = {nombre:"form_02"};
            this.sentenciaCollection.add(formDataInic);
          },

          //emulando JSON
          generateJson: function (){
            var Json ={
              "boardModel" : {"img": "js/app/modelos/granja/images/granja.png",
                              "img_mascara":"js/app/modelos/granja/images/mascara.png",
                              "tipo": "zona"

              },
              "boardMap" : {"R63G72B204" : "aire",
                            "R34G177B76" : "bosque",
                            "R255G242B0" : "granero",
                            "R255G174B201" : "pasto",
                            "R237G28B36": "corral"
              }
            };
            return  Json;
          },

          generateJson2: function (){
            var Json ={
              "elements":[
                  {"ref":"tabs-1", "id":"tipo1", "img":"granja/images/chancho.png"},
                  {"ref":"tabs-1", "id":"tipo2", "img":"granja/images/gallina.png"},
                  {"ref":"tabs-1", "id":"tipo3", "img":"granja/images/pato.png"},
                  {"ref":"tabs-1", "id":"tipo4", "img":"granja/images/vaca.png"}
              ],
              "tabs":[
                {"id":"tabs-1","att" : [
                                  {"name":"att1", "op":[
                                          {"estado":"Despierto"},
                                          {"estado":"Dormido"}
                                          ]}
                ]}
              ],
              "map" : {
                "tipo1Despierto":"granja/images/chancho.png",
                "tipo2Despierto":"granja/images/gallina.png",
                "tipo3Despierto":"granja/images/pato.png",
                "tipo4Despierto":"granja/images/vaca.png",
                "tipo1Dormido":"granja/images/chanchoDormido.png",
                "tipo2Dormido":"granja/images/gallinaDormido.png",
                "tipo3Dormido":"granja/images/patoDormido.png",
                "tipo4Dormido":"granja/images/vacaDormido.png"
              },
            };
            return  Json;
          }

        });
        return BoardController;
    }
);
