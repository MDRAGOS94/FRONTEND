define(function(require, exports, module) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var _ = require('underscore');

    module.exports = Marionette.ItemView.extend({
        id: 'article',
        //id: _.uniqueId(),
        className: 'li',
        template: '#articles-article',

        events: {
            'click .editArticle': 'editArticle',
            'click .shower': 'readMore',
            'click .hider': 'readLess',
            'click .deleteArticle': 'deleteArticle'
        },

        deleteArticle: function (event) {
            //debugger;
            event.preventDefault();
            //var text = document.getElementById("comment").value;
            var articleId = this.options.model.attributes['id'];

            $.ajax({
                url: "http://localhost:8080/blog.application/articles/" + articleId,
                type: 'DELETE',
                contentType: "application/json",//; charset=utf-8",
                dataType: "json",
                success: function () {
                    console.log("Pure jQuery Pure JS object");
                    console.log("DELETED ARTICLE");
                    //debugger;
                    //this.collection.add(JSON.parse(data));
                    //debugger;
                }
            });


            //debugger;
            var article = _.findWhere(this.options, {'id': articleId});
            //debugger;
            this.remove(article);
            //debugger;

        },

        editArticle: function() {
            //Backbone.history.navigate('#edit/id=' + this.model.id, {trigger: true})
            //Backbone.history.navigate('#edit/' + this.model.id, {trigger: true});
            Backbone.history.navigate('#editArticle/' + this.model.id, {trigger: true});

        },

        initialize: function() {
            //$(".hider").hide();
            //debugger;
            //$(".shower").show();
        },

        readMore: function() {
            //console.log('readmore')
            var self = this;
            var length = $('p').text().length;
            var rows = length / 190 + 1;
            rows = parseInt(rows, 10);

            console.log(this.$el);
            var height_1 = rows * 30;
            //$(this.$el).css("height", height_1.toString());
            $(this.$el).css("height", "900");

            console.log(this.$el.addClass(".article_text"));

            $(this.$el.find('p')).css({
                '-webkit-line-clamp': "30"
            });

            $(".article_text p").show();
            //$(".shower").hide();
            //$(".hider").show();
        },

        readLess: function() {
            $(this.$el).css("height", "450");

            $(".article_text p").show();

            $(this.$el.find('p')).css("-webkit-line-clamp", "8");
            //$('.li').css("max-height", "240");
            //$(".hider").hide();
            //$(".shower").show();
        }



    });
});

//
//function readMore() {
//    //debugger;
//
//    //$('#article').animate({height:'500px'}, 1500);
//
//    //var text = $('p').text();
//    //console.log(text);
//
//
//
//    $('.li').css("background-color", "green");
//    //$('#article').css("height", "700");
//
//
//
//    var length = $('p').text().length;
//    var rows = length / 190 + 1;
//    rows = parseInt(rows, 10);
//    console.log(rows);
//
//    //$('p').css("-webkit-line-clamp", "15");
//    //$('p').css({"-webkit-line-clamp":"15"});
//    //$('p').css("max-height", "1000");
//    //$('#article').animate({height:'500px'}, 1000);
//
//    var height_1 = rows * 30;
//    $('.li').css("height", height_1.toString());
//
//    $('p').css({
//        '-webkit-line-clamp': rows.toString()
//    });
//
//
//
//
//        $(".article_text p").show();
//        $("#shower").hide();
//        $("#hider").show();
//
//
//    //$(".article_text p").not(":first").hide();
//}
//
//function myFunction2() {
//    debugger;
//
//    $('.li').css("height", "450");
//
//    $(".article_text p").show();
//    //$(".article_text p").not(":first").hide();
//
//    $('p').css("-webkit-line-clamp", "8");
//    $('.li').css("max-height", "240");
//    $("#hider").hide();
//    $("#shower").show();
//
//
//    //$(".article_text p").not(":first").hide();
//}
//
//
//
