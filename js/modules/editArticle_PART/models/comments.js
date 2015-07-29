define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Comment = require('./comment');

    module.exports = Backbone.Collection.extend({
        model: Comment,
        url: 'http://localhost:8080/blog.application/articles'
    });
});