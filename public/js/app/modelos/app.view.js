define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
],
function ($, Backbone, Marionette, _, JQUI, JST) {
    'use strict';

    var AppView = Marionette.ItemView.extend({
        template: 'app.template.hbs',

        events: {
            //'click #siguiente': 'siguiente'
        },

      //  siguiente: function () {
      //      this.trigger('comenzando.siguiente');
      //  }
    });

    return AppView;

});
