define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry'
],
function ($, Backbone, Marionette, _, JQUI, JST) {
    'use strict';

    var DataModel = Backbone.Model.extend({
      urlRoot: '/dataForm'

      //agregan funciones de validacion. 

    });

    return DataModel;


});
