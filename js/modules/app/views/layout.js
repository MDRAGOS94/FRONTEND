define(function(require, exports, module) {
    var $ = require('jquery');
    var Marionette = require('marionette');
    var app = require('app');

    module.exports = Marionette.Layout.extend({
        el: $('body'),
        template: '#app-layout',
        regions: {
            header: "#header",
            menu: "#menu",
            container: "#container",
            footer: "#footer"
        },
        initialize: function() {
            this.render();
        }
    });
});