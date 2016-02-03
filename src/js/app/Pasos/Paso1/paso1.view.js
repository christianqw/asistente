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

    var Paso1View = Marionette.ItemView.extend({
        template: 'paso1.view.hbs',

        events: {
            'click #siguiente' : 'siguiente',
            'click #atras' : "atras"
        },

        siguiente: function () {
            this.trigger('paso1.siguiente');
        },

        atras : function (){
          this.trigger('paso1.atras');
        }
    });

    return Paso1View;

});
