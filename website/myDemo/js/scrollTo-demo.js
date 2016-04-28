$(function () {
    $(".nav-side-nav li a").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        var section_pos = $(section).position();
        if (section_pos) {
            $(window).scrollTo({top: section_pos.top, left: "0px"}, 800);
        }
    })
});