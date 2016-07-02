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

      className:'panel',
      template:'panel.template.hbs',
      //donde se inserta la vista? def dentro del controller. :D

      events: {
          'click #add_element'  : 'addNewElemento',
          'click #edit_element' : 'editFocusElement'
        },

      initialize: function (options) {
        //console.log("detro del inic Jsonpanel =>");
        this.jsonPanelConfig = options.jsonConfig;
        //console.log("options: ");
        //console.log(options.jsonConfig);
        //console.log("this :");
        //console.log(this.jsonPanelConfig);
        this.mapCompuesto = this.jsonPanelConfig.map;
        this.arrKeys = this.jsonPanelConfig.keys;
        //console.log("map :" + this.mapCompuesto);
        //console.log("JsonPanelConfig...");

      },

      render: function () {
        this.isClosed = false;

        this.triggerMethod("before:render", this);
        this.triggerMethod("item:before:render", this);

        var html = JST[this.template](this.jsonPanelConfig);

        this.$el.html(html);
        this.bindUIElements();

        this.triggerMethod("render", this);
        this.triggerMethod("item:rendered", this);

        return this;
     },

     onBeforeRender: function () {

     },

     onShow: function(){
       //defino menu de elementos como tabs
       $( "#marco_elementos" ).tabs();
     },

     addNewElemento: function(){
       this.capturarAtributos('new');
       //this.trigger('panel.addElement', d);
     },

     editFocusElement: function(){
       this.capturarAtributos('edit');
       //this.trigger('panel.editElement', d);
     },

     //-------------
     //funciones auxiliares.
     //-------------
     capturarAtributos: function(action){
      var _id_atributos = $("#marco_elementos .ui-tabs-active a").attr("href");
      var dom = $("#marco_elementos .ui-tabs-active").attr("aria-controls");
      var _Json_atributos = $(_id_atributos).serializeArray();
      var tipo = $("#marco_elementos .ui-tabs-active img").attr("id");
      var data = { "tipo" : tipo, "dominio": dom};

      $.each(_Json_atributos, function (i, obj) {
        data[obj.name] = obj.value; //cargar los atributos al data.
      });
      var keycompuesta = '';
      $.each(this.arrKeys, function (i, key){
        keycompuesta = keycompuesta + data[key];
      });

      data.img = this.mapCompuesto[keycompuesta];
      this.realImgDimension(data, action);

      //console.log('-----------------');
      //console.log(data );
      //console.log('-----------------');
      //return data;
    },

    realImgDimension: function(data, action) {
      console.log("qwertyuiopoiuytrertyuiopoiuytrertyuiopoiuytrertyuip");
      console.log(data);
      console.log(action);

      var i = new Image();
      i.src = 'js/app/logicworld/modelos/'+ data.img;
      i.onload = function() {
        console.log("_____________________");
        console.log(data);
        console.log(action);
        data.imgWidth = i.width;
        data.imgHeight = i.height;
        console.log("data dentro del realImg");
        console.log(data);
        if (action === 'new'){
          App.event_aggregator.trigger('elemento.addElement', data);
        } else if (action === 'edit'){
            App.event_aggregator.trigger('elemento.editElement', data);
        }else {
          console.log("no es ninguna de las acciones declaradas");
        }
      };

    }

    });

    return BoardView;

});
