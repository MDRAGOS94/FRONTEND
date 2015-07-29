define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#navigation_PART-navigation',
        initialize: function() {
            this.render();
        }
    });
});