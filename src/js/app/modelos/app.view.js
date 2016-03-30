define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    '../backbone.components/sentencias/sentencia.controller'
],
function ($, Backbone, Marionette, _, JQUI, JST, SentenciaController) {
    'use strict';

    var AppView = Marionette.ItemView.extend({
        template: 'app.template.hbs',

        events: {
            //'click #siguiente': 'siguiente'
        },

        initialize:function(){
          var sentenciaController = new SentenciaController();
          console.log("sentencia controller declarado");
          sentenciaController.show();
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
