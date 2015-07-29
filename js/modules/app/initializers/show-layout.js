define(function(require, exports, module) {
    var app = require('app');
    var AppLayout = require('modules/app/views/layout');
    var HeaderController = require('modules/header_PART/controllers/headerController');
    var NavigationController = require('modules/navigation_PART/controllers/navigationController');
    var FooterController = require('modules/footer_PART/controllers/footerController');

    var ShowLayoutInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.addInitializer(function() {
                this.headerController = new HeaderController();
                this.navigationController = new NavigationController();
                this.footerController = new FooterController();

                this.appLayout = new AppLayout();

                this.appLayout.header.show( this.headerController.headerView );
                this.appLayout.menu.show( this.navigationController.navigationView );


                this.showLayout = function( view ) {
                    this.appLayout.container.show( view );
                }


                this.appLayout.footer.show( this.footerController.footerView );



                this.closeLayout = function() {
                    this.appLayout.container.close();
                }
            });
        }
    });

    module.exports = new ShowLayoutInitializer();
});