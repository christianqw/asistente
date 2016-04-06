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

    var BoardModel = Backbone.Model.extend({
      //urlRoot: '/sentencia',
      localStorage: new Store("Board"),

      nitialize:function(){
        console.log("inic Board");
      }
      // Atributos por defecto de una Sentencia
      // de faltar un campo, se está asumiendo que simepre se asigna dicho atributo al crearlo

    });

    return BoardModel;


});
