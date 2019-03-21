$(document).ready(function() {
    $(".group1").colorbox({ rel: 'group1' });
    $("html").niceScroll({ cursorwidth: "10px", cursorcolor: "#FFF", mousescrollstep: 50, scrollspeed: 50 });
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    $(".sletter").click(function() {
        $('html,body').animate({ scrollTop: 450 }, 300);
    });
    $(".tolove").click(function() {
      alert("跳轉至GF+登入頁面");
        $.colorbox({
            html: '<script>$(".letterboxout").load("index.html .letterbox");</script><link href="stylesheets/screen.css" rel="stylesheet" type="text/css"/><div class="letterboxout"></div>', //在燈箱中要顯示的html字段
            width: 700, //燈箱中間區塊的寬度
            height: 650, //燈箱中間區塊的高度
        });
    });
    $(".sharelovebtn").click(function() {
        $.colorbox({
            iframe: true,
            href:"sharebox.html",
            width: 700, //燈箱中間區塊的寬度
            height: 900, //燈箱中間區塊的高度
        });
    });
    $(".awardbtn").click(function() {
        $.colorbox({
            iframe: true,
            href:"awardbox.html",
            width: 700, //燈箱中間區塊的寬度
            height: 900, //燈箱中間區塊的高度
        });
    });

    //$(".gf-gift").click(function() { window.open(""); });

    $(document).mousemove(function(e) {
        $('.peo1').parallax(70, e);
        $('.peo2').parallax(-30, e);
    });
    $(document).scroll(function(event) {
        var scroY = $(document).scrollTop();
        if (scroY > 2000) {
            scroY = 2000;
        }
        $('.peo1').css("top", 50 - (scroY / 20));
        $('.peo2').css("top", 0 + (scroY / 15));
    });
    $('.topbanner').waypoint(
        function(direction) {
            if (direction == 'down') {
                $('.bigletter').removeClass("bigletterhind");
                $('.sletter').addClass("lettermove");$('.contant').removeClass("contmove");
                $('.slogan').delay(500).fadeOut(300);

            } else if (direction == 'up') {
                $('.bigletter').addClass("bigletterhind");
                $('.sletter').removeClass("lettermove");$('.contant').addClass("contmove");
                $('.slogan').delay(500).fadeIn(500);

            }
        }, {
            offset: '-15%'
        }
    );

    $(".slogan").removeClass("sloganout");
    $(".peo1").removeClass("peo1out");
    $(".peo2").removeClass("peo2out");

    /*
           $(function () {

               $(".awardlistbtn a").click(function() {
                   var target = $(this.hash);
                   $("html,body").animate({
                       scrollTop: target.offset().top
                   }, 500);
                   return false;
               });
           });
    */

});
