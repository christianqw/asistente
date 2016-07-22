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

this["JST"]["modal.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                <li>\r\n                  <span>";
  if (stack1 = helpers.NombrePred) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.NombrePred); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                  ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal || (depth0 && depth0.equal)),stack1 ? stack1.call(depth0, (depth0 && depth0.CantParam), 1, options) : helperMissing.call(depth0, "equal", (depth0 && depth0.CantParam), 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                  ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.equal || (depth0 && depth0.equal)),stack1 ? stack1.call(depth0, (depth0 && depth0.CantParam), 2, options) : helperMissing.call(depth0, "equal", (depth0 && depth0.CantParam), 2, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                  ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.equal || (depth0 && depth0.equal)),stack1 ? stack1.call(depth0, (depth0 && depth0.CantParam), 3, options) : helperMissing.call(depth0, "equal", (depth0 && depth0.CantParam), 3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                  ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.equal || (depth0 && depth0.equal)),stack1 ? stack1.call(depth0, (depth0 && depth0.CantParam), 4, options) : helperMissing.call(depth0, "equal", (depth0 && depth0.CantParam), 4, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                  ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.Ayuda), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </li>\r\n              ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " <span> (x)</span> ";
  }

function program4(depth0,data) {
  
  
  return " <span> (x, y)</span> ";
  }

function program6(depth0,data) {
  
  
  return " <span> (x, y, z)</span> ";
  }

function program8(depth0,data) {
  
  
  return " <span> (x, y, z, w)</span> ";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                  <div class=\"explicacion-predicado\">\r\n                    <span>";
  if (stack1 = helpers.Ayuda) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.Ayuda); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                  </div>\r\n                  ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.Funcion), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li>\r\n                  <span>";
  if (stack1 = helpers.Rename) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.Rename); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " (x,y)</span>\r\n                </li>\r\n              ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\r\n              <li>\r\n                <div class=\"explicacion-predicado\">\r\n                  <span>El frame no tiene definida ninguna Función</span>\r\n                </div>\r\n              </li>\r\n              ";
  }

  buffer += "<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\"> <!-- sacando estó es pag completa con transparencia -->\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <h4>Ayuda</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"titulo-modal\">\r\n        <h2>¿Cómo te podemos ayudar?</h2>\r\n      </div>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4 col-lexico\">\r\n            <div class=\"row hidden-xs\">\r\n              <div class=\"col-sm-12\">\r\n                <h2 class=\"subtitulo-modal\">De las Fórmulas</h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 navigation-list articles open\">\r\n                <h3>Cómo se escribe</h3>\r\n                  <ul class=\"list-unstyled lista-modal\">\r\n                    <li>Las <span>variables</span> y <span>constantes</span> siempre se escriben con letras minúsculas.</li>\r\n                    <li>Las <span>funciones</span> se escriben con letras en mayúsculas.</li>\r\n                    <li>Los <span>predicados</span> siempre comienzan con una letra mayúscula seguido de una en minúscula </li>\r\n                  </ul>\r\n                <h3>Caracteres alternativos</h3>\r\n                <ul class=\"list-group tabla-char\">\r\n                  <li class=\"list-group-item\">Existencial:   <span> &exist;</span>, # </li>\r\n                  <li class=\"list-group-item\">Universal:   <span> &forall;</span>, @ </li>\r\n                  <li class=\"list-group-item\">Conjunción:  <span> &and;</span>, ^ ó &amp;</li>\r\n                  <li class=\"list-group-item\">Disyunción:  <span> &or;</span>, | </li>\r\n                  <li class=\"list-group-item\">Implicación: <span> &rarr;</span>, &ndash;&gt; ó =&gt;</li>\r\n                  <li class=\"list-group-item\">Negación:    <span> &not;</span>, ~ </li>\r\n                </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-7 col-sm-offset-1 col-frame\">\r\n          <div class=\"row hidden-xs\">\r\n            <div class=\"col-sm-12\">\r\n              <h2 class=\"subtitulo-modal\" >Del Frame</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 navigation-list\">\r\n              <h3>Predicados</h3>\r\n            <ul class=\"list-unstyled lista-predicados\">\r\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.Predicado), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-sm-6 navigation-list\">\r\n            <h3>Funciones</h3>\r\n          <ul class=\"list-unstyled\">\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Funcion), {hash:{},inverse:self.program(15, program15, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          </ul>\r\n        </div>\r\n      </div>            </div>\r\n      </div>\r\n      <img src=\"img/assets/ayuda.png\" class=\"imagen-ayuda hidden-xs\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n    </div>\r\n  </div><!-- /.modal-content -->\r\n</div><!-- /.modal-dialog -->\r\n";
  return buffer;
  });

this["JST"]["modal.template2.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <h2>This is a modal!</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p>With some content in it!</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n    </div>\r\n</div><!-- /.modal-dialog -->\r\n";
  });

this["JST"]["modelo1.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\"> <!-- sacando estó es pag completa con transparencia -->\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <h4>Ayuda</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"titulo-modal\">\r\n        <h2>¿Cómo te podemos ayudar?</h2>\r\n      </div>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"row hidden-xs\">\r\n              <div class=\"col-sm-12\">\r\n                <h2 class=\"subtitulo-modal\">De las Fórmulas</h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 navigation-list articles open\">\r\n                <h3>Cómo se escribe</h3>\r\n                  <ul class=\"list-unstyled lista-modal\">\r\n                    <li>Las <span>variables</span> y <span>constantes</span> siempre se escriben con letras minúsculas.</li>\r\n                    <li>Las <span>funciones</span> se escriben con letras en mayúsculas.</li>\r\n                    <li>Los <span>predicados</span> siempre comienzan con una letra mayúscula seguido de una en minúscula </li>\r\n                  </ul>\r\n                <h3>Caracteres alternativos</h3>\r\n                <ul class=\"list-group tabla-char\">\r\n                  <li class=\"list-group-item\">Existencial:   <span> &exist;</span>, # </li>\r\n                  <li class=\"list-group-item\">Universal:   <span> &forall;</span>, @ </li>\r\n                  <li class=\"list-group-item\">Conjunción:  <span> &and;</span>, ^ ó &amp;</li>\r\n                  <li class=\"list-group-item\">Disyunción:  <span> &or;</span>, | </li>\r\n                  <li class=\"list-group-item\">Implicación: <span> &rarr;</span>, &ndash;&gt; ó =&gt;</li>\r\n                  <li class=\"list-group-item\">Negación:    <span> &not;</span>, ~ </li>\r\n                </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-7 col-sm-offset-1\">\r\n          <div class=\"row hidden-xs\">\r\n            <div class=\"col-sm-12\">\r\n              <h2 class=\"subtitulo-modal\" >Del Frame</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 navigation-list\">\r\n              <h3>Cuenta y pagos <div class=\"arrow-container svg-container\">\r\n                <svg class=\"svg-arrow\">\r\n                  <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#arrow\">\r\n                  </use>\r\n                </svg>\r\n              </div>\r\n            </h3>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a href=\"/ar/account_payment_help/account_settings\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"account_settings\" data-ga-event-label=\"home_page\">\r\n                  Configuración de la cuenta\r\n                </a>\r\n              </li>\r\n              <li>\r\n              <a href=\"/ar/account_payment_help/managing_payments\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"managing_payments\" data-ga-event-label=\"home_page\">\r\n              Gestionar pagos\r\n              </a>\r\n              </li>\r\n              <li>\r\n              <a href=\"/ar/account_payment_help/subscription_options\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"subscription_options\" data-ga-event-label=\"home_page\">\r\n              Opciones de suscripción\r\n              </a>\r\n              </li>\r\n              <li>\r\n              <a href=\"/ar/account_payment_help/premium_for_family\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"premium_for_family\" data-ga-event-label=\"home_page\">\r\n              Plan Familiar Premium\r\n              </a>\r\n              </li>\r\n              <li>\r\n              <a href=\"/ar/account_payment_help/privacy\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"privacy\" data-ga-event-label=\"home_page\">\r\n              Privacidad y seguridad\r\n              </a>\r\n              </li>\r\n              <li>\r\n              <a href=\"/ar/account_payment_help/troubleshooting\" class=\"js-ga-event\" data-ga-event-category=\"account_payment_help\" data-ga-event-action=\"troubleshooting\" data-ga-event-label=\"home_page\">\r\n              Resolución de problemas\r\n              </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-sm-6 navigation-list\">\r\n            <h3>Usar Spotify <div class=\"arrow-container svg-container\">\r\n              <svg class=\"svg-arrow\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#arrow\">\r\n                </use>\r\n              </svg>\r\n            </div>\r\n          </h3>\r\n          <ul class=\"list-unstyled\">\r\n            <li>\r\n            <a href=\"/ar/using_spotify/search_play\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"search_play\" data-ga-event-label=\"home_page\">\r\n            Buscar y reproducir\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/playlists\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"playlists\" data-ga-event-label=\"home_page\">\r\n            Playlists\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/collect_music\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"collect_music\" data-ga-event-label=\"home_page\">\r\n            Coleccionar música\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/discover_music\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"discover_music\" data-ga-event-label=\"home_page\">\r\n            Descubrir música\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/lifestyle_features\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"lifestyle_features\" data-ga-event-label=\"home_page\">\r\n            Estilo de vida\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/share_music\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"share_music\" data-ga-event-label=\"home_page\">\r\n            Compartir música\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/play_on_stereo_tv_car\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"play_on_stereo_tv_car\" data-ga-event-label=\"home_page\">\r\n            Reproducir en TV, estéreo y auto\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/the_user_community\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"the_user_community\" data-ga-event-label=\"home_page\">\r\n            Comunidad de usuarios\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/for_artists\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"for_artists\" data-ga-event-label=\"home_page\">\r\n            Para artistas\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/feedback\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"feedback\" data-ga-event-label=\"home_page\">\r\n            Comentarios\r\n            </a>\r\n            </li>\r\n            <li>\r\n            <a href=\"/ar/using_spotify/troubleshooting2\" class=\"js-ga-event\" data-ga-event-category=\"using_spotify\" data-ga-event-action=\"troubleshooting2\" data-ga-event-label=\"home_page\">\r\n            Resolución de problemas\r\n            </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>            </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n    </div>\r\n  </div><!-- /.modal-content -->\r\n</div><!-- /.modal-dialog -->\r\n";
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
  


  return "<div id=\"app_container\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <!-- start: Panel Modelo-->\r\n      <div class=\"col-md-6\">\r\n        <!-- start:Herramientas Modelo-->\r\n        <div id=\"marco_elementos\" class=\"thumbnail\">\r\n        </div>\r\n        <!-- end:Herramientas Modelo-->\r\n        <!-- Start:Mundo Modelo-->\r\n        <div id=\"panel_mundo1\" class=\"contenedor_modelo\">\r\n        <!-- MASCARA --><!-- FONDO -->\r\n        </div>\r\n        <!-- end:Mundo Modelo-->\r\n      </div>\r\n       <!-- start: Panel Formulas-->\r\n       <div class=\"col-md-6\">\r\n        <!-- Herramientas Sentencias-->\r\n        <div class=\"thumbnail\"><!-- Herramientas sentencia-->\r\n          <div class=\"row\">\r\n            <div id=\"\" class=\"col-md-5\">\r\n              <div id=\"btn-group-char-1\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &not; </button>\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &and; </button> <!-- /\\ -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &or; </button> <!-- v -->\r\n                </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default \"> &rarr; </button> <!--  -> -->\r\n                </div>\r\n              </div>\r\n              <div  id=\"btn-group-char-2\" class=\"btn-group btn-group-justified\" role=\"group\" >\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &exist; </button> <!-- E -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> &forall; </button> <!-- A -->\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ( </button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"button\" onclick=\"\" class=\"btn-character btn btn-default\"> ) </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"btn-toolbar col-md-7\" role=\"toolbar\" > <!-- style=\"background-color: yellow;\" -->\r\n              <div class=\"row \">\r\n                <div class=\"col-xs-6\" >\r\n                <button id=\"id_btn_add_sentencia\" type=\"button\" class=\"btn btn-default btn-block\">Agregar Sentencia</button>\r\n                <button id=\"id_btn_clear\" type=\"button\" class=\"btn btn-default btn-block\">Limpiar</button>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                <button id=\"id_btn_action\" type=\"button\" class=\"btn btn-default btn-block\">Verificar</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Contenedor Sentencias-->\r\n        <div class=\"thumbnail\"> <!-- Panel sentencia-->\r\n          <div id=\"panel_sentencias\" class=\"caption\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n       <!-- end: Panel Formulas-->\r\n\r\n       <!-- Modal-->\r\n       <div class=\"modal fade\" role=\"modal\" id=\"modalRegion\"</div>\r\n";
  });

return this["JST"];

});