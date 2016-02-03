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

    var Paso3View = Marionette.ItemView.extend({
        template: 'paso3.view.hbs',

        events: {
            'click #siguiente': 'siguiente',
            'click #anterior' : 'anterior'
        },

        siguiente: function () {
            this.trigger('paso3.siguiente');
        },

        anterior: function (){
            this.trigger('paso3.anterior');
        }
    });

    return Paso3View;

});
