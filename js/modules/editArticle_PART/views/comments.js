define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Comment = require('./comment');

    module.exports = Marionette.CompositeView.extend({
        id: 'infoTpl',
        className: 'ul',
        template: '#editArticle_PART-comments',
        itemViewContainer: '#comments',
        itemView: Comment,

        initialize: function() {
            //console.log("initializing view");

            //this.collection.on('add', this.render, this);

            //this.collection.on('reset', this.render, this);
            //this.render();
            //debugger;
        },

        events: {
            "click #AddCommentButton" : "submitComment",
            "click #SaveArticleButton" : "saveArticle"
        },
        submitComment: function (event) {
            event.preventDefault();
            var text = document.getElementById("comment").value;
            var articleId = this.options.model.attributes['id'];

            $.ajax({
                url: "http://localhost:8080/blog.application/articles/" + articleId + "/comments/",
                type: "POST",
                data: JSON.stringify(
                    {
                        "text": text
                    }
                ),
                contentType: "application/json",//; charset=utf-8",
                dataType: "json",
                success: function () {
                    console.log("Pure jQuery Pure JS object");
                    //debugger;
                    //this.collection.add(JSON.parse(data));
                    //debugger;
                }
            });

            var response = JSON.stringify(
                {
                    "text": text
                }
            );
            //debugger;
            this.collection.add(JSON.parse(response));
            //debugger;

        },
        saveArticle: function (event) {
            debugger;

            event.preventDefault();
            var title = document.getElementById("title").value;
            var firstName = document.getElementById("author").value.trim().split(' ')[0];
            var lastName = document.getElementById("author").value.trim().split(' ')[1];
            var author = {
                firstName: firstName,
                lastName: lastName
            };
            var content = document.getElementById("content").value;

            var text = document.getElementById("comment").value;
            var articleId = this.options.model.attributes['id'];

            $.ajax({
                url: "http://localhost:8080/blog.application/articles/" + articleId + "/",
                type: "PUT",
                data: JSON.stringify(
                    {
                        "title": title,
                        "author": author,
                        "content": content
                    }
                ),
                contentType: "application/json",//; charset=utf-8",
                dataType: "json",
                success: function () {
                    console.log("Pure jQuery Pure JS object");
                    console.log("UPDATED ARTICLE !");
                    //debugger;
                    //this.collection.add(JSON.parse(data));
                    //debugger;
                }
            });
            /*
            var response = JSON.stringify(
                {
                    "text": text
                }
            );*/
            //debugger;
            debugger;
            //this.collection.update();
            //this.collection.add(JSON.parse(response));
            //debugger;

        }



    });
});