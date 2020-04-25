/*global $, document, window*/
$(document).ready(function () {
    "use strict";

    // For Sign In Page
    var inputOne = $(".input-pass-one"),
        inputTwo = $(".input-pass-two"),
        textMassage = $("form .password-inputs .teaxt-pass"),
        numberMassage = $("form .password-inputs .number-pass"),
        ul = $(".list ul"),
        icon = $(".list .div-list i");

    // if the first password input not equal to the second password input
    $(".input-pass").on("keyup", function () {
        if (inputOne.val() !== inputTwo.val()) {
            textMassage.fadeIn();
        } else {
            textMassage.fadeOut();
        }
    });

    // if the input was have 7 to 14 characters
    inputOne.on("keyup", function () {
        if ($(this).val().length <= 7) {
            numberMassage.fadeIn();
        } else if ($(this).val().length >= 14) {
            numberMassage.fadeIn();
        } else {
            numberMassage.fadeOut();
        }
    });

    // to change icon in the input field
    $(".div-list").on("click", function () {
        ul.fadeIn();
        icon.attr("class", "fa fa-chevron-up");
    });

    $(".list ul li").on("click", function () {
        $(".div-list input").val($(this).text());
        ul.fadeOut();
        icon.attr("class", "fa fa-chevron-down");
    });

    // on click the submit button
    $("input[type='submit']").on("click", function (event) {
        if (inputOne.val().length <= 7) {
            event.preventDefault();
        } else if (inputOne.val().length >= 14) {
            event.preventDefault();
        } else if (inputOne.val() !== inputTwo.val()) { // if the inputone value != inputtwo value
            event.preventDefault();
        } else {
            $("#form").submit();
        }
    });


    // to trigger the night mode in wepsite
    // on click the nav icon (sun)
    $(".icon-them").on("click", function () {
        if ($(this).hasClass("fa-sun")) {
            $(this).attr("class", "fa fa-moon icon-them");
            $("link[href*='them']").attr("href", "../../css/" + "colors/" + "dark-them" + ".css");
        } else {
            $(this).attr("class", "fa fa-sun icon-them");
            $("link[href*='them']").attr("href", "../../css/" + "colors/" + "default-them" + ".css");
        }
    });


    /******************Start Sign In Page*******************************/
    $(".for-background-img").height($(window).height());
    $(".overlay").height($(window).height());
    /******************End Sign In Page*******************************/

    /* Start Trigger Plugins */
    ul.niceScroll({ // niceScroll For Ul list
        cursorcolor: "#32325d",
        cursorwidth: 10,
        cursorborder: "1px solid #32325d",
        cursorborderradius: "2px",
        zindex: "99999",
        scrollspeed: "200"
    });
    /* End Trigger Plugins */
});