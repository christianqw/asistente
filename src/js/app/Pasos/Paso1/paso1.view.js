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
            "click #help" : "functionColor",
            'change #btnIconModel' : 'mensaje1'
        },

        ui: {
          dominio: "#inputNameModel",
          logoDominio: "#btnIconModel"
        },

        initialize: function (options) {
          this.formModel = options.fModel;
          console.log("Inic :" + JSON.stringify(this.formModel));
        },

        mensaje1 : function (){
          console.log(" Modificanste el inpu file");
          var oFReader = new FileReader();
          //var asd = $('#btnIconModel').files[0]
          oFReader.readAsDataURL(document.getElementById("btnIconModel").files[0]);

          oFReader.onload = function (oFREvent) {
              $('#blah').src = oFREvent.target.result;
           };
        },

        siguiente: function () {
          console.log("antes del if");


          //  var img = $("#btnFondoModel");
          //  console.log(img);
          var element = $("#form-paso1")[0];
          console.log(element);

          var formData = new FormData(element);
          console.log("formData");
           for (var p in formData){
             console.log(p);
           }

          this.funAjax (formData);
        /*  var oFile = document.getElementById("btnFondoModel").files[0];
          console.log(img);
          var reader = new FileReader();
          $('#blah').attr('src', e.target.result);

          reader.readAsDataURL(oFile);
          */

          this.trigger('paso1.siguiente');
        },

        funAjax : function(envio) {
          alert("dentro del ajax");
          $.ajax( {
            url: 'http://localhost:8080/siguiente1',
            type: 'POST',
            data: envio,
            processData: false,
            contentType: false
          }).then(function(data, status, jqxhr) {
            console.log('terminó el ajax');
            console.log(data);
          });
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
          this.formModel.set( {dominio : this.ui.dominio.val()} );
          this.formModel.set( {logoDominio :  $("#btnIconModel")[0].files[0]  });
          console.log("seteado :" + JSON.stringify(this.formModel));
          //this.trigger("paso1.color");
        }
    });

    return Paso1View;

});
