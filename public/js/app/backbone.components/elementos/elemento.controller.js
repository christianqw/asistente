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

          initialize: function () {
              this.elementoModel = new ElementoModel({"nombre": "patito"});
          },

          show: function () {
            this.elementoView = new ElementoView({model:this.elementoModel});
            console.log("estamos agregando a una region que ya tiene algo mostrando....");
            App.elementsRegion.show(this.elementoView);

            console.log('aca terminó el show');
          }

        });
        return ElementoController;
    }
  );
