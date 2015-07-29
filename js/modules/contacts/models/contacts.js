define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Contact = require('./contact');

    module.exports = Backbone.Collection.extend({
        model: Contact,
        url: 'js/modules/api/contacts.json'
    });
});