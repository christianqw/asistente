define (
    [
        'jquery',
        'underscore',
        'marionette',
        './paso1.view'
    ],
    function ($, _, Marionette, Paso1View) {
        'use strict';

        var Paso1Controller = Marionette.Controller.extend({

          initialize: function (options) {
              this.router = options.router;
              this.formModel = options.fModel;
          },

            show: function () {
                this.paso1View = new Paso1View({'fModel' : this.formModel});
                App.contentRegion.show(this.paso1View);

                this.listenTo(this.paso1View, 'paso1.siguiente', this.showSiguiente);
                this.listenTo(this.paso1View, 'paso1.anterior', this.showAnterior);
                this.listenTo(this.paso1View, "paso1.color", this.showColor);
            },

            showSiguiente: function () {
                alert("apreto siguiente...");
                //this.router.navigate('paso2', {trigger: true});
            },

            showAnterior: function () {
                this.router.navigate('comenzando', {trigger: true});
            },

            showColor : function (){
              this.router.navigate('color', {trigger: true});
            }

        });

        return Paso1Controller;
    }
);
