define(
[
    'jquery',
    'backbone',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry'
],
function ($, Backbone, Marionette, _, JQUI, JST) {
    'use strict';

    var Paso1View = Marionette.ItemView.extend({
        template: 'paso1.view.hbs',

        events: {
            'click #siguiente' : 'siguiente',
            'click #anterior' : "anterior",
            "click #help" : "functionColor"
        },

        siguiente: function () {
          console.log("antes del if");
          //  var img = $("#btnFondoModel");
          //  console.log(img);
          var oFile = document.getElementById("btnFondoModel").files[0];
          console.log(img);
          var reader = new FileReader();
          $('#blah').attr('src', e.target.result);

          reader.readAsDataURL(oFile);
          this.trigger('paso1.siguiente');
        },

      /*  readURL: function(){
          var img = $("#btnFondoModel");
          if (img.files && img.files[0]) {
              var reader = new FileReader();
              $('#blah').attr('src', e.target.result);
              reader.readAsDataURL(img.files[0]);
          }
        },
*/
        anterior : function (){
          this.trigger('paso1.anterior');
        },

        mensaje : function(e){
          console.log("dentro de mensaje");
          console.log(e);
        },

        functionColor : function(){
          this.trigger("paso1.color");
        }
    });

    return Paso1View;

});
