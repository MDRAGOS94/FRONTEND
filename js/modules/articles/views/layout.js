define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ArticlesCompositeView = require('./articles');
    var Articles = require('../models/articles');

    var Example = module.exports = Marionette.Layout.extend({
        //id: 'articles',
        //id: _.uniqueId(),
        template: '#articles-layout',

        regions: {
            region_articles: '#region_articles'
        },

        events: {
            "click a": "clicked"
        },

        clicked: function(e){
            debugger;
            alert($(e.target).text());

            var articles = new Articles();
            articles.render();
            debugger;

        },

        onRender: function() {
            var self = this;
            var articles = new Articles();
            articles.fetch().then(function(options) {
                //options = options.slice(1, 3);
                //debugger;
                //this.MyArticles = options;

                self.region_articles.show(new ArticlesCompositeView({
                    collection: new Backbone.Collection(options)
                }));
            });


        },

        initialize: function() {

        }
    });

});


