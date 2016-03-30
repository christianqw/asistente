efine (
    [
        'jquery',
        'underscore',
        'marionette',
        './app.view'
    ],
    function ($, _, Marionette, AppView) {
        'use strict';

        var AppController = Marionette.Controller.extend({

          initialize: function (options) {
              this.router = options.router;
              this.formModel = options.fModel;
          },

          show: function () {
              this.appView = new AppView();
              App.contentRegion.show(this.appView);

              //listenTo go to home. in logo
              //this.listenTo(this.comenzandoView, 'comenzando.siguiente', this.showSiguiente);
          }

          /*showSiguiente: function () {
            this.router.navigate('paso1', {trigger: true});
          }*/

        });
        return AppController;
    }
);
