define(function(require, exports, module) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'article',
        className: 'li',
        template: '#editArticle_PART-comment',

        /*
        events: {
            'click .editArticle': 'editArticle'
        },

        editArticle: function() {
            //Backbone.history.navigate('#edit/id=' + this.model.id, {trigger: true})
            //Backbone.history.navigate('#edit/' + this.model.id, {trigger: true});
            Backbone.history.navigate('#editArticle/' + this.model.id, {trigger: true});
        }*/

    });
});

