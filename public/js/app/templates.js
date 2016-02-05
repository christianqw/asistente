define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["color.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"colors__swatch\" style=\"background-color: ";
  if (stack1 = helpers.hex) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.hex); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n<h4 class=\"list-group-item-heading\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n<p class=\"list-group-item-text\">";
  if (stack1 = helpers.hex) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.hex); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n";
  return buffer;
  });

this["JST"]["comenzando.view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"body-assistant\">\r\n  <!--Cada paso modifica el contenedor por completo-->\r\n  <div id=\"contentAssistantRegion\" class=\"panel panel-default conteiner\">\r\n      <!--DONDE ESTOY PARADO-->\r\n      <div id=\"headerAssistantRegion\" class=\"panel-heading\">\r\n        <h2 class=\"panel-title\">Bienvenidos... [Asistente Logic World]</h2>\r\n      </div>\r\n      <!--2 columnas-->\r\n      <div class=\"panel-body row\">\r\n        <!--COL IZQ - NAV. PASOS RESCORRIDOS - PASOS FALTANTES-->\r\n          <div id=\"navigateAssistantRegion\" class=\"col-sm-2\">\r\n            <h3 class=\"list-title\">Pasos</h3>\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item nav-step-assistant\"><span class=\"badge\"> ← </span>Bienvenidos</li>\r\n              <li class=\"list-group-item nav-step-assistant\">Paso 1</li>\r\n              <li class=\"list-group-item nav-step-assistant\">Paso 2</li>\r\n              <li class=\"list-group-item nav-step-assistant\">Paso 3</li>\r\n              <li class=\"list-group-item nav-step-assistant\">Paso 4</li>\r\n            </ul>\r\n          </div>\r\n      <!--COL DER - FORMULARIO. -->\r\n          <div id=\"formAssistantRegion\" class=\"col-sm-10 \">\r\n              <form class=\"\"  method=\"post\">\r\n                <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\r\n                <p>Use the contextual background classes to provide \"meaning through colors\":</p>\r\n                <p class=\"bg-primary\">This text is important.</p>\r\n                <p class=\"bg-success\">This text indicates success.</p>\r\n                <p class=\"bg-info\">This text represents some information.</p>\r\n                <p class=\"bg-warning\">This text represents a warning.</p>\r\n                <p class=\"bg-danger\">This text represents danger.</p>\r\n              </form>\r\n              <!-- BOTONES MOVIMIENTOS -->\r\n              <div class=\"conteiner-actions btn-group\" role=\"group\">\r\n                  <button id=\"anterior\" type=\"button\" class=\"btn btn-default btn-action disabled\"><span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"false\">Atrás</button>\r\n                  <button id=\"siguiente\" type=\"button\" class=\"btn btn-default btn-action\" href=\"#paso1\">Siguiente <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></button>\r\n                  <button id=\"finalizar\" type=\"button\" class=\"btn btn-default disabled\">Finalizar</button>\r\n                  <button id=\"cancelar\" type=\"button\" class=\"btn btn-default\" href=\"#\">Cancelar</button>\r\n                  <button id=\"help\" type=\"button\" class=\"btn btn-default \">Ayuda</button>\r\n              </div>\r\n\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
  });

this["JST"]["paso1.view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"body-assistant\">\n  <!--Cada paso modifica el contenedor por completo-->\n  <div id=\"contentAssistantRegion\" class=\"panel panel-default conteiner\">\n      <!--DONDE ESTOY PARADO-->\n      <div id=\"headerAssistantRegion\" class=\"panel-heading\">\n        <h2 class=\"panel-title\">Definiendo el Mundo [Asistente Logic World]</h2>\n      </div>\n      <!--2 columnas-->\n      <div class=\"panel-body row\">\n        <!--COL IZQ - NAV. PASOS RESCORRIDOS - PASOS FALTANTES-->\n          <div id=\"navigateAssistantRegion\" class=\"col-sm-2\">\n            <h3 class=\"list-title\">Pasos</h3>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item nav-step-assistant\">Bienvenidos</li>\n              <li class=\"list-group-item nav-step-assistant\"><span class=\"badge\"> ← </span>Paso 1</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 2</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 3</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 4</li>\n            </ul>\n          </div>\n      <!--COL DER - FORMULARIO. -->\n          <div id=\"formAssistantRegion\" class=\"col-sm-10 \">\n            <form class=\"form-horizontal\" data-toggle=\"validator\" role=\"form\">\n              <fieldset>\n              <!-- Form Name -->\n              <legend class=\"legend-form-assistant\">Modelo</legend>\n              <!-- Text input-->\n              <div class=\"form-group has-feedback\">\n                <label class=\"col-md-2 form-control-label control-label\" for=\"inputNameModel\">Nombre</label>\n                <div class=\"col-md-4\">\n                  <input id=\"inputNameModel\" name=\"inputNameModel\" type=\"text\" pattern=\"^[_A-z0-9]{1,}$\" maxlength=\"15\" placeholder=\"ej:Granja\" class=\"form-control input-md\" required>\n                  <span class=\"help-block\">Nombre del modelo</span>\n                </div>\n              </div>\n\n              <!-- File Button -->\n              <div class=\"form-group\" >\n                <label class=\"col-md-2 form-control-label\" for=\"btnIconModel\">Imagen</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnIconModel\" name=\"btnIconModel\" class=\"input-file\" type=\"file\">\n                </div>\n              </div>\n              </fieldset>\n\n              <fieldset>\n              <!-- Form Name -->\n              <legend class=\"legend-form-assistant\">Fondo</legend>\n              <!-- File Button -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 form-control-label\" for=\"btnFondoModel\">Fondo</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnFondoModel\" name=\"btnFondoModel\" class=\"input-file\" type=\"file\">\n                  <span class=\"help-block\">Fondo del Modelo</span>\n                <div class=\"col-md-6\">\n                  <img id=\"blah\" src=\"#\" alt=\"your image\" />\n                </div>\n              </div>\n\n              </div>\n              <!-- File Button -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 form-control-label\" for=\"btnMascaraModel\">Mascara</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnMascaraModel\" name=\"btnMascaraModel\" class=\"input-file\" type=\"file\">\n                  <span class=\"help-block\">Mascara del Modelo</span>\n                </div>\n              </div>\n              </fieldset>\n              </form>\n\n              <!-- BOTONES MOVIMIENTOS -->\n              <div class=\"conteiner-actions btn-group\" role=\"group\">\n                  <button id=\"anterior\" type=\"button\" class=\"btn btn-default btn-action\"><span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"false\"> Atrás</button>\n                  <button id=\"siguiente\" type=\"submit\" class=\"btn btn-default btn-action\">Siguiente <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></button>\n                  <button id=\"finalizar\" type=\"button\" class=\"btn btn-default disabled\">Finalizar</button>\n                  <button id=\"cancelar\" type=\"button\" class=\"btn btn-default\" href=\"#\">Cancelar</button>\n                  <button id=\"help\" type=\"button\" class=\"btn btn-default \">Ayuda</button>\n              </div>\n\n          </div>\n    </div>\n  </div>\n</div>\n";
  });

this["JST"]["paso2.view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"body-assistant\">\n  <!--Cada paso modifica el contenedor por completo-->\n  <div id=\"contentAssistantRegion\" class=\"panel panel-default conteiner\">\n      <!--DONDE ESTOY PARADO-->\n      <div id=\"headerAssistantRegion\" class=\"panel-heading\">\n        <h2 class=\"panel-title\">Definiendo el Mundo [Asistente Logic World]</h2>\n      </div>\n      <!--2 columnas-->\n      <div class=\"panel-body row\">\n        <!--COL IZQ - NAV. PASOS RESCORRIDOS - PASOS FALTANTES-->\n          <div id=\"navigateAssistantRegion\" class=\"col-sm-2\">\n            <h3 class=\"list-title\">Pasos</h3>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item nav-step-assistant\">Bienvenidos</li>\n              <li class=\"list-group-item nav-step-assistant\"><span class=\"badge\"> ← </span>Paso 1</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 2</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 3</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 4</li>\n            </ul>\n          </div>\n      <!--COL DER - FORMULARIO. -->\n          <div id=\"formAssistantRegion\" class=\"col-sm-10 \">\n            <form class=\"form-horizontal\" role=\"form\">\n              <fieldset>\n              <!-- Form Name -->\n              <legend class=\"legend-form-assistant\">Zonas</legend>\n              <!-- Text input-->\n              <div class=\"form-group row\">\n                <label class=\"col-md-2 form-control-label\" for=\"inputNameModel\">Nombre</label>\n                <div class=\"col-md-4\">\n                  <input id=\"inputNameModel\" name=\"inputNameModel\" type=\"text\" placeholder=\"ej:Granja\" class=\"form-control input-md\" required=\"\">\n                  <span class=\"help-block\">Nombre del modelo</span>\n                </div>\n              </div>\n\n              </form>\n\n              <!-- BOTONES MOVIMIENTOS -->\n              <div class=\"conteiner-actions btn-group\" role=\"group\">\n                  <button id=\"anterior\" type=\"button\" class=\"btn btn-default btn-action\"><span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"false\"> Atrás</button>\n                  <button id=\"siguiente\" type=\"button\" class=\"btn btn-default btn-action\">Siguiente <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></button>\n                  <button id=\"finalizar\" type=\"button\" class=\"btn btn-default disabled\">Finalizar</button>\n                  <button id=\"cancelar\" type=\"button\" class=\"btn btn-default\" href=\"#\">Cancelar</button>\n                  <button id=\"help\" type=\"button\" class=\"btn btn-default \">Ayuda</button>\n              </div>\n\n          </div>\n    </div>\n  </div>\n</div>\n";
  });

this["JST"]["paso3.view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!--DONDE ESTOY PARADO-->\n<div id=\"headerAssistantRegion\" class=\"panel-heading\">\n  <h2 class=\"panel-title\">Asistente - Paso 3</h2>\n</div>\n<!--2 columnas-->\n<div class=\"panel-body row\">\n  <!--COL IZQ - NAV. PASOS RESCORRIDOS - PASOS FALTANTES-->\n    <div id=\"navigateAssistantRegion\" class=\"col-sm-2\">\n      <h3 class=\"list-title\">Pasos</h3>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item nav-step-assistant\">paso 1</li>\n        <li class=\"list-group-item nav-step-assistant\"> paso 2</li>\n        <li class=\"list-group-item nav-step-assistant\"><span class=\"badge\"> ← </span>paso 3</li>\n        <li class=\"list-group-item nav-step-assistant\">lita 1</li>\n        <li class=\"list-group-item nav-step-assistant\">lita 1</li>\n      </ul>\n    </div>\n<!--COL DER - FORMULARIO. -->\n    <div id=\"formAssistantRegion\" class=\"col-sm-10 \">\n        <form class=\"\"  method=\"post\">\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n          <h3 class=\"panel-title\">Bienvenidos al Asistente generador de Mundos de Logic World</h3>\n        </form>\n        <!-- BOTONES MOVIMIENTOS -->\n        <div class=\"conteiner-actions btn-group\" role=\"group\">\n            <button type=\"button\" class=\"btn btn-default btn-action\"  href=\"#paso2\"><span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"false\"> Atrás</button>\n            <button type=\"button\" class=\"btn btn-default btn-action\" href=\"#paso4\">Siguiente <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></button>\n            <button type=\"button\" class=\"btn btn-default disabled\">Finalizar</button>\n            <button type=\"button\" class=\"btn btn-default\" href=\"#\">Cancelar</button>\n            <button type=\"button\" class=\"btn btn-default \">Ayuda</button>\n        </div>\n\n    </div>\n</div>\n";
  });

return this["JST"];

});