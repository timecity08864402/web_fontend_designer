$(document).ready(function() {
    /*$.firefly({
        images: [ 'images/star.png', 'images/star2.png','images/star.png'], 
        total: 40, 
        on:'body'
    });*/
    /*J-sparks*/
    var spark = function() {
        if (!window.addEventListener) {
            return;
        }
        var canvas = document.getElementById('J-sparks'),
            ctx = canvas.getContext('2d'),
            canvasWidth = canvas.width,
            canvasHeight = canvas.height,
            sparkles = [],
            timer;

        function draw() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            sparkles.forEach(function(p, i) {
                ctx.fillStyle = i % 2 ? 'rgba(100%, 20%, 40%, 0.3)' : 'rgba(0%, 255%, 0% .9)';
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            });
            update();
        }

        function update() {
            sparkles.forEach(function(p, i) {
                p.y -= Math.cos(1 + p.d) + .5 + p.r / 2;
                p.x -= Math.sin(1) * 2;

                if (p.x < -5 || p.y < 0) {
                    if (i % 3 > 1) {
                        sparkles[i] = {
                            x: Math.random() * canvasWidth,
                            y: canvasHeight - 500,
                            r: p.r,
                            d: p.d
                        };
                    } else {
                        sparkles[i] = {
                            x: -8,
                            y: Math.random() * canvasHeight,
                            r: p.r,
                            d: p.d
                        };
                    }
                }
            });
        }

        function clear() {
            if (timer) {
                clearInterval(timer);
            }
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            reset();
        }

        function start() {
            timer = setInterval(draw, 8);
        }

        function reset() {
            var max = 150;
            for (var i = 0; i < max; i++) {
                sparkles[i] = {
                    x: Math.random() * canvasWidth + canvasWidth,
                    y: Math.random() * canvasHeight + canvasHeight,
                    //x: Math.random()* canvasWidth,
                    //y: Math.random()* canvasHeight,
                    r: Math.random() * 2 + .75,
                    d: Math.random() * max
                };
            }
        }

        function init() {
            reset();
        }

        return {
            init: init,
            clear: clear,
            start: start
        };
    }();
    spark && spark.init();
    spark && spark.start();

    $(".group1").colorbox({ rel: 'group1' });
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    $("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/

    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
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
    var inpagelink = location.hash.replace(/^.*#/, '');
    pagelink_fn();
    function pagelink_fn() {
        if (inpagelink === "") {
            $(".content").addClass("content-out").fadeOut(0);
        } else {
            $(".content").removeClass("content-out").fadeIn(300);
            $(".page").eq(inpagelink).fadeIn(500).siblings(".page").fadeOut(0);
            $('html,body').animate({ scrollTop: 400 }, 300);
        }
    }
    /*
    listbtn addClass list-active
    rightbox removeClass hindtxtbox
    inpagebg removeClass hideinpage
    */
    $(".data-link").click(function() {
        outlink = $(this).data('link');
        window.open(outlink);
    });
    $(".data-link-page").click(function() {
        inpagelink = $(this).data('link');
        javascript: location.href = "#" + inpagelink;
        pagelink_fn();
    });
    $(".close").click(function() {
        inpagelink = "";
        $(".page").removeClass("pagein");
        $('html,body').animate({ scrollTop: 0 }, 300);
        $(".content").addClass("content-out").fadeOut(300);
        $(".page").fadeOut(300);
        history.pushState('', document.title, window.location.pathname);
    });
    $(".notopen").click(function() {
        alert("敬請期待");
    });

});
