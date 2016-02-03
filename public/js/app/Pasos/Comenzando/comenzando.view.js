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

    var ComenzandoView = Marionette.ItemView.extend({
        template: 'comenzando.view.hbs',

        events: {
            'click #siguiente': 'siguiente'
        },

        siguiente: function () {
            this.trigger('comenzando.siguiente');
        }
    });

    return ComenzandoView;

});
