define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Article = require('./article');

    module.exports = Backbone.Collection.extend({
        model: Article,
        url: 'http://localhost:8080/blog.application/articles',

        parse: function(response) {
            console.log(response);

            //return response.slice(0,1);

        }
    });
});