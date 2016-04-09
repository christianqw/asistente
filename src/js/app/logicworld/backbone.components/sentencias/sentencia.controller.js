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
