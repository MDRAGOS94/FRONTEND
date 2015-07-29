define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Contact = require('./contact');

    module.exports = Marionette.CompositeView.extend({
        id: 'infoTpl',
        className: 'ul',
        template: '#contacts-infoTpl',
        itemViewContainer: '#contacts',
        itemView: Contact
    });
});