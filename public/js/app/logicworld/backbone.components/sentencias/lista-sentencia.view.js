define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './sentencia.view'
],
function ($, Backbone, Marionette, _, JQUI, JST, SentenciaView) {
    'use strict';


    var List_SentenciasView = Marionette.CollectionView.extend({
      // Sentencia Item View
      // --------------

      itemView : SentenciaView,

      //insertamos los elementos en:
      //

      var_num_name: 3, /*LO PASA A TENER EL CONTROLLER*/
      var_focus:'',

      events:{

					'click input.input_sentencia' : 'edit',
					'click .btn-destroy-trash' : 'delete',
					'blur .input_sentencia' : 'updateOnFocusOut',
				},

      initialize: function () {
        console.log("dentro del inic de la colletionView");
        _.bindAll(this, "changeFocusSentencia");

        App.event_aggregator.bind("event_formulario:edit_Focus", this.changeFocusSentencia);
			},

      onBeforeRender: function () {
          //this.ui.paso1Class.css('background', 'green');
      },

      onShow: function(){
      //  this.$input = this.$('.input_sentencia');
      },

      changeFocusSentencia : function( that ){
        if( this.var_focus !== that){
          if (this.var_focus){
            this.var_focus.remove_editing();
          }
          //alert(" changeFocusSentencia dentro de la lista");
          that.add_editing();
          this.var_focus = that;
          //alert(this.var_focus.model.get('nombre'));
        }
      },

      addCharInSentencia : function( char ){
        if (this.var_focus){
          this.var_focus.updateOnClikBtnChar(char);
        }
      }


    });

    return List_SentenciasView;

});
