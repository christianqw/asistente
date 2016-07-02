define(
[
    'jquery',
    'backbone',
    'localStorage',
    'marionette',
    'underscore',
    'jquery-ui',
    'templateregistry'
],
function ($, Backbone, LocalStorage, Marionette, _, JQUI, JST) {
    'use strict';

    var BoardModel = Backbone.Model.extend({
      //variables locales.
      var_imageCtx :"",
      var_hReal : "",
      var_wReal : "",

      initialize: function (attributes, options){
      //  console.log("inic Board");

        this.var_map = options.map;

        this.listenTo(App.event_aggregator, 'board:mascaraLoad', this.generateImgData);
        this.cargaImagenMascara();
      },

      cargaImagenMascara: function(){
        var img = new Image();
        img.src = this.get('img_mascara');
        img.onload = function() {
          App.event_aggregator.trigger('board:mascaraLoad', this);
        };
      },

      generateImgData: function (img) {
        console.log("Dentro de generadre Image DatA");
        //console.log(this);
        //var img = document.getElementById('myMascara');
        //var canvas = document.getElementById('my-canvas');
        //var aux_img = new Image();
        //aux_img.src = this.get('img_mascara');
        //console.log(aux_img);
        var canvas = document.createElement('canvas');

        this.var_wReal = img.width;
        this.var_hReal = img.height;
        console.log(img.width + '___________________________'+img.height);
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        canvas.width = this.var_wReal;
        canvas.height =	this.var_hReal;
        this.var_imageCtx = canvas.getContext("2d");
        this.var_imageCtx.drawImage(img, 0, 0, this.var_wReal, this.var_hReal);
        console.log("tamaños reales: "+this.var_wReal + "  " +img.height);
      },

      getClaveColor: function(data, Height, Width){
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        console.log("calculamos las pos reales de la mascara");
        var img_fondo = document.getElementById('imagen_fondo');
        console.log('----> OJO USAMOS DOT NOTATION AHORA <------');
        var leftReal = this.calcularRealLeft(data.left, Width, img_fondo.clientWidth);
        var topReal = this.calcularRealTop(data.top, Height, img_fondo.clientHeight);
        console.log("pos real en la mascara: " + leftReal + " "+ topReal );

        return this.getPixelColor(leftReal, topReal); //get color de canvas real:real
      },

      getStringZona: function(data, realHeight, realWidth){
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        var claveColor = this.getClaveColor(data, realHeight, realWidth); //get color de canvas real:real
        console.log("clave Color : " + claveColor);//get value mapa en color
        return this.var_map[claveColor];
      },

      getFilCol: function (data, realHeight, realWidth){
        console.log("################# DENTRO DE get FIL COL #################");
        var claveColor = this.getClaveColor(data, realHeight, realWidth); //get color de canvas real:real
        console.log("clave Color : " + claveColor);//get value mapa en color
        console.log("VALOR EN EL MAPA:");
        console.log(this.var_map[claveColor]);
        return this.var_map[claveColor];
      },

      getPixelColor: function ( l, t ) {
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        var pixelData = this.var_imageCtx.getImageData(l, t, 1, 1).data;
        console.log('getPixelColor => '+ 'R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);	//, a: data[ position + 3 ]
        return('R'+ pixelData[0] + 'G' + pixelData[1] + 'B' + pixelData[2]);
      },

      calcularRealTop:function(pos, h, tvisual) {
        console.log('valores realies: ' + this.var_wReal +'    '+ this.var_hReal);
        var centro = pos+(~~(h/2));
        console.log('cacular Real Top -> '+"pos = " + pos + "centro : " + centro);
        return (~~(centro*this.var_hReal/tvisual));
      },

      calcularRealLeft:function(pos, w, tvisual){
        var centro = pos+(~~(w/2));
        console.log('cacular Real Left -> '+"pos = " + pos + "centro : " + centro);
        console.log('calculamos..........');
        console.log('centro : ' + centro + '    Wreal:' +  this.var_wReal + '    sizeVisial: ' + tvisual );
        console.log(centro*(this.var_wReal)/tvisual);
        console.log((~~(centro*(this.var_wReal)/tvisual)));
        return (~~(centro*(this.var_wReal)/tvisual));
      }

    });

    return BoardModel;


});
