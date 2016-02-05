define (
    [
        'jquery',
        'underscore',
        'marionette',
        './color.model',
        './color.view'
    ],
    function ($, _, Marionette, ColorModel, ColorView) {
        'use strict';

        var ColorController = Marionette.Controller.extend({

          initialize: function (options) {
            console.log(" Mensaje --> inic controller ");
              this.router = options.router;
          },

          show: function () {
              console.log(" Mensaje --> model:  ");
              this.colorModel = new ColorModel({"name": "ForestGreen",
                                                "hex": "#228B22"});
              console.log(" Mensaje --> modelo creado ");
              this.colorView = new ColorView( {model : this.colorModel});
              console.log(" Mensaje --> vista creada ");

              App.contentRegion.show(this.colorView);
          },

        });

        return ColorController;
    }
);
