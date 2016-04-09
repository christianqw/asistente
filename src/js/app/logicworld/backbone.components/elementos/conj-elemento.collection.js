define(
[
    'jquery',
    'backbone',
    'localStorage',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './elemento.model'
],
function ($, Backbone, LocalStorage, Marionette, _, JQUI, JST, ElementoModel) {
    'use strict';

    var Conj_Elementos = Backbone.Collection.extend({
    // Elemento Collection
    // ---------------
      localStorage: new Backbone.LocalStorage("Conjunto-Elementos"),
      model : ElementoModel

    });

    return Conj_Elementos;
});
