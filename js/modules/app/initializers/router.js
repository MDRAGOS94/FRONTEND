define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var BlogRouter = require('modules/blog/router');
    var TestRouter = require('modules/test/router');
    var ContactsRouter = require('modules/contacts/router');
    var EditRouter = require('modules/edit/router');
    var ArticlesRouter = require('modules/articles/router');
    var EditArticleRouter = require('modules/editArticle_PART/router');
    var PostArticleRouter = require('modules/postArticle_PART/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new BlogRouter();
                new TestRouter();
                new ContactsRouter();
                new EditRouter();
                new ArticlesRouter();
                new EditArticleRouter();
                new PostArticleRouter();
            });
        }
    });

    module.exports = new RouterInitializer();
});
