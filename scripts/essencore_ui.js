$(document).ready(function () {

    //GNB
    $('header.desktop h1').hover(function () {
        $('.menu_drop').stop().slideUp();
    })
    $('header.desktop .header_right_area').hover(function () {
        $('.menu_drop').stop().slideUp();
    })
    $('nav li a.two_depth').hover(function () {
        $('.menu_drop').stop().slideDown();
    })
    $('nav li a.one_depth').hover(function () {
        $('.menu_drop').stop().slideUp();
        $('nav li a.two_depth').removeClass('on');
    })
    $('.menu_drop').mouseleave(function () {
        $('.menu_drop').stop().slideUp();
        $('nav li a.two_depth').removeClass('on');
    })
    $('#container').mouseleave(function () {
        $('.menu_drop').stop().slideUp();
        $('nav li a.two_depth').removeClass('on');
    })
    $('.menu_drop ol.list1').mouseover(function () {
        $('nav ul li a.two_depth').removeClass('on');
        $('nav ul li:first-child a.two_depth').addClass('on');
    })
    $('.menu_drop ol.list2').mouseover(function () {
        $('nav ul li a.two_depth').removeClass('on');
        $('nav ul li:nth-child(2) a.two_depth').addClass('on');
    })
    $('.menu_drop ol.list3').mouseover(function () {
        $('nav ul li a.two_depth').removeClass('on');
        $('nav ul li:nth-child(3) a.two_depth').addClass('on');
    })
    $('.menu_drop ol.list4').mouseover(function () {
        $('nav ul li a.two_depth').removeClass('on');
        $('nav ul li:nth-child(4) a.two_depth').addClass('on');
    })
    //Latest News
    function string_cut(str, len, tail) {
        return str.substr(0, len) + tail;
    }
    var profile = $('.latest_news article ul li.text a');
    profile.each(function () {
        var cutted_profile = string_cut($(this).html(), 130, "...");
        $(this).html(cutted_profile);
    });
    //Language
    $(".language .now span").click(function () {
        $('.language ul').slideDown();
    });
    $('.language').mouseleave(function () {
        $('.language ul').slideUp();
    });
    //Footer Language
    $(".f_language .now").click(function () {
        $('.f_language ul').slideToggle();
    });
    $('.f_language').mouseleave(function () {
        $('.f_language ul').slideUp();
    });
    //Top Search
    $("header.desktop .header_right_area .search_area a img.btn_open").click(function () {
        $(this).hide();
        $('header.desktop .header_right_area .search_area .search_field button').show();
        $("header.desktop .header_right_area .search_area a img.btn_close").show();
        $('header.desktop .header_right_area .search_area .search_field').stop().animate({ "width": "200px" }, 100)
        return false;
    });
    $("header.desktop .header_right_area .search_area a img.btn_close").click(function () {
        $("header.desktop .header_right_area .search_area a img.btn_open").unbind("mouseover");
        $(this).hide();
        $('header.desktop .header_right_area .search_area .search_field button').hide();
        $("header.desktop .header_right_area .search_area a img.btn_open").show();
        $('header.desktop .header_right_area .search_area .search_field input').val('');
        $('header.desktop .header_right_area .search_area .search_field').stop().animate({ "width": "0px" }, 100)
        return false;
    });
    //product business slider
    $('.prd_img').flexslider({
        animation: "",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: true,
        slideshow: false,
        directionNav: false
    });
    //product business dram slider
    $('.product_slide_area>.slides').bxSlider({
        mode: 'horizontal',
        speed: 300,
        controls: true,
        auto: true
    });
    //product business nand slider
    $('.product_slide>.slides').bxSlider({
        mode: 'horizontal',
        speed: 300,
        controls: true,
        auto: true
    });
    //click top btn scroll go top effect 
    $('.product_business .prd_list a.go_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
    //about history tab
    $(".history_area .tab").hide();
    $(".history_area .tab").eq(0).show();
    $(".about_history .history_area .tablist a").click(function () {
        $(".history_area .tab").hide();
        $($(this).attr("href")).show();
        $(".about_history .history_area .tablist li").removeClass("on");
        $(this).parents("li").addClass("on");
        return false;
    });
    //history img change
    $(".about_history .history_area .right_area td.text a").mouseover(function () {
        $(this).parent().parent().parent().parent().parent().prev('div').find('li').hide();
        $($(this).attr("href")).show();
        return false;
    });
    $(".about_history .history_area .right_area td.text a").click(function () {
        return false;
    });
    //history fixed img zone
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 500) {
                $(" .about_history .history_area .left_area .img_fixed").addClass('fixed');
            } else {
                $(" .about_history .history_area .left_area .img_fixed").removeClass('fixed');
            }
        });
    });
    //history tab btn 
    $(".about_history .history_area .tablist span.plus_btn").click(function () {
        $('.about_history .history_area .tablist').stop().animate({ "height": "104px" }, 300)
        $(this).hide();
        $('.about_history .history_area .tablist span.min_btn').show();
    });
    $(".about_history .history_area .tablist span.min_btn").click(function () {
        $('.about_history .history_area .tablist').stop().animate({ "height": "52px" }, 300)
        $(this).hide();
        $('.about_history .history_area .tablist span.plus_btn').show();
    });
    //support where to buy step1 select click
    $(".support_where .search_country .search_area1 span.select1_tit").click(function () {
        $(this).next('ul').slideDown();
        return false;
    });
    //support where to buy step1 option click
    $(".support_where .search_country .search_area1 ul.select1_option li a").click(function () {
        $('.support_where .search_country  .search_area1 ul.select1_option').slideUp();
        $('.support_where .search_country article .select2_content').hide();
        $('.support_where .result_area .tab ul li').hide();
        $('.support_where .result_area .tab ul li').removeClass('on');
        $($(this).attr("href")).parent().show();
        $($(this).attr("href")).show();
        $($(this).attr("href")).find('.select1_tit').addClass('open');
        //suppoert where to buy step2 select click
        $($(this).attr("href")).find('span.open').click(function () {
            $(this).next('ul.select2_option').slideDown();
        });

        var view_text = $(this).text();
        $(this).parent().parent().prev('span.select1_tit').html(view_text);

        var tit = $(this).attr('title');
        $('.support_where .result_area .tab h2').html(tit);
        $('.support_where .result_area .tab h5').show();
        $('.support_where .result_area .tab h4').hide();

        findLi();
        return false;
    });
    $('.support_where .search_country .search_area1 .select1').mouseleave(function () {
        $(this).find('ul.select1_option').slideUp();
    });

    //support where to buy step2 option click

    $(".support_where .search_country .search_area2 span.select1_tit").click(function () {
        $(this).next('ul').slideDown();
        return false;
    });

    $(".support_where .search_country article ul.select2_option li a").click(function () {
        $('.support_where .result_area .tab ul li').hide();
        $('.support_where .result_area .tab ul li').removeClass('on');
        $($(this).attr("href")).show();

        var viwe_text = $(this).text();
        $(this).parent().parent().prev('span.select1_tit').html(viwe_text);
        $(".support_where .search_country article ul.select2_option").slideUp();
        $('.support_where .result_area .tab h5').hide();
        $('.support_where .result_area .tab h4').show();
        var tit2 = $(this).text();
        $('.support_where .result_area .tab h4').html(tit2);
        findLi();
        return false;
    });
    function findLi() {
        var select = $(".support_where .result_area .tab ul li").filter(function () {
            return $(this).css('display') != 'none';
        });
        $('.support_where .result_area .tab ul li').removeClass('on');
        select.eq(0).addClass('on');
        select.eq(1).addClass('on');
        select.eq(2).addClass('on');
        select.eq(3).addClass('on');
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.support_where .result_area .tab ul li').removeClass('on');
            select.eq(0).addClass('on');
            select.eq(1).addClass('on');
        }
        resizeLi();
    }
    $('.support_where .search_country .search_area2 .select2').mouseleave(function () {
        $(this).find('ul.select2_option').slideUp();
    });
    //support where to buy tab
    $(".support_where .result_area .tablist a").click(function () {
        $(".result .tab").hide();
        $($(this).attr("href")).show();
        $(".support_where .result_area .tablist li").removeClass("on");
        $(this).parents("li").addClass("on");
        return false;
    });
    //DropDown Menu
    $(".drop_down_select .select_text").click(function () {
        $(this).next('.list').slideToggle();
    });
    $(".drop_down_select .list li").click(function () {
        $(this).parent().find('li').removeClass('on');
        var viwe_text = $(this).text();
        $(this).parent().parent().prev('.select_text').html(viwe_text);
        $(this).parent().parent('.list').slideToggle();
        $(this).addClass('on');
    });
    // Share popup
    $(".banner_area .share_area a.share_btn").click(function () {
        $('.popup_area').show();
        return false;
    });
    $(".popup_area .pop_data a.popup_close_btn").click(function () {
        $('.popup_area').hide();
    });
    $('.product_slide ul.flex-direction-nav li a.flex-prev').html('<img src="/img/left_arrow.png">');
    $('.product_slide ul.flex-direction-nav li a.flex-next').html('<img src="/img/right_arrow.png">');
    //Bolt QVL
    $('.prd_QVL dt').click(function () {
        $('.prd_QVL dd').slideUp();
        $('.prd_QVL dd ul').slideUp();
        $('.prd_QVL dd ul li div').slideUp();
        $('.prd_QVL span.list_tit').removeClass('open');
        var s_menu = $(this).next('dd');
        if (s_menu.is(":visible")) {
            $('.prd_QVL span.list_tit').removeClass('open');
            $('.prd_QVL span.dd_tit').removeClass('select');
            $(this).removeClass('on');
            s_menu.slideUp();
        } else {
            $('.prd_QVL dt').removeClass('on');
            $(this).addClass('on');
            s_menu.slideDown();
        }
    });
    $('.prd_QVL span.dd_tit').click(function () {
        $('.prd_QVL dd ul').slideUp();
        $('.prd_QVL dd ul li div').slideUp();
        var s_menu = $(this).next('ul');
        if (s_menu.is(":visible")) {
            $(this).removeClass('select');
            $('.prd_QVL span.list_tit').removeClass('open');
            s_menu.slideUp();
        } else {
            $('.prd_QVL span.dd_tit').removeClass('select');
            $(this).addClass('select');
            s_menu.slideDown();
        }
    });
    $('.prd_QVL span.list_tit').click(function () {
        $('.prd_QVL dd ul li div').slideUp();
        var s_menu = $(this).next('div');
        if (s_menu.is(":visible")) {
            $(this).removeClass('open');
            s_menu.slideUp();
        } else {
            $('.prd_QVL span.list_tit').removeClass('open');
            $(this).addClass('open');
            s_menu.slideDown();
        }
    });
    //Search Text Title Cut
    $(document).ready(function () {
        function string_cut(str, len, tail) {
            return str.substr(0, len) + tail;
        }
        var profile = $('.product_search .result_area li.prd_tit3');
        profile.each(function () {
            var cutted_profile = string_cut($(this).html(), 100, "...");
            $(this).html(cutted_profile);
        });
    });
    //Search Text Content Cut
    $(document).ready(function () {
        function string_cut(str, len, tail) {
            return str.substr(0, len) + tail;
        }
        var profile = $('.product_search .result_area li.prd_content span');
        profile.each(function () {
            var cutted_profile = string_cut($(this).html(), 25, "");
            $(this).html(cutted_profile);
        });
    });
    //Search Tab
    $(".search_results .tab ul.search_menu li a").click(function () {
        $(".result_contents").hide();
        $('.search_results .tab ul.search_menu li').removeClass('on');
        $(this).parent('li').addClass('on');
        $($(this).attr("href")).show();
        return false
    });
    $(".search_results .tab ul.search_menu li a.all").click(function () {
        $(".result_contents").show();
        return false;
    });
    //Search mobile tab
    $("#tab").on("change", function () {
        var move = $("#tab").find("option:selected").val();
        $(".result_contents").hide();
        $($(move)).show();
        if (move == 'all') {
            $(".result_contents").show();
        }
    });
    //Attachments
    $('.attachments .file_input_hidden').change(function () {
        var name = $(this).val();
        $(this).parent('.file_input').prev('.file_name').val(name);
    });
    //Main banner
    $('.main_page .banner_area').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false
    });
});
function resizeLi() {
    var select = $(".support_where .result_area .tab ul li").filter(function () {
        return $(this).css('display') != 'none';
    });
    $(window).resize(function () {
        select.eq(0).addClass('on');
        select.eq(1).addClass('on');
        select.eq(2).addClass('on');
        select.eq(3).addClass('on');
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.support_where .result_area .tab ul li').removeClass('on');
            select.eq(0).addClass('on');
            select.eq(1).addClass('on');
        }
    });
}