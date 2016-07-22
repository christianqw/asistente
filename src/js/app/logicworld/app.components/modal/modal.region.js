define(
[
    'jquery',
    'backbone',
    'marionette',
    'bootstrap',
    'underscore',
    'jquery-ui',
    'templateregistry',
],
function ($, Backbone, Marionette, Bootstrap, _, JQUI, JST) {
    'use strict';

    var ModalRegion = Backbone.Marionette.Region.extend({
    el: "#ModalRegion",

    constructor: function(){
      _.bindAll(this);
      Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
      this.on("view:show", this.showModal, this);
    },

    getEl: function(selector){
      var $el = $(selector);
      $el.on("hidden", this.close);
      return $el;
    },

    showModal: function(view){
      view.on("close", this.hideModal, this);
      this.$el.modal('show');
    },

    hideModal: function(){
      this.$el.modal('hide');
    }
  });
    return ModalRegion;

});
