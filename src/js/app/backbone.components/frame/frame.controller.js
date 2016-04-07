define (
    [
        'jquery',
        'underscore',
        'marionette',
        './board.model',
        './board.view'
    ],
    function ($, _, Marionette, BoardModel, BoardView) {
        'use strict';

        var BoardController = Marionette.Controller.extend({

          initialize: function () {
              var JsonBoardConfig = this.generateJson();
              console.log(JsonBoardConfig);
              console.log("generamos modelo: ");
              this.boardModel = new BoardModel(JsonBoardConfig.boardModel, JsonBoardConfig.boardMap);
              console.log('nuevo modelo board');
              console.log(this.boardModel);
          },

          show: function () {
            console.log('SHOW BOARD VIEW');
            this.boardView = new BoardView({model:this.boardModel});
            console.log("view generada... ");
            App.boardRegion.show(this.boardView);
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
          }

        });
        return BoardController;
    }
);
