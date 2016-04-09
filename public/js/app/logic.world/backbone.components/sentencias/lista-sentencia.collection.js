define(
[
    'jquery',
    'backbone',
    'localStorage',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './sentencia.model'
],
function ($, Backbone, LocalStorage, Marionette, _, JQUI, JST, SentenciaModel) {
    'use strict';

    var List_Sentencias = Backbone.Collection.extend({
    // Sentencias Collection
    // ---------------
      localStorage: new Backbone.LocalStorage("Lista-Sentencias"),
      model : SentenciaModel

    });


    // Create our global collection of **Sentencias**.
//	app.sentencia_collention = new List_Sentencias();

    return List_Sentencias;


});
