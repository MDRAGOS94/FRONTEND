define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var FooterView = require('../views/footerView');

    module.exports = Marionette.Controller.extend({
        initialize: function () {
            this.footerView = new FooterView();
        }
    });
});