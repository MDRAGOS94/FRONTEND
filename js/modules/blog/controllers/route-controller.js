define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var BlogLayout = require('../views/layout');

    var BlogRouteController = Marionette.Controller.extend({
       showBlog: function () {
           app.showLayout(new BlogLayout);
       }
    });

    module.exports = new BlogRouteController();
});
