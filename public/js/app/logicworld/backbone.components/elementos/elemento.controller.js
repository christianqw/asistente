define (
    [
        'jquery',
        'underscore',
        'marionette',
        'jquery-ui',
        './elemento.model',
        './elemento.view',
        './conj-elemento.collection',
        './conj-elemento.view'
    ],
    function ($, _, Marionette, JQUI, ElementoModel, ElementoView, ConjuntoModel, ConjuntoView) {
        'use strict';

        var ElementoController = Marionette.Controller.extend({


          var_num_name: 1, //var cont, utilizada para definir el nombre como unico.
          var_elem_focus: '', //modelo que posee el focus, o almacenamos para no pedirlo cada vez que se lo utiliza.


          initialize: function () {
              this.elementoCollection = new ConjuntoModel();
              console.log('dentro del inic vacio');
              this.listenTo(App.event_aggregator, 'elemento.addElement', this.addNew);
              this.listenTo(App.event_aggregator, 'elemento.editElement', this.editFocus);
          },

          show: function () {

            this.conj_elementoView = new ConjuntoView({collection:this.elementoCollection});
            console.log("estamos agregando a una region que está abajo....");
            App.piecesRegion.show(this.conj_elementoView);

            console.log('aca terminó el show');
          },

          addNew: function(data) {
            /* var privada con contador - id del name
            cargar tipo y atributos del formulario seleccionados. */
            var name = "e" + this.var_num_name;
            data.nombre = name;
            this.num_nameNext();
            var e = new ElementoModel(data);
            console.log(e);
            this.elementoCollection.add(e);
          },

          editFocus: function(data){
            console.log("dentro de editFocusElement");
            if (this.var_elem_focus){
              this.var_elem_focus.editData(data);
            }else {
              console.log("no se posee un elemento en focus");
            }
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

          //---------------
          //
          //---------------
          num_nameNext: function(){
          this.var_num_name = this.var_num_name + 1;
          }

        });
        return ElementoController;
    }
  );
