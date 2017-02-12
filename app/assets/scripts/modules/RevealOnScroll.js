var $ = require('jquery'); 
var waypoints = require('../../../../node_modules/waypoints/lib/noframework.waypoints'); 

/*
var waypoints = require('waypoint'); 
var waypoints = require('../../../../node_modules/waypoint/lib/noframework.waypoints'); 
*/
function RevealOnScroll(className, offsetValue) {
    this.itemsToReveal = $('.' + className); //feature-item');
    this.offsetValue = offsetValue; 

    this.hideInitially = function() {
        this.itemsToReveal.addClass("reveal-item");
    }

    this.createWaypoint = function() {
        var parentThis = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: parentThis.offsetValue
            });
        });
    }

    /* Initialisieren */
    this.hideInitially();
    this.createWaypoint();
};

module.exports = RevealOnScroll;