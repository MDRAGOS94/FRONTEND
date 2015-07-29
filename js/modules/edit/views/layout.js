define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Contacts = require('modules/contacts/models/contacts');

    module.exports = Marionette.ItemView.extend({
        id: 'edit',
        template: '#edit-layout'
    });
});