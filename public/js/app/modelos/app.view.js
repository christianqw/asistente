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

    var AppView = Marionette.ItemView.extend({
        template: 'app.template.hbs',

        events: {
            //'click #siguiente': 'siguiente'
        },
        

        initialize:function(){

        //var boardView = new app.BoardView({model: new app.FondoModelo});
        //var list_sentenciasView = new app.List_SentenciasView();
        //var conj_elementosView = new app.Conj_ElementosView();

        //var boardView = new app.BoardView({model: new app.FondoModelo}); sin realizar el new en el inic
        },

      //  siguiente: function () {
      //      this.trigger('comenzando.siguiente');
      //  }
    });

    return AppView;

});
