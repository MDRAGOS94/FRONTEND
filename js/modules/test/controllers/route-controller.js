define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var TestLayout = require('../views/layout');

    var TestRouteController = Marionette.Controller.extend({
       showTest: function () {
           app.showLayout(new TestLayout);
       }
    });

    module.exports = new TestRouteController();
});
