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

          initialize: function (options) {
              this.nameModel = options.nameModel;
              this.jsonBoardConfig = this.getJson('js/app/logicworld/modelos/'+this.nameModel+'/board-config.json');
            //this.jsonBoardConfig = JSON.parse(fs.readFileSync('js/app/logicworld/modelos/granja/board-config.json', 'utf8'));
              this.jsonPanelConfig = this.getJson('js/app/logicworld/modelos/'+this.nameModel+'/panel-config.json');
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
              console.log('############## tableroooooo #####################');
              newData.col = j.col;
              newData.fila = j.fila;
              element.editData(newData);
              console.log('<<<<<<<<<<<<<<<<<<<');
              console.log(element);
            }else {
                console.log('el tipo de board no está definido.');
              }
          },

          //-------------
          //get and load JSON
          //-------------
          getJson: function (path){
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
        return FrameController;
    }
);
