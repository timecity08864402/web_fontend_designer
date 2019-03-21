/*20160616new line 14-22   line 93-102*/

$(".video .video-list a").click(function(e) {
    var _strindex = $(this).attr("href").indexOf("=") + 1; //32
    var _length = $(this).attr("href").length - 1; //42
    var _string = $(this).attr("href").substr(_strindex, _length);
    var _newiframesrc = "https://www.youtube.com/embed/" + _string;
    $(".youtubebox iframe").attr("src", _newiframesrc);
    //alert(_string);
    return false;
});


var nice = false;
$(document).ready(function() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) {} else {
        nice = $("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    };
    $(".video>.video-list").niceScroll({ autohidemode: false, cursorwidth: "10px", cursorcolor: "#5f5f5f", cursorborder: "none", horizrailenabled: false });

});

function hind() { alert("敬請期待"); }
/*alllink*/
var
    fblink = "http://www.facebook.com/sharer.php?u=http://apps.gameflier.com/wx2/index.aspx",
    fblink2 = "https://www.facebook.com/GFwx2/",
    linelink = "http://line.naver.jp/R/msg/text/?%E6%AD%A3%E6%B8%AF%E5%8F%B0%E7%81%A3%E6%AD%A6%E4%BF%A0%20%E4%B8%80%E7%B5%B1%E6%B1%9F%E6%B9%96%20http%3A%2F%2Fapps.gameflier.com%2Fwx2%2F",
    moenylink = "http://gf2.gameflier.com/mobile/billing/WX2/",
    playlink = "play.html",
    herolink = "hero.html",
    newslink = "newslist.aspx",
    fqalink = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=124",
    lawlink = "law.html",
    ioslink = "http://apps.gameflier.com/wx2/ReUrl/ios.aspx",
    apklink = "http://apps.gameflier.com/wx2/ReUrl/APK.aspx",
    googleplaylink = "http://apps.gameflier.com/wx2/ReUrl/Android.aspx",
    storylink = "story.html",
    cheat = "https://www.facebook.com/GFwx2/notes",
    /*tirolink*/
    tirolink = "tiro.html",
    tirolink1 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=99",
    tirolink2 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=103",
    tirolink3 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=36",
    tirolink4 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=41",
    tirolink5 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=74",
    tirolink6 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=92",
    tirolink7 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=93",
    tirolink8 = "",
    tirolink9 = "http://apps.gameflier.com/wx2/newspage.aspx?count=done&id=100",


    linkhome = "../wx2/index.aspx",
    bhlink = "http://forum.gamer.com.tw/A.php?bsn=30203";
	apklinkk = "http://apps.gameflier.com/wx2/upload/raiders/funwolin22.apk ";



//playlink="javascript:hind()";
//herolink="javascript:hind()";
//fqalink = "javascript:hind()";
//lawlink="javascript:hind()";
//ioslink="javascript:hind()";
//apklink="javascript:hind()";
//googleplaylink="javascript:hind()";
//storylink="javascript:hind()";
//tirolink="javascript:hind()";
//tirolink1 = "javascript:hind()";
//tirolink2 = "javascript:hind()";
tirolink8 = "javascript:hind()";
//tirolink9="javascript:hind()";

//$(".top li").eq(3).click(function() {window.open('http://sg.iyoyo.com.cn/html/SanolCN_V18');});
//$(".fblink").click(function() {javascript:location.href=fblink;});

function alllink() {


    $(".fblink").attr('href', fblink2);
    $(".linelink").attr('href', linelink);
    $(".moenylink").attr('href', moenylink);
    $(".playlink").attr('href', playlink);
    $(".herolink").attr('href', herolink);
    $(".newslink").attr('href', newslink);
    $(".fqalink").attr('href', fqalink);
    $(".lawlink").attr('href', lawlink);
    //$(".ios").attr('href', ioslink);
    //$(".apk").attr('href', apklink);
    //$(".googleplay").attr('href', googleplaylink);
    $(".linkhome").attr('href', linkhome);

    $(".ios").click(function() { window.open(ioslink); });
    //$(".apk").click(function() { window.open(apklink); });
    $(".googleplay").click(function() { window.open(googleplaylink); });

    $(".storyboxlink1").click(function() { javascript: location.href = playlink; });
    $(".storyboxlink2").click(function() { javascript: location.href = herolink; });
    $(".storyboxlink3").click(function() { javascript: location.href = storylink; });
    $(".storyboxlink4").click(function() { window.open(cheat); });
    $(".storyboxlink5").click(function() { javascript: location.href = tirolink; });
    $(".logo").click(function() { javascript: location.href = linkhome; });

    $(".fblink2").click(function() { window.open(fblink2); });
    $(".bhlink").click(function() { window.open(bhlink); });
	$(".apklinkk").click(function() { window.open(apklinkk); });

    /*tirolink*/
    $(".tirolink1").click(function() { javascript: location.href = tirolink1; });
    $(".tirolink2").click(function() { javascript: location.href = tirolink2; });
    $(".tirolink3").click(function() { javascript: location.href = tirolink3; });
    $(".tirolink4").click(function() { javascript: location.href = tirolink4; });
    $(".tirolink5").click(function() { javascript: location.href = tirolink5; });
    $(".tirolink6").click(function() { javascript: location.href = tirolink6; });
    $(".tirolink7").click(function() { javascript: location.href = tirolink7; });
    $(".tirolink8").click(function() { javascript: location.href = tirolink8; });
    $(".tirolink9").click(function() { javascript: location.href = tirolink9; });

    /*隱藏*/
    $(".eq").hide(0);
    $(".tirolink8").hide(0);
}

        function once(fn, context) {
            var result;

            return function() {
                if (fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }

                return result;
            };
        }

        // Usage
        var canOnlyFireOnce = once(function() {
            alllink();
        });

$(document).ready(function() {
    $('.top-list-load').load('common.html .top-list');
    $('.bar').load('common.html .common_bar', function() {

        $(".han-mb-ext").click(function() {
            $(".han-mb-list").slideUp();
            $("body").css("overflow", "visible");
        });
        $(".han-mb").click(function() {
            $(".han-mb-list").slideDown();
            $("body").css("overflow", "hidden");
        });
        $(".han-mb-list").slideUp();
    });

    $('.topbannerbar-load').load('common.html .topbannerbar', function() {
        canOnlyFireOnce();
        $(".han-mb-list-in").niceScroll({ autohidemode: false, cursorwidth: "0px", cursorcolor: "#5f5f5f", cursorborder: "none", horizrailenabled: false });

    });
    $('.footer').load('common.html .box');


    //$(".mainbannerbk").parallax("50%", 0.8);
    //$(".part-2").parallax("50%",.5);
    $('.newsbanners').slick({ dots: true, infinite: true, slidesToShow: 1, autoplay: true, autoplaySpeed: 6000 });
    //$(".video>.video-list").niceScroll({ autohidemode: false, cursorwidth: "10px", cursorcolor: "#5f5f5f", cursorborder: "none", horizrailenabled: false });

    $('.newssection').waypoint(
        function(direction) {
            if (direction == 'down') {
                $('#personL').addClass("goL");
                $('.news ul.list').addClass("goT");
            } else if (direction == 'up') {
                $('#personL').removeClass("goL");
            }
        }, {
            offset: '80%'
        }
    );
    $(".newsbtn a").click(function() {
        $(this).addClass("newsbtnnow").siblings().removeClass("newsbtnnow");
    });
    /*
    $(".cd-pagination li").click(function() {
        $(this).children("a").addClass("current");
        $(this).siblings().children("a").removeClass("current");
    });
*/
    $(".inpageinf-topbtn a").click(function() {
        $(this).addClass("inpageinf-topbtn-now").siblings().removeClass("inpageinf-topbtn-now");
    });
    /*inpagebtn*/
    $(".listbtninf").eq(0).fadeIn(300).siblings(".listbtninf").fadeOut(0);
    $(".inpage-listbtn li").click(function() {
        $('html, body').animate({ scrollTop: $("#tolistbtn").offset().top - 80 }, 200);
        var listbtnnum = $(this).index();
        //alert(listbtnnum);
        $(".listbtninf").eq(listbtnnum).fadeIn(300).siblings(".listbtninf").fadeOut(0);
        //$(".inpage-listbtn").fadeIn(0);
        $(this).addClass("inpage-listbtn-on").siblings().removeClass("inpage-listbtn-on");

    });
    $('#personR').waypoint(
        function(direction) {
            if (direction == 'down') {
                $('#personR').addClass("goR");
            } else if (direction == 'up') {
                $('#personR').removeClass("goR");
            }
        }, {
            offset: '70%'
        }
    );

    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    
    $(document).scroll(function(){
    var scroY = $(document).scrollTop();
    if(scroY>575){
        $(".inpageinf-rpage").css("top",scroY-550);
    }else{
        $(".inpageinf-rpage").css("top","0");
    }
});
});
/*
$(window).scroll(function() {
    if ($(window).scrollTop() > 900) {
        $('.wapperdown').css("background-attachment","fixed");
    } else {
        $('.wapperdown').css("background-attachment","scroll");
    }

});
*/
