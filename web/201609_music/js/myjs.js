function scanmove() {
    $(".slogan>div").addClass("slogan-in");


}

function scanclear() {
    $(".slogan-l,.slogan-r").css("opacity", "0");
    $(".slogan>div").removeClass("slogan-in");
    $(".peo-bk").removeClass("peo-bk-an");

    $(".peo-l").removeClass("peo-1-rhover");
    $(".peo-bk1").removeClass("peo-bk1-rhover");
    $(".peo-r").removeClass("peo-r-rhover");
    $(".peo-bkr").removeClass("peo-bkr-rhover");
    $(".peo-r").removeClass("peo-r-lhover");
}


$(document).ready(function() {
    /*musicplay*/
    var musicnum = 0;
    var musicid = "music-b";

    var music_on = document.getElementById(musicid);

    var infpage = 0;
    function music_play(){
      music_on = document.getElementById(musicid);
      music_on.currentTime = 0;
      music_on.play();
      $('.music-icon').removeClass("music-icon-stop");
      musicnum = 0;
    }
    function music_stop(){
      $('.music-icon').addClass("music-icon-stop");
      music_on.pause();
      musicnum = 1;
    }

    $(".music-icon").click(function() {
        if (musicnum == 0) {
            music_stop();
        } else {
            music_play();
        }
    });

    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    $(".incont-stxt ,.peoinfbox").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 120 });
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    $(".logobtn-user").click(function() { window.open("https://gf2.gameflier.com/account/aloneregister.aspx"); });
    /*turnpage*/
    function infpage_fn(){
        if(infpage==0){
        $(".incont-out").removeClass("infpage2");
        $(".box-topbtn a").removeClass("topbtnpage2");
        $(".box-topbtn a").eq(0).addClass("topbtnpage2");
        $(".box-topbtn a").eq(4).addClass("topbtnpage2");
      }else if(infpage==2){
        $(".incont-out").addClass("infpage2");
        $(".box-topbtn a").removeClass("topbtnpage2");
        $(".box-topbtn a").eq(2).addClass("topbtnpage2");
        $(".box-topbtn a").eq(6).addClass("topbtnpage2");
      }
    }

    $(".turnpage").click(function() {
      infpage=$(this).index();
      infpage_fn();
    });

    $(".scan-a").click(function() {
        $(".scan").fadeOut(0);
        $(".slogan-out").fadeOut(500);
        $('.peo-bkr').addClass("peo-bkr-pagein");
        $('.peo-r').addClass("peo-r-pagein");
        $('.logo').addClass("logo-r-inpage");
        $(".slogan-inpage-r").fadeIn(500);
        $(".box-r").fadeIn(500);
        musicid = "music-n";
        infpage = 0;
        infpage_fn();
        music_play();
    });
    $(".scan-c").click(function() {
        $(".scan").fadeOut(0);
        $(".slogan-out").fadeOut(500);
        $('.peo-bkl').addClass("peo-bkl-pagein");
        $('.peo-l').addClass("peo-l-pagein");
        $('.logo').addClass("logo-l-inpage");
        $(".slogan-inpage-l").fadeIn(500);
        $(".box-l").fadeIn(500);
        musicid = "music-b";
        infpage = 0;
        infpage_fn();
        music_play();
    });

    $(".logobtn-back").click(function() {
        $(".scan").fadeIn(0);
        $(".slogan-out").fadeIn(500);
        $('.peo-bkr').removeClass("peo-bkr-pagein");
        $('.peo-r').removeClass("peo-r-pagein");
        $('.peo-bkl').removeClass("peo-bkl-pagein");
        $('.peo-l').removeClass("peo-l-pagein");
        $('.logo').removeClass("logo-r-inpage , logo-l-inpage");
        $(".slogan-inpage-l ,.slogan-inpage-r").fadeOut(200);
        $(".box-r ,.box-l").css("display", "none");
        music_stop();
    });


    var scannum = 0;
    $(".scan-b").mouseenter(function() {
        scannum = 0;
        scanclear();
    });
    $(".scan-a").mouseenter(function() {
        scannum = 1;
        scanclear();
        $(".peo-bkr").addClass("peo-bk-an");
        scanmove();
        $(".slogan-r").css("opacity", "1");
        $(".slogan>div").addClass("slogan-in");

        $(".peo-l").addClass("peo-1-rhover");
        $(".peo-bk1").addClass("peo-bk1-rhover");
        $(".peo-r").addClass("peo-r-rhover");
        $(".peo-bkr").addClass("peo-bkr-rhover");
    });
    $(".scan-c").mouseenter(function() {
        scannum = 2;
        scanclear();
        $(".peo-bkl").addClass("peo-bk-an");
        scanmove();
        $(".slogan-l").css("opacity", "1");
        $(".slogan>div").addClass("slogan-in");

        $(".peo-r").addClass("peo-r-lhover");

    });
    //close
$(".close").click(function() {alert("敬請期待");});


    //linkhash
    $(function() {
        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
/*colorbox*/
var youtubesrc ="";

$(".videobox").click(function() {
    var mvturn = $(this).index();
  if(scannum==1 && mvturn==0){
    youtubesrc = "https://www.youtube.com/v/QX6caiLQem4&autoplay=1";
  }else if(scannum==1 && mvturn==1){
    youtubesrc = "https://www.youtube.com/v/n-44bWsPPsk&autoplay=1";
  }else if(scannum==2 && mvturn==0){
    youtubesrc = "https://www.youtube.com/v/mlpKaPYmBSg&autoplay=1";
  }else if(scannum==2 && mvturn==1){
    youtubesrc = "https://www.youtube.com/v/CsoNtmR1xk0&autoplay=1";
  }
/*
    else if(scannum==2 && mvturn==0){
    youtubesrc = "https://www.youtube.com/v/mlpKaPYmBSg&autoplay=1";
  }else if(scannum==2 && mvturn==1){
    youtubesrc = "https://www.youtube.com/v/QX6caiLQem4&autoplay=1";
  }*/
  music_stop();
  $.colorbox({
   html : '<iframe width="100%" height="100%" src=' + youtubesrc + ' frameborder="0" allowfullscreen></iframe>', //在燈箱中要顯示的html字段
   width : 800, //燈箱中間區塊的寬度
   height : 450, //燈箱中間區塊的高度
  });
});

});
