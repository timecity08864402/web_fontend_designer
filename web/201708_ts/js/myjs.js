$(document).ready(function() {
    $(".poeout").removeClass("poeout");
    var scrtime=0;
    $(document).scroll(function(){
        scrtime++;
        var scroY = $(document).scrollTop();
        if(scrtime>=2){
            $(".digin").toggleClass("digin2");
            scrtime=0;
        }

        if(scroY>575){
            $(".rightnav").css("top",scroY-550);
        }else{
            $(".rightnav").css("top","0");
        }
    });
    /*niceScroll*/
    $("html").niceScroll({ cursorcolor: "rgba(255,255,255,.8)" ,cursorborder: "0px solid #fff",cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50, zindex: 999 });
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/

    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
    /*endallheight*/

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    $(".tobtnpage").click(function() {
        var btnpagenum=$(this).index(".tobtnpage");
        $("html,body").animate({
                scrollTop: $(this).offset().top-200
            }, 300);
        $(this).toggleClass("active").siblings(".tobtnpage").removeClass("active");
        $(".btnpage").eq(btnpagenum).slideToggle().siblings(".btnpage").slideUp();
    });
    $(function() {
        $(".pagelink").click(function() {
            var target = $(this.hash);
            //$(".rightbtn ul li a").removeClass("rightbtn-active");
            //$(this).addClass("rightbtn-active");
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
        });
    });
    /*endanimatetop*/

    /*endclicklink*/
    $(".peo-1").waypoint(
          function(direction) {
              if (direction == 'down') {
                    $(".map,.peo-1,.peo-2,.peo-3,.slogan").addClass("poeout");
                } else if (direction == 'up') {
                    $(".map,.peo-1,.peo-2,.peo-3,.slogan").removeClass("poeout");
                }
            }, {offset: '-20%'});
    $(".content").waypoint(
          function(direction) {
              if (direction == 'down') {
                    $(".rightnav").fadeIn(500);
                } else if (direction == 'up') {
                    $(".rightnav").fadeOut(500);
                }
            }, {offset: '50%'});
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

    /*跳窗*/

    function outbox_fn(box_page){
            var alertboxw = $(window).width();
            if (alertboxw>800){alertboxw=800;}
            var $form = $(box_page);
            $.colorbox({
                    //iframe: true,
                    inline:true,
                    href:$form ,
                    width: alertboxw, //燈箱中間區塊的寬度
            });
            $('#closebox').click(function() {
                $.colorbox.close();
            });
    }
    function outdatabox_fn(box_page,box_tietle){
            var alertboxw = $(window).width();
            if (alertboxw>800){alertboxw=800;}
            var $form = $(box_page);
            $(".databox .data").eq(box_tietle).fadeIn(500).siblings().fadeOut(0);
            $.colorbox({
                    //iframe: true,
                    inline:true,
                    href:$form ,
                    width: alertboxw, //燈箱中間區塊的寬度
            });
            $('#closebox').click(function() {
                $.colorbox.close();
            });
    }
    $(".btnpage1 .outbox ,.btnpage2 .outbox,.btnpage3 .outbox").click(function() {
        outbox_fn(".successbox1");
    });
    $(".btnpage1 .outbox").click(function() {
        outbox_fn(".successbox2");
    });
    $(".outbox_search").click(function() {
        outbox_fn(".searchbox");
    });
    $(".outdatabox").click(function() {
        var box_tietle = $(this).data("tietle");
        outdatabox_fn(".databox",box_tietle);
    });

});
