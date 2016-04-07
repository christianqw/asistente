define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
],
function ($, Backbone, Marionette, _, JQUI, JST) {
    'use strict';


    var BoardView = Marionette.ItemView.extend({

      className:'board',
      template:'board.template.hbs',
      //donde se inserta la vista? def dentro del controller. :D

      events:{
          "drop .imagen_fondo" : "alertamos"
        },

      initialize: function () {
        this.model.bind('change', this.render, this);
        /*
        _.bindAll(this, "setPosyMascara");

        this.render(); //luego de crear elemento llamamos al render (buena practica)

        this.event_aggregator.bind("event_board:setPos", this.setPosyMascara);
        */
      },

      onBeforeRender: function () {
          //this.ui.paso1Class.css('background', 'green');
      },

      onShow: function(){
      //  this.$input = this.$('.input_sentencia');
      },

      setPosyMascara:function(element, data, size){
        var z = this.model.getStringZona(data, size);
        alert("Zona: " + z );
        data.zona= z;
        element.model.stop_drop(data);
        //alert("Agregados 3 atributos");
      },

      alertamos:function (){
        alert("funcionó el evento drop");
      }

    });

    return BoardView;

});
