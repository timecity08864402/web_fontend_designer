

$(document).ready(function(){
	/*topfloat*/
  $(document).scroll(function(){
  	bodyx = window.pageXOffset;
    if(bodyx>=0){
    	$('.top-all').animate({left:-bodyx},0);
    }
  });
  	/*toplink*/
  	$('.search').children().click(function() { $(this).attr('href',"search.html"); });
  	var topmenulink = $('.topmenu li');
  	topmenulink.eq(0).children().click(function() { $(this).attr('href',"itempart.html"); });
  	topmenulink.eq(1).children().click(function() { $(this).attr('href',"itempart2.html"); });
  	topmenulink.eq(2).children().click(function() { $(this).attr('href',"sale.html"); });
  	//topmenulink.eq(3).children().click(function() { $(this).attr('href',"itempart.html"); });
    $(".allhot-in>ul>li").children().click(function() { $(this).attr('href',"oneitem.html"); });
    $(".category_body>ul>li").children().click(function() { $(this).attr('href',"oneitem.html"); });

  	/*flexslider*/
 	var _clickTab=0,
  		flex_all=$(".slides>li").last().index()+1;/*banner總數*/

  	var bannerhtml="";
	for (var i = 0; i < flex_all; i++) {
		bannerhtml +="<li></li>"
	}
	$(".s-bar").html(bannerhtml);
  	pic_all();
	function pic_all(){
		if(_clickTab>=flex_all){
			_clickTab=0;
		}
		$('.s-bar>li').eq(_clickTab).addClass('s-bar-a').siblings('.s-bar>li').removeClass('s-bar-a');
	}
	function pic_fn(){
		pic_all();
		$('.slides').animate({left:(_clickTab*-1000)},600);
	}

	$('.s-bar>li').click(function() {
		var $this = $(this);
	    _clickTab = $this.index();  
		$this.addClass('s-bar-a').siblings('.s-bar>li').removeClass('s-bar-a');
		clearInterval(pic_turn_set);
		pic_fn();
		pic_turn_set = setInterval(function() {_clickTab++;pic_fn();}, 5000);
	});

	var pic_turn_set = setInterval(function() {
    _clickTab++;
    pic_fn();
     }, 5000);



  	/*hotscale*/


  	function hot_tab_click(){
  	  	/*商品數量判斷及換頁*/
  		var hot_item=0;
  		var hot_page=0;
  		var hot_tab=0;
  		$('.hotbox').each(function(){
  			 var $tab = $(this);
  			$('ul.righttab li',$tab).eq(hot_tab).addClass('righttab-a').siblings('.righttab>li').removeClass('righttab-a');
        $('ul.lefttab li',$tab).eq(hot_tab).addClass('lefttab-a').siblings('.lefttab>li').removeClass('lefttab-a');
  			$('div.hotbox-inf',$tab).eq(hot_tab).fadeIn(500).siblings('.hotbox-inf').fadeOut(0);
	  	$('ul.righttab li',$tab).click(function() {
	  		var $this = $(this);
			hot_tab = $this.index();
			$('ul.righttab li',$tab).eq(hot_tab).addClass('righttab-a').siblings('.righttab>li').removeClass('righttab-a');
      $('ul.lefttab li',$tab).eq(hot_tab).addClass('lefttab-a').siblings('.lefttab>li').removeClass('lefttab-a');
  			$('div.hotbox-inf',$tab).eq(hot_tab).fadeIn(500).siblings('.hotbox-inf').fadeOut(0);
		});
	});

  		$('.hotbox-inf').each(function(){
  			var now_hot_page=0;
			var $tabpag = $(this);
  			$('div.lbtn',$tabpag).click(function() {
				hot_item=$("div.allhot-in ul li",$tabpag).last().index()+1;
  				hot_page=Math.ceil(hot_item/4);
  				now_hot_page--;
  				$("div.allhot-in ul",$tabpag).animate({left:(now_hot_page*-880)},300);
          hot_page_fn();
  			});
  			 $('div.rbtn',$tabpag).click(function() {
				hot_item=$("div.allhot-in ul li",$tabpag).last().index()+1;
  				hot_page=Math.ceil(hot_item/4);
  				now_hot_page++;
  				$("div.allhot-in ul",$tabpag).animate({left:(now_hot_page*-880)},300);
          hot_page_fn();
  			});
  			function hot_page_fn(){
  			if(now_hot_page>=hot_page){
  				now_hot_page=0;
          $("div.allhot-in ul",$tabpag).animate({left:((now_hot_page-1)*-880)},0);
          $("div.allhot-in ul",$tabpag).animate({left:(now_hot_page*-880)},300);
  			}else if(now_hot_page<0){
  				now_hot_page=hot_page-1;
          $("div.allhot-in ul",$tabpag).animate({left:((now_hot_page+1)*-880)},0);
          $("div.allhot-in ul",$tabpag).animate({left:(now_hot_page*-880)},300);
  			}
  		}
  		});
	}
	hot_tab_click();
/*partitem*/
		var partitemnumber=0;
		$('.sidebar>div>ul>li>a').eq(partitemnumber).css({"color": "#666", "text-decoration": "underline"});


/*saleitem*/
	$('.salelist>li').hover(function(){
		$(this).children().children().addClass("sale-btn-hover");
	}, function(){
		$(this).children().children().removeClass("sale-btn-hover");
	});
  /*oneitem*/
//var toptietle_h= $(".oneitem-toptietle").outerHeight();
//$('.oneitem-toptietle-right>img').css({"height": toptietle_h,"width": toptietle_h});



  var wish =0;
  function wish_fn(){
    if(wish==0){
      $(".oneitem_towish").addClass("towish_off");
    }else{
      $(".oneitem_towish").removeClass("towish_off");
    }
  }
  wish_fn();
  $(".oneitem_towish").click(function() {
    if(wish==0){
      wish=1;
      wish_fn();
    }else{
      wish=0;
      wish_fn();
    }
  });
  /*oneitem-show*/
  $('.oneitem-s>li').eq(0).addClass('oneitem-s-li-a').siblings('.oneitem-s li').removeClass('oneitem-s-li-a');
    $('.oneitem-s>li').click(function() {
      var $this = $(this) ,
      itemshow = $this.index();
      $('.oneitem-s>li').eq(itemshow).addClass('oneitem-s-li-a').siblings('.oneitem-s li').removeClass('oneitem-s-li-a');
    });
    $('.u-review').fadeOut(0);
    $('.re2').click(function() {
      $('.u-review').fadeIn();
    });
    $('.re1').click(function() {
      var $tab = $(".hotbox-re");
      hot_tab = 1;
      $('ul.righttab li',$tab).eq(hot_tab).addClass('righttab-a').siblings('.righttab>li').removeClass('righttab-a');
      $('ul.lefttab li',$tab).eq(hot_tab).addClass('lefttab-a').siblings('.lefttab>li').removeClass('lefttab-a');
        $('div.hotbox-inf',$tab).eq(hot_tab).fadeIn(500).siblings('.hotbox-inf').fadeOut(0);
    });
    $('.writebtn').click(function() {
      $('.u-review').fadeIn();
    });
    /*review-box*/
    $(".review-list").fadeOut(0);
      var now_re_page=0;
      re_item=$(".review-list").last().index()+1;
      re_page=Math.ceil(re_item/10);
      var $tabpag = $(this);
      re_pagein_fn();
        $('div.review-list-left').click(function() {
          now_re_page--;
          re_page_fn();
          
        });
         $('div.review-list-right').click(function() {
          now_re_page++;
          re_page_fn();
        });
          function re_page_fn(){
          if(now_re_page>=re_page){
            now_re_page=0;
          }else if(now_re_page<0){
            now_re_page=re_page-1;
          }
          $(".review-list").fadeOut(0);
          re_pagein_fn();
          }
          function re_pagein_fn(){
          var review_list_inf="";
          for (var i = now_re_page*10; i <= now_re_page*10+9; i++) {
              $(".review-list").eq(i).fadeIn(500);
          }
         page_number=(now_re_page+1)+"/"+re_page;
          $(".review-list-pgtxt").html(page_number);
        }

        /*Your Reviews*/
        var star_number=0;
        var star_click=0;
        $(".u-review-star>li").hover(function(){
          var hover_star_number=$(this).index();
          for(var i = 0; i<=hover_star_number; i++){
            $(".u-review-star>li").eq(i).children().attr('src',"images/star_l_10.jpg");
          }
            /*$(this).attr("images/star_l_0.jpg");*/
            }, function(){
              if(star_click==0){
            $(".u-review-star>li").children().attr('src',"images/star_l_0.jpg");
            }else if (star_click==1){
              $(".u-review-star>li").children().attr('src',"images/star_l_0.jpg");
            for(var i = 0; i<=star_number; i++){
            $(".u-review-star>li").eq(i).children().attr('src',"images/star_l_10.jpg");
            }
          }
        });
        $(".u-review-star>li").click(function(){
          var hover_star_number=$(this).index();
          star_click=1;
          star_number=$(this).index();
          $(".u-review-star>li").children().attr('src',"images/star_l_0.jpg");
          for(var i = 0; i<=star_number; i++){
            $(".u-review-star>li").eq(i).children().attr('src',"images/star_l_10.jpg");
          }
        });
        /**/
    $(".preferences").click(function(){
      $(".currencybox-out,.currencybox-bk").fadeIn(500);
    });
    $(".cb-toclose").click(function(){
      $(".currencybox-out,.currencybox-bk").fadeOut(500);
    });
    /*totop*/
    $('.totop-out').fadeOut(0);
    $(".totop-out").click(function() {
      $('html,body').animate({
          scrollTop: 0
      }, 700);
    });
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.totop-out').fadeIn(500);
    } else {
        $('.totop-out').fadeOut(500);
    }

});