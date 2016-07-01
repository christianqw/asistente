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

      },

      onShow: function(){
        //defino receptor donde se pueden soltar los elementos
        $(".contenedor_modelo").droppable();
      },

    });

    return BoardView;

});
