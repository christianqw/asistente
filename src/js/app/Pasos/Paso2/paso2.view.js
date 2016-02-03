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
        template: 'paso2.view.hbs',

        events: {
            'click #siguiente': 'siguiente',
            'click #anterior' : 'anterior'
        },

        ui: {
            //'paso2Class': '.paso1'
        },
        // 
        // initialize: function (options) {
        //   //  this.descripcion = options.descripcion;
        // },

        // render: function () {
        //     this.isClosed = false;
        //
        //     this.triggerMethod("before:render", this);
        //     this.triggerMethod("item:before:render", this);
        //                                 //{'descripcion': this.descripcion}
        //     var html = JST[this.template]();
        //
        //     this.$el.html(html);
        //     this.bindUIElements();
        //
        //     this.triggerMethod("render", this);
        //     this.triggerMethod("item:rendered", this);
        //
        //     return this;
        // },

        onShow: function () {
            //this.ui.paso1Class.css('background', 'green');
        },

        siguiente: function () {
            this.trigger('paso2.siguiente');
        },

        anterior: function (){
            this.trigger('paso2.anterior');
        }
    });

    return Paso1View;

});
