define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#header_PART-header',
        initialize: function() {
            this.render();
        }
    });
});