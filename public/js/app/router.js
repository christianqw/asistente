define(
[
    'jquery',
    'backbone',
    './data.model',
    './Pasos/Comenzando/comenzando.controller',
    './modelos/appController.controller',
    './backbone.components/sentencias/sentencia.controller',
    './backbone.components/frame/frame.controller'

],
function ($, Backbone, FormModel, ComenzandoController, AppController, SentenciaController, FrameController) {
        'use strict';

        var formModel = new FormModel ();

        var Router = Backbone.Router.extend({

            dataLocal : formModel,

            routes: {
              //'modelos/:nameModel' : 'showModelo', no funca
                ':nameModel' : 'showModelo',
                'comenzando' : 'showComenzandoAsistente',
                'form' : "showForm"
            },

            /**
            * [initialize description]
            * @return {[type]} [description]
            */
            initialize: function () {
              console.log("version de mensaje numero 20");
              //App.event_aggregator.trigger('some:event');
              Backbone.history.start();
            },

            showModelo : function (nameModel){
              console.log("dentro de <show modelo>" + nameModel);
              //console.log("fragmento = " + Backbone.history);
              //App.event_aggregator.trigger('some:event2', 2);
              var appController = new AppController({ router: this, fModel: formModel});
              //acá póseo el nombre del modelo por el parametro.
              appController.show();
              var sentenciaController = new SentenciaController({frame:nameModel});
              sentenciaController.show();
              var frameController = new FrameController();
              frameController.show();



//INTENTOS DE LEVANTAR EL JSON CONFIG LOCAL....
              //var json = require(['test1.json'], function(data){
              //  console.log(data);
              //});

/*
              console.log( "JSON File:" );
              require(["./test1.json"], function(data){
                  console.log(data);
                });

              console.log( "JS File:" );
              require(['test2'], function (foo) {
                  console.log( foo );
              });


*/
              /*console.log(json);
              var url = './modelos/'+nameModel+'/board-config.json';

              var json2 = require(url);
              console.log(json2);
              */
              /*
              var data;
              var g = $.getJSON('/js/app/test1.json', function(d){
                console.log(d);
                console.log("destro de get JSon");
                data = d;
              });
              console.log(data);*/

            /*  $.ajax({
                type: 'GET',
                url: 'js/app/test1.json',
                async: false,
                jsonpCallback: 'jsonCallback',
                //contentType: "application/json",
                dataType: 'jsonp',
                success: function(json) {
                  console.log(json);
                },
                error: function(e) {
                  console.log(e.message);
                }
                });
*/
        /*      $.getJSON('js/app/test1.json', function(data) {
                //$.getJSON('SAME LIVE URL HERE....', function(data) {
                console.log(data);
                alert("dentro");
            });*/
              //var fiel = 'modelos/' + nameModel + '/test.js';
              //console.log(fiel);

            //  var json = require('/modelos/'+nameModel+'/test.json');
            //  console.log('JSON' + json);
            //  var asd = 'js/app/modelos/'+nameModel+'/test.json';
            //  console.log('ruta     ' + asd);

            /*  $.getJSON( asd, function( data ) {
                $.each( data, function( key, val ) {
                    console.log( "<li id='" + key + "'>" + val + "</li>" );
                });
              });
*/
              //console.log("new model" );
      /*        var boardModel = new BoardModel();
              boardModel.url = asd;
              boardModel.fetch();
              boardModel.bind('reset', function () { console.log(boardModel); });
 console.log(boardModel);
              //boardModel.fetch();
              console.log("Url fetch" );
              console.log('name = ' + boardModel.get('name'));*/
            },

            showComenzandoAsistente : function(){

              var comenzandoController = new ComenzandoController({ router: this, fModel: formModel});
              comenzandoController.show();
            },

            showPaso1: function () {
                var paso1Controller = new Paso1Controller({ router: this, fModel: formModel});
                paso1Controller.show();
                console.log("Paso1  model:" + JSON.stringify(formModel));
            },

            showPaso2: function () {
                var paso2Controller = new Paso2Controller({ router: this, fModel: formModel});
                paso2Controller.show();
                console.log("Paso2  model:" + JSON.stringify(formModel));
            },

            showPaso3: function () {
                console.log('estamos en el paso 3');

                var paso3Controller = new Paso3Controller({ router: this});
                paso3Controller.show();
            }


        });

        return Router;
    }
);
