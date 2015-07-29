define(function(require, exports, module) {
    var Backbone = require('backbone');

    module.exports = Backbone.Model.extend({
        urlRoot: 'http://localhost:8080/blog.application/articles'
    });

});