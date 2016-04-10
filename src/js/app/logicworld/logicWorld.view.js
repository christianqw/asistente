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

    var LogicWorldView = Marionette.ItemView.extend({
        template: 'logicWorld.template.hbs',

        events: {
            //'click #siguiente': 'siguiente'
            "click #id_btn_add_sentencia" :"addNewInput",
            "click #id_btn_clear" : "clearAllInputs",
        },


        initialize:function(){

        //var boardView = new app.BoardView({model: new app.FondoModelo});
        //var list_sentenciasView = new app.List_SentenciasView();
        //var conj_elementosView = new app.Conj_ElementosView();

        //var boardView = new app.BoardView({model: new app.FondoModelo}); sin realizar el new en el inic
        },

        addNewInput: function(){
          this.trigger('logic.addSentencia');
        },

        clearAllInputs: function(){
					this.trigger('logic.clearAll');
				},

    });

    return LogicWorldView;

});
