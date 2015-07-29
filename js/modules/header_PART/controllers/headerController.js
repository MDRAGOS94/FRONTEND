define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var HeaderView = require('../views/headerView');

    module.exports = Marionette.Controller.extend({
        initialize: function () {
            this.headerView = new HeaderView();
        }
    });
});