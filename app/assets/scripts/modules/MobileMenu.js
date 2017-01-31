var $ = require('jquery'); 

function MobileMenu() {
    console.log('From mobileMenu');
    
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');

    this.events = function () {
        this.menuIcon.click(this.toggleMenu.bind(this)); 
        /* Mit bind zwingt man toggleMenu im gleichen Context zu arbeiten */
    }

    this.toggleMenu = function () {
        console.log('Toggle menu!');
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon-close");
    }

    /* Initialisieren */
    this.events();
};

module.exports = MobileMenu;