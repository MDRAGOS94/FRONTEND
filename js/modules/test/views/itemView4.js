define(function(require, exports, module) {
    var BackBone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'itemView4',
        template: '#test-itemView4'
    });
});