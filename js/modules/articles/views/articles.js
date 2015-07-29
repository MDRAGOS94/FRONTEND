define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Article = require('./article');

    module.exports = Marionette.CompositeView.extend({
        id: 'infoTpl',
        className: 'ul',
        template: '#articles-articles',
        itemViewContainer: '#articles',
        itemView: Article
    });
});