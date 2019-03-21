<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="wx2_index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>武林2  正港台灣武俠</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="title" content=" 武林2  正港台灣武俠" />
    <meta name="description" content="武林2  正港台灣武俠 一統江湖" />
    <link rel="image_src" href="http://apps.gameflier.com/wx2/images/fb2.jpg" />
    <meta property="og:url" content=" http://apps.gameflier.com/wx2/index.aspx">
    <meta property="og:image" content="http://apps.gameflier.com/wx2/images/fb2.jpg" />
    <meta property="og:Site_name" content="武林2" />
    <meta property="og:Description" content="武林2  正港台灣武俠 一統江湖" />
    <meta name="keywords" content="武林2 手遊 正宗" />
    <link href="stylesheets/screen.css" rel="stylesheet" type="text/css" />
    <script language="JavaScript" type="text/JavaScript">
        function SearchTag(tag, cont, contid) {
            //搜尋內容顯示
            var cont = document.getElementById(cont).getElementsByTagName('div');
            for (var i = 0; i < cont.length; i++) {
                cont[i].style.display = "none";
            }
            cont[contid].style.display = "block";
        }
    </script>
    <!--GA CODE-->
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-43186546-1', 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
    </script>
    
    <!-- Facebook Pixel Code -->
    <script>
        ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1613086452346347');
        fbq('track', "PageView");
        fbq('track', 'ViewContent');
    </script>

    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1613086452346347&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    <!--
    <script>
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone")) {
        location.href = "index_m.html";
    };
    </script>
    -->
</head>
<body>
    <form id="form1" runat="server">
    <div id="personL"></div>
    <div id="personR"></div>
    <div class="wrapper mainbannerbk">
        <!--part2-->
        <div class="topbanner wrapper-in">
            <div class="top-list-load pc-show"></div>
            <div class="bar mb-show"></div>
            <div class="topbannerbar-load"></div>
        </div>
    </div>
    <!--video-->
    <div class="wrapper part-video">
        <div class="videosection wrapper-in">
            <div class="video">
                <div class="youtubebox">
                    <iframe src="https://www.youtube.com/embed/zihC9IndaR0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="video-list">
                    <a href="https://www.youtube.com/watch?v=zihC9IndaR0">6/23 開戰一統江湖</a>
                    <a href="https://www.youtube.com/watch?v=K6082gYsAEk">萬人集氣 支持台灣之光</a>
                    <a href="https://www.youtube.com/watch?v=lF0G_WsWkSI">起手式II再探險境</a>
                    <a href="https://www.youtube.com/watch?v=J3iAQFAcsew">經典強勢回歸</a>
                    <a href="https://www.youtube.com/watch?v=WRear13q6GU">半瓶醋玩武林2初體驗</a>
                    <a href="https://www.youtube.com/watch?v=bdsFvzEAo-w">經典回憶再現</a>
                    <a href="https://www.youtube.com/watch?v=PQrJxgpA-3Q">故事起源</a>
                </div>
            </div>
        </div>
    </div>
    <!--part2-->
    <div class="wrapper part-news">
        <div class="newssection wrapper-in">
            <div class="tietle pc-show"><img src="images/newstietle.png"></div>
                <div class="newsbanner box">
                    <div class="newsbanners">
                        <asp:ListView runat="server" ID="NewsImageList">
                            <LayoutTemplate>
                                <asp:PlaceHolder ID="itemPlaceholder" runat="server"></asp:PlaceHolder>
                            </LayoutTemplate>
                            <ItemTemplate>
                                <div><a href="/wx2/goBulletin.aspx?type=image&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><img border="0" alt="<%# Eval("b_title") %>" src="<%# Eval("b_image") %>" ></a></div>
                            </ItemTemplate>
                        </asp:ListView>
                    </div>
                </div>
            <div class="tietle mb-show"><img src="images/newstietle.png"></div>
            <div class="news box">
                <div class="newsbtn" id="searchItem">
                    <a onmousedown="SearchTag('searchItem','searchCont','0');" class="trans-o-a newsbtnnow">所有</a>
                    <a onmousedown="SearchTag('searchItem','searchCont','1');" class="trans-o-a">重要</a>
                    <a onmousedown="SearchTag('searchItem','searchCont','2');" class="trans-o-a">活動</a>
                    <a onmousedown="SearchTag('searchItem','searchCont','3');" class="trans-o-a">系統</a>
                </div>
                <div id="searchCont">
                    <ul class="list">
                        <div>
                            <asp:Repeater ID="Newslist0" runat="server">
                                <ItemTemplate>
                                    <li class="<%# Eval("CssWord1") %> <%# Eval("CssWord") %>"><a href="/wx2/goBulletin.aspx?type=text&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><h4></h4><p><%# Eval("b_title")%></p><span><%# ((DateTime)Eval("create_time")).ToString("yyyy.MM.dd") %></span></a></li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </div>
                        <div style="display:none;">
                            <asp:Repeater ID="Newslist1" runat="server">
                                <ItemTemplate>
                                    <li class="<%# Eval("CssWord1") %> <%# Eval("CssWord") %>"><a href="/wx2/goBulletin.aspx?type=text&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><h4></h4><p><%# Eval("b_title")%></p><span><%# ((DateTime)Eval("create_time")).ToString("yyyy.MM.dd") %></span></a></li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </div>
                        <div style="display:none;">
                            <asp:Repeater ID="Newslist2" runat="server">
                                <ItemTemplate>
                                    <li class="<%# Eval("CssWord1") %> <%# Eval("CssWord") %>"><a href="/wx2/goBulletin.aspx?type=text&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><h4></h4><p><%# Eval("b_title")%></p><span><%# ((DateTime)Eval("create_time")).ToString("yyyy.MM.dd") %></span></a></li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </div>
                        <div style="display:none;">
                            <asp:Repeater ID="Newslist3" runat="server">
                                <ItemTemplate>
                                    <li class="<%# Eval("CssWord1") %> <%# Eval("CssWord") %>"><a href="/wx2/goBulletin.aspx?type=text&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><h4></h4><p><%# Eval("b_title")%></p><span><%# ((DateTime)Eval("create_time")).ToString("yyyy.MM.dd") %></span></a></li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </div>
                    </ul>
                </div>
                <a href="/wx2/newslist.aspx" class="more trans-o-a"></a>
            </div> 
        </div>
    </div>
    <!--part3-->
    <div class="wrapper part-2">
        <div class="storybox wrapper-in pc-show">
            <div class="storybox-big storybox1 storyboxlink1"></div>
            <div class="storybox-big storybox2 storyboxlink2"></div>
            <div class="storybox-s storybox3 storyboxlink3"></div>
            <div class="storybox-s storybox4 storyboxlink4"></div>
            <div class="storybox-s storybox5 storyboxlink5"></div>
        </div>
        <div class="storybox wrapper-in mb-show">
            <img class="storyboxlink1" src="images/part_2_btn_01.png">
            <img class="storyboxlink2" src="images/part_2_btn_02.png">
            <img class="storyboxlink3" src="images/part_2_btn_03.png">
            <img class="storyboxlink4" src="images/part_2_btn_04.png">
            <img class="storyboxlink5" src="images/part_2_btn_05.png">
        </div>
    </div>
    <!--part4-->
    <div class="wrapper part-3">
        <div class="sharebox wrapper-in">
            <div class="fb fblink2"></div>
            <div class="bh bhlink"></div>
            <div class="apkk apklinkk"></div>
        </div>
    </div>
    <!--part5-->
    <div class="wrapper part-cr">
        <div class="footer wrapper-in"></div>
    </div>
    </form>
    <script src="js/jquery-1.12.3.min.js" type="text/javascript"></script>
    <script src="js/slick.min.js" type="text/javascript"></script>
    <!--<script src="js/jquery.history.js" type="text/javascript"></script>-->
    <script src="js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="js/jquery.parallax-1.1.3.js" type="text/javascript"></script>
    <script src="js/myjs.js" type="text/javascript"></script>
    <!--formb-->
    <script>
        var agent = navigator.userAgent.toLowerCase();
        if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) {
            $(".mainbannerbk").css({ "background-attachment": "scroll", "background-position": "top center" });
            //$(".mainbannerbk").parallax("50%", -0.8);
        } else {
            $(".mainbannerbk").parallax("50%", .6);
            //$(".video>.video-list").niceScroll({ autohidemode: false, cursorwidth: "10px", cursorcolor: "#5f5f5f", cursorborder: "none", horizrailenabled: false });
        };
    </script>
</body>
</html>
