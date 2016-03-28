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

    var CollectionView = Marionette.ItemView.extend({
        

        className: 'color-item',

        events: {
        },

    });

    return CollectionView;

});
