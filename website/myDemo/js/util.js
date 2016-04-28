$(function () {
    var lastId,
        topMenu = $(".nav-side-nav"),
        menuItems = topMenu.find("a");

    var scrollItems = menuItems.map(function () {
        var href = $(this).attr("href");
        if (href.indexOf("#") === 0) {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        }
    });

    $(window).scroll(function () {
        /*显示或者隐藏置顶按钮*/
        if ($(this).scrollTop() > 100) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }

        // Get container scroll position
        var fromTop = $(this).scrollTop();

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top <= fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("current")
                .end().filter("[href=#" + id + "]").parent().addClass("current");
        }

    });

    $(window).load(function () {
        function filterPath(string) {
            return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
        }

        $('a[href*=#]').each(function () {
            if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
                var $targetId = $(this.hash),
                    $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
                var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

                if ($target) {

                    $(this).click(function () {
                        var targetOffset = $target.offset().top;
                        $('html, body').animate({
                            scrollTop: targetOffset
                        }, 800);
                        return false;
                    });
                }
            }
        });
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


})