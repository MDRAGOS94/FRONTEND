define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var NavigationView = require('../views/navigationView');

    module.exports = Marionette.Controller.extend({
        initialize: function () {
            this.navigationView = new NavigationView();
        }
    });
});