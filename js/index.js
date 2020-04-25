/*global $, document, window*/
$(document).ready(function () {
    "use strict";

    // create some vars
    var header = $("header"),
        htmlBody = $("html, body"),
        windowVar = $(window),
        scrollToTopButton = $(".scroll-to-top");

    // height of the header
    header.height(windowVar.height());

    // function for scroll to the element
    function autoDirect(selector, speed) {
        selector.on("click", function (event) {
            event.preventDefault();
            htmlBody.animate({
                scrollTop: $($(this).data("scroll")).offset().top + 1
            }, speed);
        });
    }
    autoDirect($("nav ul li.for-scroll"), 1000);
    autoDirect($("nav ul li.for-scroll"), 1000);
    autoDirect($("header a.scroll:first-of-type"), 1000);
    autoDirect($("header a.scroll:last-of-type"), 2000);
    autoDirect($(".advices-learning .box a"), 700);


    // to trigger the night mode in wepsite
    // on click the nav icon (sun)
    $(".icon-them").on("click", function () {
        if ($(this).hasClass("fa-sun")) {
            $(this).attr("class", "fa fa-moon icon-them");
            $("link[href*='them']").attr("href", "css/" + "colors/" + "dark-them" + ".css");
        } else {
            $(this).attr("class", "fa fa-sun icon-them");
            $("link[href*='them']").attr("href", "css/" + "colors/" + "default-them" + ".css");
        }
    });



    // button scroll to top 
    windowVar.scroll(function () {
        if (windowVar.scrollTop() >= 1000) { // if scrollTop >= 1000px
            scrollToTopButton.fadeIn(500);
        } else {
            scrollToTopButton.fadeOut(500);
        }
    });
    scrollToTopButton.on("click", function () {  // on click the button (i) go to up
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
});