define(
[
    'jquery',
    'backbone',
    'localStorage',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry'
],
function ($, Backbone, LocalStorage, Marionette, _, JQUI, JST) {
    'use strict';

    // Sentencia Model
    // ----------

    // Nuestro moledo basico de **Sentencia** posee los atributos: 'nombre', 'valor', 'estado', 'mensaje'

    var SentenciaModel = Backbone.Model.extend({
      //urlRoot: '/sentencia',
      localStorage: new Store("Modelos"),

      // Atributos por defecto de una Sentencia
      // de faltar un campo, se está asumiendo que simepre se asigna dicho atributo al crearlo
      defaults:{
          nombre:"form_X",
          valor:"",
          img:"js/app/modelos/granja/images/iconChancho.png",
          estado : "my-icon-none", //blanco - none
          mensaje:""
      },

    });

    return SentenciaModel;


});
