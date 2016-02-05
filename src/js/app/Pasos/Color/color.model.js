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

    var ColorModel = Backbone.Model.extend({
      urlRoot: '/colors',

      validate: function(attrs, options) {
        console.log(" Mensaje --> validate in model ");
        var errors;

        if (attrs.name === '') {
          errors.push('Missing "name" field');
        }

        if (attrs.hex === '') {
          errors.push('Missing "hex" field');
        }

        return errors.length > 0 ? errors : undefined;
      }

    });

    return ColorModel;


});
