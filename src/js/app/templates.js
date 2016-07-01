define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["elemento.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img class=\"img_elemento\"  src=\"js/app/logicworld/modelos/";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.img); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n<button class=\"destroy\"></span>\r\n<span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\r\n</button>\r\n<label class=\"nombre-elemento\"> ";
  if (stack1 = helpers.nombre) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.nombre); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </label>\r\n<input class=\"nombre-edit\"> </input>\r\n";
  return buffer;
  });

this["JST"]["board.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img id=\"myMascara\" src=\"";
  if (stack1 = helpers.img_mascara) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.img_mascara); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"imagen de mascara\" />\r\n<img id=\"imagen_fondo\"  src=\"";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.img); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"imagen de fondo\">\r\n<div id=\"lista_elementos\">\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["panel.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <li><a href=\"#";
  if (stack1 = helpers.ref) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.ref); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <img id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" src=\"js/app/logicworld/modelos/";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.img); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"image img-responsive elemento_mundo\" /></a></li>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <form id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"lista_atributos nav-atributo\">\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.att), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n      <select name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"atributo form-inline\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.op), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </select>\r\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <option>";
  if (stack1 = helpers.estado) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.estado); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n        ";
  return buffer;
  }

  buffer += "<ul >\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.elements), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  <div style=\"float: right\">\r\n    <button id=\"add_element\" type=\"button\" class=\"btn btn-default btn_addedit_elem btn-block\">Agregar</button>\r\n    <button id=\"edit_element\" type=\"button\" class=\"btn btn-default btn_addedit_elem btn-block\">Editar</button>\r\n  </div>\r\n</ul>\r\n\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabs), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["sentencia.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Begin: Sentencia Template-->\r\n<button class=\"btn btn-default btn-destroy-trash\" type=\"button\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button>\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" id=\"";
  if (stack1 = helpers.nombre) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.nombre); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" name=\"";
  if (stack1 = helpers.nombre) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.nombre); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"input_sentencia form-control\" placeholder=\"Click and type...\" value=\"";
  if (stack1 = helpers.valor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.valor); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <span class=\"input-group-btn\">\r\n         <button class=\"btn btn-default my-btn-resultado\" type=\"button\">\r\n           <i class=\"my-icon-resultado  ";
  if (stack1 = helpers.estado) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.estado); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\r\n         </button>\r\n        </span>\r\n    </div><!-- /input-group -->\r\n<label class=\"label-mensaje\">";
  if (stack1 = helpers.mensaje) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.mensaje); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n<!-- End: Sentencia Template-->\r\n";
  return buffer;
  });

this["JST"]["logicWorld.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"app_container\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <!-- start: Panel Modelo-->\r\n      <div class=\"col-md-6\">\r\n        <!-- start:Herramientas Modelo-->\r\n        <div id=\"marco_elementos\" class=\"thumbnail\">\r\n        </div>\r\n        <!-- end:Herramientas Modelo-->\r\n        <!-- Start:Mundo Modelo-->\r\n        <div id=\"panel_mundo1\" class=\"contenedor_modelo\">\r\n        <!-- MASCARA --><!-- FONDO -->\r\n        </div>\r\n        <!-- end:Mundo Modelo-->\r\n      </div>\r\n       <!-- start: Panel Formulas-->\r\n       <div class=\"col-md-6\">\r\n        <!-- Herramientas Sentencias-->\r\n        <div class=\"thumbnail\"><!-- Herramientas sentencia-->\r\n          <div class=\"row\">\r\n            <div id=\"\" class=\"col-md-5\">\r\n              <div id=\"btn-group-char-1\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &not; </button>\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &and; </button> <!-- /\\ -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &or; </button> <!-- v -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &rarr; </button> <!--  -> -->\r\n                </div>\r\n              </div>\r\n              <div  id=\"btn-group-char-2\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &exist; </button> <!-- E -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &forall; </button> <!-- A -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ( </button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ) </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"btn-toolbar col-md-7\" role=\"toolbar\" > <!-- style=\"background-color: yellow;\" -->\r\n              <div class=\"row \">\r\n                <div class=\"col-xs-6\" >\r\n                <button id=\"id_btn_add_sentencia\" type=\"button\" class=\"btn btn-default btn-block\">Agregar Sentencia</button>\r\n                <button id=\"id_btn_clear\" type=\"button\" class=\"btn btn-default btn-block\">Limpiar</button>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                <button id=\"id_btn_action\" type=\"button\" class=\"btn btn-default btn-block\">Verificar</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Contenedor Sentencias-->\r\n        <div class=\"thumbnail\"> <!-- Panel sentencia-->\r\n          <div id=\"panel_sentencias\" class=\"caption\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n       <!-- end: Panel Formulas-->\r\n";
  });

return this["JST"];

});