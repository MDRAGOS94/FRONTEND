define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout = require('../views/comments');
    var _ = require('underscore');
    var Contacts = require('modules/contacts/models/contacts');
    var Articles = require('modules/articles/models/articles');
    var Article = require('modules/articles/models/article');

    var MapRouteController = Marionette.Controller.extend({
        /*
        showEdit: function (id) {
            debugger;

            var articles = new Articles();
            articles.fetch().then(function(options) {
                debugger;

                var article = _.findWhere(options, {'id': id} );


                debugger;
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(article)
                }));
            });
        }*/
        showEdit: function (id) {

            var article = new Article({
                id: id
            });
            //debugger;
            article.fetch().then(function (options) {
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(options)
                    , collection: new Backbone.Collection(options.listOfComments)
                }));
            });
        }

    });

    module.exports = new MapRouteController();
});