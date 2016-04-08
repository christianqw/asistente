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

this["JST"]["layout.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


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
  


  return "<div class=\"body-assistant\">\n  <!--Cada paso modifica el contenedor por completo-->\n  <div id=\"contentAssistantRegion\" class=\"panel panel-default conteiner\">\n      <!--DONDE ESTOY PARADO-->\n      <div id=\"headerAssistantRegion\" class=\"panel-heading\">\n        <h2 class=\"panel-title\">Definiendo el Mundo [Asistente Logic World]</h2>\n      </div>\n      <!--2 columnas-->\n      <div class=\"panel-body row\">\n        <!--COL IZQ - NAV. PASOS RESCORRIDOS - PASOS FALTANTES-->\n          <div id=\"navigateAssistantRegion\" class=\"col-sm-2\">\n            <h3 class=\"list-title\">Pasos</h3>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item nav-step-assistant\">Bienvenidos</li>\n              <li class=\"list-group-item nav-step-assistant\"><span class=\"badge\"> ← </span>Paso 1</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 2</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 3</li>\n              <li class=\"list-group-item nav-step-assistant\">Paso 4</li>\n            </ul>\n          </div>\n      <!--COL DER - FORMULARIO. -->\n          <div id=\"formAssistantRegion\" class=\"col-sm-10 \">\n            <form id=\"form-paso1\" class=\"form-horizontal\" data-toggle=\"validator\" role=\"form\">\n              <fieldset>\n              <!-- Form Name -->\n              <legend class=\"legend-form-assistant\">Modelo</legend>\n              <!-- Text input-->\n              <div class=\"form-group has-feedback\">\n                <label class=\"col-md-2 form-control-label control-label\" for=\"inputNameModel\">Nombre</label>\n                <div class=\"col-md-4\">\n                  <input id=\"inputNameModel\" name=\"inputNameModel\" type=\"text\" maxlength=\"15\" placeholder=\"ej:Granja\" class=\"form-control input-md\" required />\n                  <span class=\"help-block\">Nombre del modelo</span>\n                </div>\n              </div>\n\n              <!-- File Button -->\n              <div class=\"form-group\" >\n                <label class=\"col-md-2 form-control-label\" for=\"btnIconModel\">Imagen</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnIconModel\" name=\"filePaso1\" class=\"input-file\" type=\"file\">\n                </div>\n              </div>\n              </fieldset>\n\n              <fieldset>\n              <!-- Form Name -->\n              <legend class=\"legend-form-assistant\">Fondo</legend>\n              <!-- File Button -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 form-control-label\" for=\"btnFondoModel\">Fondo</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnFondoModel\" name=\"filePaso1\" class=\"input-file\" type=\"file\">\n                  <span class=\"help-block\">Fondo del Modelo</span>\n              </div>\n\n              </div>\n              <!-- File Button -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 form-control-label\" for=\"btnMascaraModel\">Mascara</label>\n                <div class=\"col-md-4\">\n                  <input id=\"btnMascaraModel\" name=\"filePaso1\" class=\"input-file\" type=\"file\">\n                  <span class=\"help-block\">Mascara del Modelo</span>\n                </div>\n              </div>\n              </fieldset>\n              </form>\n\n              <!-- BOTONES MOVIMIENTOS -->\n              <div class=\"conteiner-actions btn-group\" role=\"group\">\n                  <button id=\"anterior\" type=\"button\" class=\"btn btn-default btn-action\"><span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"false\"> Atrás</button>\n                  <button id=\"siguiente\" type=\"submit\" class=\"btn btn-default btn-action\">Siguiente <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></button>\n                  <button id=\"finalizar\" type=\"button\" class=\"btn btn-default disabled\">Finalizar</button>\n                  <button id=\"cancelar\" type=\"button\" class=\"btn btn-default\" href=\"#\">Cancelar</button>\n                  <button id=\"help\" type=\"button\" class=\"btn btn-default \">Ayuda</button>\n              </div>\n\n          </div>\n    </div>\n  </div>\n</div>\n";
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
    + "\" alt=\"imagen de fondo\">\r\n";
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
    + "\" src=\"js/app/modelos/";
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

this["JST"]["app.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"app_container\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <!-- start: Panel Modelo-->\r\n      <div class=\"col-md-6\">\r\n        <!-- start:Herramientas Modelo-->\r\n        <div id=\"marco_elementos\" class=\"thumbnail\">\r\n        </div>\r\n        <!-- end:Herramientas Modelo-->\r\n        <!-- Start:Mundo Modelo-->\r\n        <div id=\"panel_mundo1\" class=\"contenedor_modelo\">\r\n        <!-- MASCARA -->\r\n        <!-- FONDO -->\r\n\r\n          <script id=\"Elemento_Template\" type=\"text/template\">\r\n            <img class=\"elemento_insertado\"  src=\"<%= img %>\">\r\n            <button class=\"destroy\"></span>\r\n              <span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\r\n            </button>\r\n            <label class=\"nombre-elemento\"> <%= nombre %> </label>\r\n            <input class=\"nombre-edit\"> </input>\r\n          </script>\r\n\r\n        </div>\r\n        <!-- end:Mundo Modelo-->\r\n      </div>\r\n       <!-- start: Panel Formulas-->\r\n       <div class=\"col-md-6\">\r\n        <!-- Herramientas Sentencias-->\r\n        <div class=\"thumbnail\"><!-- Herramientas sentencia-->\r\n          <div class=\"row\">\r\n            <div id=\"\" class=\"col-md-5\">\r\n              <div id=\"btn-group-char-1\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &not; </button>\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &and; </button> <!-- /\\ -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &or; </button> <!-- v -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &rarr; </button> <!--  -> -->\r\n                </div>\r\n              </div>\r\n              <div  id=\"btn-group-char-2\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &exist; </button> <!-- E -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &forall; </button> <!-- A -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ( </button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ) </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"btn-toolbar col-md-7\" role=\"toolbar\" > <!-- style=\"background-color: yellow;\" -->\r\n              <div class=\"row \">\r\n                <div class=\"col-xs-6\" >\r\n                <button id=\"id_btn_add_sentencia\" type=\"button\" class=\"btn btn-default btn-block\">Agregar Sentencia</button>\r\n                <button id=\"id_btn_clear\" type=\"button\" class=\"btn btn-default btn-block\">Limpiar</button>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                <button id=\"id_btn_remove\" type=\"button\" class=\"btn btn-default btn-block\">Borrar</button>\r\n                <button id=\"id_btn_action\" type=\"button\" class=\"btn btn-default btn-block\">Verificar</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Contenedor Sentencias-->\r\n        <div class=\"thumbnail\"> <!-- Panel sentencia-->\r\n          <div id=\"panel_sentencias\" class=\"caption\">\r\n          <ul id=\"lista_sentencias\">\r\n\r\n          </ul>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n       <!-- end: Panel Formulas-->\r\n";
  });

return this["JST"];

});