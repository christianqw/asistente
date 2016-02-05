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
function ($, Backbone, Marionette, _, JQUI, JST, ModelColor) {
    'use strict';

    var ColorView = Marionette.ItemView.extend({
        template: 'color.template.hbs',

        events: {
        },

    });

    return ColorView;

});
