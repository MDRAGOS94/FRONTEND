define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout = require('../views/layout');
    var _ = require('underscore');
    var Contacts = require('modules/contacts/models/contacts');

    var MapRouteController = Marionette.Controller.extend({
        showEdit: function (id) {
            debugger;

            var contacts = new Contacts();
            contacts.fetch().then(function(options) {
                debugger;

                var contact = _.findWhere(options, {'id': parseInt(id)} )

                debugger;
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(contact)
                }));
            });
        }
    });

    module.exports = new MapRouteController();
});