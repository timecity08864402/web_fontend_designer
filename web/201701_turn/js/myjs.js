$(document).ready(function() {

    /*niceScroll*/
    $("html").niceScroll({cursorcolor: "#fff" , cursorwidth: "5px", mousescrollstep: 50, scrollspeed: 50 });
    /*endniceScroll*/
    $(".peo1 ,.peo2 ,.peo3").removeClass("outpicdown");
    $(".slogan").removeClass("outfadeinleft");
    $('.contant').waypoint(
        function(direction) {
            if (direction == 'down') {
                $(".peo1 ,.peo2 ,.peo3").addClass("outpicdown");
                $(".slogan").addClass("outfadeinleft");
            } else if (direction == 'up') {
                $(".peo1 ,.peo2 ,.peo3").removeClass("outpicdown");
                $(".slogan").removeClass("outfadeinleft");
            }
        }, {
            offset: '50%'
        }
    );
    $('.awardtable').waypoint(
        function(direction) {
            if (direction == 'down') {
                $(".peo4").removeClass("outpicleft");
                $(".peo5").removeClass("outpicright");
            } else if (direction == 'up') {
                $(".peo4").addClass("outpicleft");
                $(".peo5").addClass("outpicright");
            }
        }, {
            offset: '45%'
        }
    );
    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });



    /*狀態*/
    var step=0;

    /*得獎*/
    function gotoaward_fn(){
        setTimeout(function(){
            $(".awardtable").addClass("end");
            $(".awardtable").removeClass("awardrun");
            $(".awardtable").fadeOut(0).fadeIn(0);
            $(".awardmidbox-start").hide(0);
            $(".awardmidbox-end").fadeIn();
            step=1;
        },1500)
    }
    /*得獎關閉*/
    $(".awardmidbox-end .close").click(function() {
        $(".awardmidbox-start").fadeIn();
        $(".awardmidbox-end").hide(0);
    });
    /*抽獎btn*/
    $(".goturn a").click(function() {
        if(step==1){
            $(".awardtable").removeClass("end");
            $(".awardtable").removeClass("start");
            $(".awardtable").addClass("awardrun");
            $(".awardtable").fadeOut(0).fadeIn(0);
            step=2;
            gotoaward_fn();
        }else if(step==2){

        }else{
            alert("請先登入");
        }
    });
    $(".loggf").click(function() {
        loginafter_fn();
    });
    /*登出*/
    $(".logout").click(function() {
        if(step==1){
            loginbefore_fn();
        }
        
    });
    /*登入前*/
    function loginbefore_fn(){
        $(".loggf").fadeIn();
        $(".login").hide(0);
        $(".awardtable").addClass("start");
        $(".goturn").addClass("goturnstart");
        $(".awardtable").removeClass("awardrun");
        $(".awardtable").fadeOut(0).fadeIn(0);
        step=0;
    }
    /*登入後*/
    function loginafter_fn(){
        $(".loggf").hide();
        $(".login").fadeIn(0);
        $(".goturn").removeClass("goturnstart");
        step=1;
    }


    /*endanimatetop*/
    /*clicklink*/
    //$(".gf-gift").click(function() { window.open(""); });
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
