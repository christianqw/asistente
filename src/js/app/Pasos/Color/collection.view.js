define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './color.view'
],
function ($, Backbone, Marionette, _, JQUI, JST, ColorView) {
    'use strict';

    var CollectionView = Backbone.CollectionView.extend({
      childView : color.view,

    });

    return CollectionView;

});
