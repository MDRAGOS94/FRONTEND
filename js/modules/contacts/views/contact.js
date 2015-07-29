define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoTpl',
        className: 'li',
        template: '#contacts-contact',

        events: {
            'click .editContact': 'editContact'
        },

        editContact: function() {
            //Backbone.history.navigate('#edit/id=' + this.model.id, {trigger: true})
            Backbone.history.navigate('#edit/' + this.model.id, {trigger: true});
        }
    });
});