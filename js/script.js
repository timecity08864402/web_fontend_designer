$(document).ready(function () {
    var navbar = $('.navbar');
    var navHeight = navbar.height();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color');
        } else {
            navbar.removeClass('navbar-color');
        }
    });
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) { } else {
        $('html, body').addClass('lockoverflow');
        nice = $("html").niceScroll({ scrollspeed: 51, mousescrollstep: 45, cursorwidth: "5px", cursorcolor: "#222", cursorborder: "0px solid #fff" });
    };
    totopfade();
    function totopfade(){
        if ($(this).scrollTop() > 100) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    }
    $(window).scroll(function() {
        $("html").getNiceScroll().resize();
        totopfade();
    });

    $('.toTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
var wow = new WOW({live:true});
new WOW().init();
