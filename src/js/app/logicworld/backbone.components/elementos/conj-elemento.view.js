define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
    './elemento.view'
],
function ($, Backbone, Marionette, _, JQUI, JST, ElementoView) {
    'use strict';


    var Conj_ElementosView = Marionette.CollectionView.extend({

      itemView : ElementoView,

      //insertamos los elementos en:
      // dentro de "piecesRegion"

      var_num_name: 1,
      var_elem_focus: '',

      events:{
          "click #asd" :"mensaje2",
			},

      initialize: function () {
        console.log("-> INIC Elementos.Collection.VIEW");
			},

      onBeforeRender: function () {
          //this.ui.paso1Class.css('background', 'green');
      },

      onShow: function(){
      //  this.$input = this.$('.input_sentencia');
      },

      num_nameNext: function(){
      this.var_num_name = this.var_num_name + 1;
      },

      editFocusElement: function(data){
        console.log("dentro de editFocusElement");
        if (this.var_elem_focus){
          this.var_elem_focus.editData(data);
        }else {
          console.log("no se posee un elemento en focus");
        }
      },

      addNewElemento: function( elem ){
      //alert("agregar elemento  - conj ");
      /*
      var privada con contador - id del name
      cargar animal y atributos del formulario seleccionados.
      */
      var name = "e" + this.var_num_name;
      elem.nombre = name;
      //console.log("nombre: " + name);
      //console.log(elem);
      this.num_nameNext();
      var e = new app.Elemento(elem);
      //		e.asd(e.getRuta(e.getClave()));
      //		console.log("usando asd");
      console.log(e);
      /*
      var e = new app.Elemento(elem);
      e.save_ruta(e.getClave);
      console.log( "Elemento generado dentro del conjunto : ");
      console.log(e);
      */
      app.elemento_collention.add(e);

      },

      changeFocusElement: function( that ){
      if( (this.var_elem_focus !== that)){
      if (this.var_elem_focus){
      this.var_elem_focus.remove_editingFocus();
      }
      that.add_editingFocus();
      this.var_elem_focus = that;
      }
      },

      mensaje2: function(){
      alert("Dentro de Colection");
      _.each(app.elemento_collention.models,
      function(item){ //funcion que se le aplica a cada elemento
      console.log(item);
      }, this);
      }

    });

    return Conj_ElementosView;

});
