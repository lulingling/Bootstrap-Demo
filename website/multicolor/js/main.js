jQuery(function ($) {
    'use strict';

    /*Responsive Nav*/
    $("li.dropdown").find(".fa-angle-down").each(function () {
        $(this).click(function () {
            if ($(window).width() < 768) {
                $(this).parent().next().slideToggle();
            }
            return false;
        })
    });

    /*Search form hide and show*/
    $(".fa-search").click(function () {
        $(".field-toggle").toggle();
    });

    /*Init wow js*/
    new WOW().init();

    $(window).load(function () {
        $(".main-slider").addClass("animate-in");
        $(".preloader").remove();
    });

    $(".timer").countTo();

    /*progress bar*/
    $.each($('div.progress-bar'), function () {
        $(this).css('width', $(this).attr('data-transition') + "%");
    })

});