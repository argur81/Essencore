$(document).ready(function () {
    //Top Search
    $("header.desktop .header_right_area .search_area2 a.btn_open").click(function () {
        $(this).hide();
        $("header.desktop .header_right_area .mobile_menu a.m_menu_btn").hide();
        $("header.desktop .header_right_area .mobile_menu a.btn_close").show();
        $('header.desktop .header_right_area .search_area2 .search_field button').show();
        $('header.desktop .header_right_area .search_area2 .search_field').stop().animate({ "width": "100vw" }, 100)
        return false;
    });
    $("header.desktop .header_right_area .mobile_menu a.btn_close").click(function () {
        $(this).hide();
        $("header.desktop .header_right_area .mobile_menu a.m_menu_btn").show();
        $('header.desktop .header_right_area .search_area2 .search_field button').hide();
        $("header.desktop .header_right_area .search_area2 a.btn_open").show();
        $(' .search_area2 .search_field input').val('');
        $('header.desktop .header_right_area .search_area2 .search_field').stop().animate({ "width": "0px" }, 100)
        return false;
    });

    //Main mobile slider
    $('.slide_area').flexslider({
        animation: "",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: false,
        slideshow: false,
        touch: true,
        directionNav: true
    });
    $(".slide_area .flex-control-nav li a").click(function () {
        $('#tubular-container').hide();
    });
    $(".slide_area .flex-control-nav li a").eq(0).click(function () {
        $('#tubular-container').fadeIn(700);
    });
    //GNB
    $("header.desktop .header_right_area .mobile_menu a.m_menu_btn").click(function () {
        $('header.mobile').animate({ "right": "0" });
        return false;
    });
    $("header.mobile div.btn_area a.m_menu_close_btn").click(function () {
        $('header.mobile').animate({ "right": "-100%" });
        $('header.mobile article ul.menu_1depth li div.menu_2depth').slideUp();
        $('header.mobile article ul.menu_1depth li div.text span').removeClass('on');
        return false;
    });
    $("header.mobile article ul.menu_1depth li div.text").click(function () {
        $('header.mobile article ul.menu_1depth li div.menu_2depth').slideUp();
        $('header.mobile article ul.menu_1depth li div.text span').removeClass('on');
        $(this).find('span').addClass('on');
        $('header.mobile article ul.menu_1depth li .down_arrow').show();
        $('header.mobile article ul.menu_1depth li .up_arrow').hide();
        var menu = $(this).next("div");
        if (menu.is(":visible")) {
            menu.slideUp();
        } else {
            menu.slideDown();
            $(this).find('.down_arrow').hide();
            $(this).find('.up_arrow').show();
        }
    });
});