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

        var FrameController = Marionette.Controller.extend({

          initialize: function () {
              this.jsonBoardConfig = this.generateJson();
              this.jsonPanelConfig = this.generateJson2();

              this.boardModel = new BoardModel(this.jsonBoardConfig.boardModel, {'map' : this.jsonBoardConfig.boardMap});

              console.log("bordModel");
              //console.log(this.boardModel);
          },

          show: function () {
            this.boardView = new BoardView({model:this.boardModel});
            App.boardRegion.show(this.boardView);


            this.panelView = new PanelView({'jsonConfig' : this.jsonPanelConfig});
            App.panelRegion.show(this.panelView);

          //  this.listenTo(this.panelView, 'panel.addElement', this.addNewElemento);
            //this.listenTo(this.panelView, 'panel.editElement', this.editElemento);
            this.listenTo(App.event_aggregator, 'board.setPos', this.setPosyMascara);
          },

/*
          addNewElemento: function(data){
            console.log('dentro del controller. add --->');
            App.event_aggregator.trigger('elemento.addElement', data);
          },

          editElemento: function(data){
            console.log('dentro del controller. edit --->');
            App.event_aggregator.trigger('elemento.editElement', data);
          },
*/
          setPosyMascara:function(element, newData){
            console.log('GET ATRIBUTO BOARD');
            if (this.boardModel.get('tipo') === 'zona') {
              console.log(element.model.get('imgWidth'));
              //agregar la zona
              var z =  this.boardModel.getStringZona(newData, element.model.get('imgHeight'), element.model.get('imgWidth'));
              newData.zona = z;
              element.editData(newData);
              console.log('<<<<<<<<<<<<<<<<<<<');
              console.log(element);
          }else if (this.boardModel.get('tipo') === 'tablero'){
              var j = this.boardModel.getFilCol(newData, element.model.get('imgHeight'), element.model.get('imgWidth'));
              console.log('############## tableroooooo #####################333333');
              newData.col = j.col;
              newData.fil = j.fil;
              element.editData(newData);
              console.log('<<<<<<<<<<<<<<<<<<<');
              console.log(element);
            }else {
                console.log('el tipo de board no está definido.');
              }
          },

          //-------------
          //emulando JSON
          //-------------
          generateJson: function (){
            var Json ={
              "boardModel" : {"img": "js/app/logicworld/modelos/granja/images/granja.png",
                              "img_mascara":"js/app/logicworld/modelos/granja/images/mascara.png",
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
              "keys" : ["tipo", "att1"]
            };
            return  Json;
          }

        });
        return FrameController;
    }
);
