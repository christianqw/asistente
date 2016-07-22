define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry',
],
function ($, Backbone, Marionette, _, JQUI, JST) {
    'use strict';

    var ModalView = Marionette.ItemView.extend({

      template :'modal.template.hbs',

      events:{
        'click .btn' : 'delete'
      },

      initialize: function (options) {
        this.PanelConfig = options.jsonConfig;

        Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
          if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters");
          if( lvalue!=rvalue ) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
      },

      render: function () {
        this.isClosed = false;

        this.triggerMethod("before:render", this);
        this.triggerMethod("item:before:render", this);

        var html = JST[this.template](this.PanelConfig);

        this.$el.html(html);
        this.bindUIElements();

        this.triggerMethod("render", this);
        this.triggerMethod("item:rendered", this);

        return this;
      },

      delete : function(){
        console.log("clil en btn");
      }

    });

    return ModalView;

});
