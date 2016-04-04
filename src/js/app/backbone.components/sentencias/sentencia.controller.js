define (
    [
        'jquery',
        'underscore',
        'marionette',
        './sentencia.view',
        './sentencia.model',
        './lista-sentencia.collection',
        './lista-sentencia.view'
    ],
    function ($, _, Marionette, SentenciaView, SentenciaModel, SentenciaCollection, SentenciaCollectionView) {
        'use strict';

        var SentenciaController = Marionette.Controller.extend({

          initialize: function (options) {
              //this.sentenciaModel = options.sModel;
              this.sentenciaCollection = new SentenciaCollection({});
              this.cargar();
              
          },

          show: function () {
              console.log("dentro de controler sentencia show");
              this.lista_sentenciaView = new SentenciaCollectionView({collection:this.sentenciaCollection});
              console.log("despues del generar la vista de collection");
              console.log("sentencia Region" + App.sentencesRegion);
              App.sentencesRegion.show(this.lista_sentenciaView);
          },

          cargar: function (){
            var formDataInic = {};
            this.sentenciaCollection.add(new SentenciaModel(formDataInic));
            formDataInic = {nombre:"form_02"};
            this.sentenciaCollection.add(formDataInic);
          }

        });
        return SentenciaController;
    }
);
