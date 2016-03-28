define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './color.model'
],
function ($, Backbone, Marionette, _, JQUI, JST, ColorModel) {
    'use strict';

    var ColorCollection = Backbone.Collection.extend({
      urlRoot: '/colors',

      model : ColorModel

    });

    return ColorCollection;


});
