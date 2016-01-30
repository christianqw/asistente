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
            'click #siguiente': 'siguiente'
        },

        ui: {
            'paso1Class': '.paso1'
        },

        initialize: function (options) {
            this.descripcion = options.descripcion;
        },

        render: function () {
            this.isClosed = false;

            this.triggerMethod("before:render", this);
            this.triggerMethod("item:before:render", this);

            var html = JST[this.template]({'descripcion': this.descripcion});

            this.$el.html(html);
            this.bindUIElements();

            this.triggerMethod("render", this);
            this.triggerMethod("item:rendered", this);

            return this;
        },

        onShow: function () {
            this.ui.paso1Class.css('background', 'green');
        },

        siguiente: function () {
            this.trigger('paso1.siguiente');
        }
    });

    return Paso1View;

});
