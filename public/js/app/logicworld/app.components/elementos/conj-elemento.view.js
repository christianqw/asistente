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
			},

      initialize: function () {
        console.log("-> INIC Elementos.Collection.VIEW");
			},

      onBeforeRender: function () {},

      onShow: function(){}

    });

    return Conj_ElementosView;

});
