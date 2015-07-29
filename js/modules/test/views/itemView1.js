define(function(require, exports, module) {
    var BackBone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'itemView1',
        template: '#test-itemView1'
    });
});
