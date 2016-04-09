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

      Initialize: function (attributes, options){
        console.log("inic Board");
        this.var_map = options.map;
        console.log("mostrar map");
        console.log(this.var_map);
        console.log("llamamos a generarteData");
        this.generateImgData();
      },

      generateImgData: function () {
        var img = document.getElementById('myMascara');
        //var canvas = document.getElementById('my-canvas');
        var canvas = document.createElement('canvas');
        this.var_wReal = img.width;
        this.var_hReal = img.height;
        canvas.width = this.var_wReal;
        canvas.height =	this.var_hReal;
        this.var_imageCtx = canvas.getContext("2d");
        this.var_imageCtx.drawImage(img, 0, 0, this.var_wReal, this.var_hReal);
        console.log("tamaños reales: "+this.var_wReal + "  " +img.height);
      },

      getStringZona:function(data, size){
        console.log("calculamos las pos reales de la mascara");
        var img_fondo = document.getElementById('imagen_fondo');
        console.log('----> OJO USAMOS DOT NOTATION AHORA <------');
        var leftReal = this.calcularRealLeft(data.left, size.w,img_fondo.clientWidth);
        var topReal = this.calcularRealTop(data.top, size.h, img_fondo.clientHeight);
        console.log("pos real en la mascara: " + leftReal + " "+ topReal );

        var claveColor = this.getPixelColor(leftReal, topReal); //get color de canvas real:real
        console.log("clave Color : " + claveColor);//get value mapa en color
        console.log("ACA TENEMOS QUE PREGUNTAR QUE MODELO ES Y DEVOLVER UN OBJETO {} SIEMPRE :D");
        return this.var_map[claveColor];
      },

      getPixelColor: function ( l, t ) {
        var pixelData = this.var_imageCtx.getImageData(l, t, 1, 1).data;
        console.log('getPixelColor => '+ 'R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);	//, a: data[ position + 3 ]
        return('R'+ pixelData[0] + 'G' + pixelData[1] + 'B' + pixelData[2]);
      },

      calcularRealTop:function(pos, h, tvisual) {
        var centro = pos+(~~(h/2));
        console.log('cacular Real Top -> '+"pos = " + pos + "centro : " + centro);
        return (~~(centro*this.var_hReal/tvisual));
      },

      calcularRealLeft:function(pos, w, tvisual){
        var centro = pos+(~~(w/2));
        console.log('cacular Real Left -> '+"pos = " + pos + "centro : " + centro);
        return (~~(centro*this.var_wReal/tvisual));
      }

    });

    return BoardModel;


});
