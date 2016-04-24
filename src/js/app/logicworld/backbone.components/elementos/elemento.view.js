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
    var ENTER_KEY = 13;
    var ESC_KEY = 27;


    var ElementoView = Marionette.ItemView.extend({

      tagName:'div',
      className:'draggable elementoInsertado',
      template:'elemento.template.hbs',

      events:{
        'click img.img_elemento': 'element_focus',
        'dblclick label': 'edit_nombre',
        'keypress .nombre-edit': 'updateOnEnter',
        'keydown .nombre-edit': 'revertOnEscape',
        'blur .nombre-edit': 'close',
        'click .destroy' : 'delete',
			},

      initialize: function () {

        this.listenTo(this.model, 'destroy', this.remove); //cuando se elimina actualiza
				this.listenTo(this.model, 'change', this.individualRender);  //Por los espacion adelante... cuando se edita el modelo actualiza.
			},

      onBeforeRender: function () {
          //this.ui.paso1Class.css('background', 'green');
      },

      onShow: function(){
      //  this.$input = this.$('.input_sentencia');
      },

      element_focus: function(){
        App.event_aggregator.trigger('elemento.changeFocus', this);

      },

      render: function () {
        console.log("dentro del render ElementoView........");
        //console.log(this.model.toJSON);
        this.isClosed = false;

        this.triggerMethod("before:render", this);
        this.triggerMethod("item:before:render", this);
                                   //{'descripcion': this.descripcion}
        console.log('antes de definir el template');
        var html = JST[this.template](this.model.toJSON());
        //console.log(html);
        //console.log('aaaaaaaaaaaaaa');
        this.$el.html(html);
        this.bindUIElements();

        this.triggerMethod("render", this);
        this.triggerMethod("item:rendered", this);

        //CODIGO AGREGADO PROPIO DE LA CLASE...
        this.$input = this.$('.nombre-edit');
        var that = this;
        var newData = {'left': 0, 'top': 0 };
        this.$el.draggable({
                  stop: function( event, ui ) {
                  var newData = {'left': ui.position.left, 'top': ui.position.top };

                  App.event_aggregator.trigger('board.setPos', that, newData); //actualizamos atributos pos y valor de mascara.
                  App.event_aggregator.trigger('elemento.changeFocus', that); //al soltarlo el focus esta sobre el elemento movido.
                }
          }).css({position:"absolute", top:0, left:0});
          App.event_aggregator.trigger('board.setPos', this, newData);//actualizar Atributos.
          App.event_aggregator.trigger('elemento.changeFocus', this);//soltar -> posee el foco.
        return this;
     },

     individualRender: function () {
       this.isClosed = false;

       this.triggerMethod("before:render", this);
       this.triggerMethod("item:before:render", this);
                                  //{'descripcion': this.descripcion}
       var html = JST[this.template](this.model.toJSON());

       this.$el.html(html);
       this.bindUIElements();

       this.triggerMethod("render", this);
       this.triggerMethod("item:rendered", this);

       //CODIGO AGREGADO PROPIO DE LA CLASE...
       this.$input = this.$('.nombre-edit');
       this.$img = this.$('img_elemtn');

       return this;
     },

    remove_editingFocus : function(){
      this.$el.removeClass('editing-focus');
    },

    add_editingFocus : function(){
      this.$el.addClass('editing-focus');
    },

    editData : function(d){
      //console.log('data');
      //console.log(d);
      this.model.save(d);
      this.individualRender();
    },

    delete : function(){
      this.model.destroy();
    },

    edit_nombre: function () {
      this.$el.addClass('focus-name');
      this.$input.val(this.model.get('nombre'));
      this.$input.focus();
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function () {
      var value = this.$input.val();
      var trimmedValue = value.trim();

      if (!this.$el.hasClass('focus-name')) {
        return;
      }
      if (trimmedValue) {
        this.model.save({ nombre: trimmedValue });
        if (value !== trimmedValue) {
          this.model.trigger('change');
        }
      }
    this.$el.removeClass('focus-name');
    },

    esunico : function (name) {

    },

    updateOnEnter: function (e) {
      if (e.which === ENTER_KEY) {
        this.close();
      }
    },

    revertOnEscape: function (e) {
      if (e.which === ESC_KEY) {
        this.$el.removeClass('focus-name');
        // Also reset the hidden input back to the original value.
        this.$input.val(this.model.get('nombre'));
      }
    },

    });

    return ElementoView;

});
