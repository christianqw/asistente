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
        //evento get img...
        },

      initialize: function (options) {
        console.log("detro del inic Jsonpanel =>");
        this.jsonPanelConfig = options.jsonConfig;
        console.log("options: ");
        console.log(options.jsonConfig);
        console.log("this :");
        console.log(this.jsonPanelConfig);
        this.mapCompuesto = this.jsonPanelConfig.map;
        console.log("map :" + this.mapCompuesto);
        console.log("JsonPanelConfig...");
        
      },

      render: function () {
        this.isClosed = false;

        this.triggerMethod("before:render", this);
        this.triggerMethod("item:before:render", this);
                                   //{'descripcion': this.descripcion}
        var html = JST[this.template](this.jsonPanelConfig);

        this.$el.html(html);
        this.bindUIElements();

        this.triggerMethod("render", this);
        this.triggerMethod("item:rendered", this);

        return this;
     },

     onBeforeRender: function () {

     },

    });

    return BoardView;

});
