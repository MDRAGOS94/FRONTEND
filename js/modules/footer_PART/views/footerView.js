define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#footer_PART-footer',
        initialize: function() {
            this.render();
        }
    });
});