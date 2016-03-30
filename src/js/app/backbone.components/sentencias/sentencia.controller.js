define (
    [
        'jquery',
        'underscore',
        'marionette',
        './sentencia.view',
        './sentencia.model'
    ],
    function ($, _, Marionette, SentenciaView, SentenciaModel) {
        'use strict';

        var SentenciaController = Marionette.Controller.extend({

          initialize: function (options) {
              //this.sentenciaModel = options.sModel;
              this.sentenciaModel = new SentenciaModel({});
          },

          show: function () {
              this.sentenciaView = new SentenciaView({model:this.sentenciaModel});
              App.sentencesRegion.show(this.sentenciaView);

          }

        });
        return SentenciaController;
    }
);
