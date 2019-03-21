$(document).ready(function() {
$(".sloganbg").removeClass("txtbg-out");
$(".slogan").removeClass("slogan-out");


var bgpage = 1;
bg_fn();
//setInterval(bg_fn,7000);
function bg_fn(){
    if(bgpage>6){
        bgpage=1;
    }
    var bgpage2 = bgpage + 1;
    $(".peo").addClass("peo-out");
    $(".peo-out.peo" + bgpage ).removeClass("peo-out");
    $(".peo-out.peo" + bgpage2 ).removeClass("peo-out");
    bgpage +=2;
    $(".backrepeat").addClass("backrepeat-fast");
    $(".cloud").addClass("cloud-fast");
    setTimeout(function() {$(".backrepeat").removeClass("backrepeat-fast");$(".cloud").removeClass("cloud-fast");},600);
}
var pagenum = location.hash.replace(/^.*#/, '');
    pagelink_fn();
    function pagelink_fn() {
        //alert(pagenum);
        $(".page.page-in").removeClass("page-in");
        if(pagenum == 0){
            $(".slogan").removeClass("slogan-out");
            $(".sloganbg").removeClass("sloganbg-inpage");
            $(".peo").removeClass("peo-inpage");
        }else{
            $(".slogan").addClass("slogan-out");
            $(".sloganbg").addClass("sloganbg-inpage");
            $(".peo").addClass("peo-inpage");
            $(".page").eq(pagenum-1).addClass("page-in");
        }
        $(".navtoinpage.active").removeClass("active");
        $(".navtoinpage").eq(pagenum).addClass("active");
    }
$(".navtoinpage").click(function() {
        pagenum=$(this).index(".navtoinpage");
        //console.log(pagenum);
        $(".page.page-in").removeClass("page-in");
        if(pagenum == 0){
            $(".slogan").removeClass("slogan-out");
            $(".sloganbg").removeClass("sloganbg-inpage");
            $(".peo").removeClass("peo-inpage");
        }else{
            $(".slogan").addClass("slogan-out");
            $(".sloganbg").addClass("sloganbg-inpage");
            $(".peo").addClass("peo-inpage");
            $(".page").eq(pagenum-1).addClass("page-in");
        }
        $(".navtoinpage.active").removeClass("active");
        $(this).addClass("active");
        bg_fn();
    });
    /*niceScroll*/
    $("html").niceScroll({ cursorcolor: "rgba(255,255,255,.5)" ,cursorborder: "0px solid #fff",cursorwidth: "5px", mousescrollstep: 50, scrollspeed: 50, zindex: 999 });
    $(".page .pageout").niceScroll({ cursorcolor: "rgba(255,255,255,.5)" ,cursorborder: "0px solid #fff",cursorwidth: "5px", mousescrollstep: 50, scrollspeed: 50, zindex: 999 });
    $(".page .pageout").getNiceScroll().hide();
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/

    /*allheight*/
    var domminheight = $(window).height();
    $("body").css("height", domminheight);
    /*endallheight*/

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/

    /*clicklink*/
    $(".gf-gift").click(function() { window.open(""); });
    /*endclicklink*/

    /*linkhashanimate*/
    $(function() {
        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/

});
