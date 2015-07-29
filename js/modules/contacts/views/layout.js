define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var InfoTpl = require('./infoTpl');
    var Contacts = require('../models/contacts')

    module.exports = Marionette.Layout.extend({
        id: 'contacts',
        template: '#contacts-layout',

        regions: {
            infoTpl: '#infoTpl'
        },

        onRender: function() {
            var self = this;
            var contacts = new Contacts();
            contacts.fetch().then(function(options) {

                self.infoTpl.show(new InfoTpl({
                    collection: new Backbone.Collection(options)
                }));
            });
        }
    });

});