define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './sentencia.view'
],
function ($, Backbone, Marionette, _, JQUI, JST, SentenciaView) {
    'use strict';


    var List_SentenciasView = Marionette.CollectionView.extend({
      // Sentencia collection View
      // --------------

      itemView : SentenciaView,

      //insertamos los elementos en:
      //sentenciaRegio.  '#panel_sentencias'

      events:{},

      initialize: function () {},

    });

    return List_SentenciasView;

});
