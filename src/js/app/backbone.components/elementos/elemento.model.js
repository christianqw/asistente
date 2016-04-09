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

    var ElementoModel = Backbone.Model.extend({
      //urlRoot: '/sentencia',
      localStorage: new Store("Modelos"),

      // Atributos por defecto de una Sentencia
      // de faltar un campo, se está asumiendo que simepre se asigna dicho atributo al crearlo
      defaults:{
        nombre:'fff',
        dominio:'ddd',
        tipo:'',
        zona:'asdfgh',
        img: 'js/app/modelos/granja/images/vacaDormido.png',

        left: 0,
        top: 0,
      },

      //function editing position and Zona
      stop_drop: function ( data ) {
        this.save({
          left: data.left,
          top: data.top,
          zona: data.zona
        });
        console.log("cambio de lugar : ");
        console.log(this);
      }

    });

    return ElementoModel;


});
