define (
    [
        'jquery',
        'underscore',
        'marionette',
        './sentencia.view',
        './sentencia.model',
        './lista-sentencia.collection',
        './lista-sentencia.view',
    ],
    function ($, _, Marionette, SentenciaView, SentenciaModel, SentenciaCollection, SentenciaCollectionView) {
        'use strict';

        var SentenciaController = Marionette.Controller.extend({

          var_num_name: 3, //var cont, utilizada para definir el nombre como unico.
          var_focus:'', //modelo que posee el focus, o almacenamos para no pedirlo cada vez que se lo utiliza.

          initialize: function (options) {
              this.sentenciaCollection = new SentenciaCollection();
              this.cargar();//agregamos 2 elementos para comenzar a trabajar.

              this.listenTo(App.event_aggregator, 'sentencia.edit_Focus', this.changeFocusSentencia);

          },

          show: function () {
              this.lista_sentenciaView = new SentenciaCollectionView({collection:this.sentenciaCollection});
              App.sentencesRegion.show(this.lista_sentenciaView);
          },

          addNewSentencia: function(){
            var name = "form_" + this.var_num_name;
            //console.log("dentro del add New del controller Sentencia ");
            this.num_nameNext();
              this.sentenciaCollection.add(new SentenciaModel({nombre: name}));
          },

          clearAllInputs: function(){
            var that = this;
            //iteramos sobre toda la coleccion, undercode function
            _.each(this.sentenciaCollection.models,
              function(item){ //funcion que se le aplica a cada elemento
                console.log('PODRIA MODULARIZARLO Y LLAMAR A UNA funcion PROPIA DEL MODELO -_-');
                item.save({valor : ''});
              }, this);
          },

          insertCharInFocus: function(char){
            if (this.var_focus){
              this.var_focus.insertSpecificCharacter(char);
            }
          },

          changeFocusSentencia : function( that ){
            if( this.var_focus !== that){
              if (this.var_focus){
                this.var_focus.remove_editing();
              }
              that.add_editing();
              this.var_focus = that;
            }
          },

          //---------------------
          //funciones auxiliares:
          //---------------------
          num_nameNext : function(){
          this.var_num_name = this.var_num_name + 1;
          },

          cargar: function (){
            var formDataInic = {nombre:"form_1"};
            this.sentenciaCollection.add(new SentenciaModel(formDataInic));
            formDataInic = {nombre:"form_2"};
            this.sentenciaCollection.add(formDataInic);
          }

        });
        return SentenciaController;
    }
);
