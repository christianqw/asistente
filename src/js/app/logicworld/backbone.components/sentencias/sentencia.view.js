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


    var SentenciaView = Marionette.ItemView.extend({
      // Sentencia Item View
      // --------------
      tagName:'li',
      className:"item_sentencia has-feedback",
      template:'sentencia.template.hbs',
      var_char_pos : 0,

      events:{
					'click input.input_sentencia' : 'edit',
					'click .btn-destroy-trash' : 'delete',
					'blur .input_sentencia' : 'updateOnFocusOut',
				},

      initialize: function () {
					this.listenTo(this.model, 'destroy', this.remove); //cuando se elimina actualiza
					this.listenTo(this.model, 'change', this.render);  //Por los espacion adelante... cuando se edita el modelo actualiza.
			},

      onBeforeRender: function () {
          //this.ui.paso1Class.css('background', 'green');
      },

      onShow: function(){
      //  this.$input = this.$('.input_sentencia');
      },

      edit: function(event){
        App.event_aggregator.trigger('sentencia.edit_Focus', this);
      },

			delete : function(){
				this.model.destroy();
			},

			insertSpecificCharacter : function(c){
        //Insert character at the cursor position
				console.log("dentro de la sentencian- pos: " + this.var_char_pos);
				var auxs = this.model.get('valor');
				auxs = auxs.substring(0, this.var_char_pos) + c + auxs.substring(this.var_char_pos);
				console.log(auxs);
				this.model.save({valor : auxs});
				this.var_char_pos = this.var_char_pos + 3;
        console.log('Fin update char ');
			},

      updateOnFocusOut: function(){
        var $input = this.$('input');
        this.var_char_pos = $input.prop('selectionStart');
        var value = $input.val();
        if (value){
        //Eliminado, genera conflicto con la inserciond ecaracteres
        //var trimmedValue = value.trim();//string sin espacios
          if (this.model.get("valor") !== value){
            this.model.save({ valor: value });
          }
          } else {
            if (this.model.get("valor")){
              this.model.save({valor : ""});
            }
        }
      },

      remove_editing : function(){
        this.$el.removeClass('editing');
        this.model.save({estado : "my-icon-none"});
      },

      add_editing : function(){
        this.$el.addClass('editing ');
        this.model.save({estado : "my-icon-editing"});
      }

    });

    return SentenciaView;

});
