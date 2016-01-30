define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["paso1.view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"paso1\">Paso 1</h2>\r\n<p class=\"paso1\">\r\n    ";
  if (stack1 = helpers.descripcion) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.descripcion); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n</p>\r\n\r\n<button type=\"button\" id=\"siguiente\">Siguiente</button>\r\n";
  return buffer;
  });

return this["JST"];

});