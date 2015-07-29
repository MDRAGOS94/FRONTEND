define(function(require, exports, module) {
    var BackBone = require('backbone');
    var Marionette = require('marionette');
    var ItemView1 = require('./itemView1');
    var ItemView2 = require('./itemView2');
    var ItemView3 = require('./itemView3');
    var ItemView4 = require('./itemView4');

    module.exports = Marionette.Layout.extend({
        id: 'test',
        template: '#test-layout',

        regions: {
            region_image: '#test-itemView1',
            region_paragraph: '#test-itemView2',
            region_table: '#test-itemView3',
            region_form: '#test-itemView4'
        },

        onRender: function() {
            this.region_image.show(new ItemView1);
            this.region_paragraph.show(new ItemView2);
            this.region_table.show(new ItemView3);
            this.region_form.show(new ItemView4);
        }
    });
});
