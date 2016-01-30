define(
[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'templateregistry',
    './router'
],
function (jquery, _, Backbone, Marionette, Handlebars, JST, Router) {
    'use strict';

    var Application = new Marionette.Application();
    Application.on('initialize:before', function (options) {
        Marionette.Renderer.render = function (template, data) {
            if (!JST[template]) {
                throw "Template '" + template + "' not found!";
            }
            return JST[template](data);
        };
    });
    // Handlebars es la libreria que se encarga de los templates. Los helpers son funciones que se registran aca y despues podes llamar desde los templates.
    Application.on('initialize:before', function (options) {
        Handlebars.registerHelper('ifCond', function (v1, v2, opts) {
            if(v1 === v2) {
                return opts.fn(this);
            }
            return opts.inverse(this);
        });

        Handlebars.registerHelper('ifGreater', function (v1, v2, opts) {
            if(v1 > v2) {
                return opts.fn(this);
            }
            return opts.inverse(this);
        });

        Handlebars.registerHelper('toLowerCase', function (strInput, opts) {
            return strInput.toLowerCase();
        });


    });


    Application.on('initialize:after', function (options) {
        var ModalRegion = Backbone.Marionette.Region.extend({
            el: '#modalRegion',
            onShow: function (view) {
                this.$el.modal('show');
            },
            onClose: function () {
                this.$el.modal('hide');
            }
        });

        Application.addRegions({
            contentRegion: '#contentRegion',
            headerRegion: '#headerRegion',
            modalRegion: ModalRegion
        });
    });


    Application.on('initialize:after', function (options) {
        var router = new Router();

    });

    return Application;
}
);
