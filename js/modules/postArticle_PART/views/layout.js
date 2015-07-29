define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'home',
        template: '#postArticle_PART-layout',

        events: {
            "click #PostArticleButton" : "postArticle"
        },

        postArticle: function (event) {
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
            //var articleId = this.options.model.attributes['id'];

            $.ajax({
                url: "http://localhost:8080/blog.application/articles/",
                type: "POST",
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
                    console.log("POSTED ARTICLE !");
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
            //debugger;
            //this.collection.update();
            //this.collection.add(JSON.parse(response));
            //debugger;

        }
    });
});