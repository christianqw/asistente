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

          initialize: function (options) {
              //this.sentenciaModel = options.sModel;
              this.sentenciaCollection = new SentenciaCollection();
              this.cargar();
              //console.log(Routing.generate('blog_show', { "slug": 'my-blog-post'}));
              //this.pedidodelJson(options.frame);
              console.log('despues del cargar: ' + JSON.stringify(this.sentenciaCollection.toJSON()));
          },

          show: function () {
              this.lista_sentenciaView = new SentenciaCollectionView({collection:this.sentenciaCollection});
              App.sentencesRegion.show(this.lista_sentenciaView);
          },

          cargar: function (){
            console.log("dentro de cargar");
            var formDataInic = {};
            this.sentenciaCollection.add(new SentenciaModel(formDataInic));
            formDataInic = {nombre:"form_02"};
            this.sentenciaCollection.add(formDataInic);
          },

          addNewSentencia: function(){
            var name = "form_" + this.var_num_name;
            console.log("dentro del add New del controller Sentencia ");
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

          //---------------------
          //funciones auxiliares:
          //---------------------
          num_nameNext : function(){
          this.var_num_name = this.var_num_name + 1;
          },


          pedidodelJson: function(name){
            var nameModel = name;
            var url ='../../modelos/'+name+'/config.json';
            console.log(url);
          //  $.ajax({
          //    data:{},
          //    type: 'GET',
          //    dataType: 'JSON',
          //    url:'../../modelos/'+name+'config.json'
          //  });
          }

        });
        return SentenciaController;
    }
);
