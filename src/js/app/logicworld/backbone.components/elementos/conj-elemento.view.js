define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './elemento.view'
],
function ($, Backbone, Marionette, _, JQUI, JST, ElementoView) {
    'use strict';


    var Conj_ElementosView = Marionette.CollectionView.extend({

      itemView : ElementoView,

      //insertamos los elementos en:
      // dentro de "piecesRegion"

      events:{
          "click #asd" :"mensaje2",
			},

      initialize: function () {
        console.log("-> INIC Elementos.Collection.VIEW");
			},

      onBeforeRender: function () {},

      onShow: function(){},

      mensaje2: function(){
      alert("Dentro de Colection");
      _.each(app.elemento_collention.models,
      function(item){ //funcion que se le aplica a cada elemento
      console.log(item);
      }, this);
      }

    });

    return Conj_ElementosView;

});
