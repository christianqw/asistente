require.config({

    paths: {
        'backbone' : '../vendor/backbone/backbone',
        'marionette': '../vendor/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../vendor/backbone.wreqr/lib/backbone.wreqr',
        'backbone.eventbinder' : '../vendor/backbone.eventbinder',
        'backbone.babysitter' : '../vendor/backbone.babysitter/lib/backbone.babysitter',
        'jquery' : '../vendor/jquery/dist/jquery',
        'underscore' : '../vendor/lodash/dist/lodash',
        'modernizr' : '../vendor/modernizr/modernizr',
        'handlebars' : '../vendor/handlebars/handlebars',
        'templateregistry' : 'app/templates',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'jquery-ui': '../vendor/jquery-ui/jquery-ui',
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'modernizr': {
            exports: 'Modernizr'
        },

        'handlebars': {
            exports: 'Handlebars'
        },

        'boostrap': {
            deps: ['jquery'],
            exports: '$.fn.popover'
        }

    },

    waitSeconds: 30
});

require(
    [
        'jquery',
        'app/app',
        'modernizr'
    ],
    function (jquery, Application, Modernizr) {
        'use strict';

        window.App = Application;
        Application.start();
    }
);
