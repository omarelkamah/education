/*global $, document*/
$(document).ready(function () {
    "use strict";

    // add class active to the nav bar on click in it
    $("nav ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // prevent Default for the last li who change the light mode
    $(".nav li:last-of-type").on("click", function (event) {
        event.preventDefault();
    });

    // trigger the nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "#32325d",
        cursorwidth: 10,
        cursorborder: "1px solid #32325d",
        zindex: "99999",
        scrollspeed: "90",
        mousescrollstep: "50"
    });

});