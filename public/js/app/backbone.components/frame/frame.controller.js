define (
    [
        'jquery',
        'underscore',
        'marionette',
        './board.model',
        './board.view'
    ],
    function ($, _, Marionette, BoardModel, BoardView) {
        'use strict';

        var BoardController = Marionette.Controller.extend({

          initialize: function (options) {
              this.boardModel = new BoardModel();
              console.log('nuevo modelo board');
          },

          show: function () {
              this.boardView = new BoardView({model:this.boardModel});
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
