<%@ Page Language="C#" AutoEventWireup="true" CodeFile="newslist.aspx.cs" Inherits="wx2_newslist" %>

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
    
</head>
<body>
    <form id="form1" runat="server">
    <div class="wrapper inpagebannerbk inpagebk-1">
        <div class="topbanner wrapper-in">
            <div class="top-list-load pc-show"></div>
            <div class="bar mb-show"></div>
            <div class="topbannerbar-load mb-show inpage-topbanner-load"></div>
            <div class="logo"></div>
        </div>
    </div>
    <!--inpagebar-->
    <div class="wrapper inpagebar">
        <div class="wrapper-in">
            <div class="inpage-tietlepic"><img src="images/inpage_tietlepic.png"></div>
            <div class="inpage-tietle"><img src="images/inpage_tietle_03.png"></div>
            <a href="wx2/index.aspx" class="inpage-back-out linkhome">
                <div class="inpage-back"><img src="images/left.png">返回首頁</div>
            </a>
        </div>
    </div>
    <div class="wrapper inpageinf">
        <div class="wrapper-in inpageinfborder">
            <div class="inpageinf-lpage">
                <div class="inpageinf-topbtn" id="searchItem">
                    <asp:LinkButton runat="server" ID="all" PostBackUrl="../wx2/newslist.aspx?type=All" OnClick="all_bulletin" CssClass="trans-o-a inpageinf-topbtn-now">所有</asp:LinkButton>
                    <asp:LinkButton runat="server" ID="imp" PostBackUrl="../wx2/newslist.aspx?type=A" OnClick="imp_bulletin" CssClass="trans-o-a">重要</asp:LinkButton>
                    <asp:LinkButton runat="server" ID="act" PostBackUrl="../wx2/newslist.aspx?type=C" OnClick="act_bulletin" CssClass="trans-o-a">活動</asp:LinkButton>
                    <asp:LinkButton runat="server" ID="sys" PostBackUrl="../wx2/newslist.aspx?type=D" OnClick="sys_bulletin" CssClass="trans-o-a">系統</asp:LinkButton>
			    </div>
                <div id="searchCont">
                    <ul class="list-page">
                        <asp:ListView runat="server" ID="BulletinList" OnPagePropertiesChanging="BulletinListView_PagePropertiesChanging">
                            <LayoutTemplate>
                                <div id="itemPlaceholder" runat="server"></div>
                            </LayoutTemplate>
                            <ItemTemplate>
                                <li class="<%# Eval("CssWord") %>"><a href="/wx2/goBulletin.aspx?type=text&id=<%# Eval("auto_id") %>" target="_<%# Eval("b_target") %>"><h4></h4><p><%# Eval("b_title")%></p><span><%# ((DateTime)Eval("create_time")).ToString("yyyy.MM.dd") %></span></a></li>
                            </ItemTemplate>
                        </asp:ListView>
                    </ul>
                </div>
                <!-- 分頁 -->
                <div id="searchpage">
                    <ul class="cd-pagination custom-buttons">
                        <asp:DataPager runat="server" ID="BulletinListViewPager" PageSize="15" PagedControlID="BulletinList">
                        <Fields>
                            <asp:TemplatePagerField OnPagerCommand="TemplatePagerField_OnPagerCommand">
                                <PagerTemplate>
                                     <asp:table ID="Table2" border="0" cellspacing="0" cellpadding="0" runat="server">
                                         <asp:TableRow>
                                            <asp:TableCell HorizontalAlign="Right">
                                                <li class="button">
                                                    <asp:LinkButton Font-Underline="false" Text="«" ID="FirstButton" runat="server" CommandName="First"  />
                                                </li>
                                            </asp:TableCell>
                                             <asp:TableCell>
                                                <li class="button">
                                                    <asp:LinkButton Font-Underline="false" Text="‹" ID="PrevButton" runat="server" CommandName="Previous"  />
                                                </li>
                                            </asp:TableCell>
                                            <asp:TableCell>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton1" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton2" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton3" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton4" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton5" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton6" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton7" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton8" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton9" runat="server" CommandName="Select" /></li>
                                               <li class="button"><asp:LinkButton Font-Underline="false" ID="LinkButton10" runat="server" CommandName="Select" /></li>
                                            </asp:TableCell>
                                            <asp:TableCell>
                                                <li class="button">
                                                    <asp:LinkButton Font-Underline="false" Text="›" ID="NextButton" runat="server" CommandName="Next"  />
                                                </li>
                                            </asp:TableCell>
                                            <asp:TableCell HorizontalAlign="Left">
                                                <li class="button">
                                                    <asp:LinkButton Font-Underline="false" Text="»" ID="LastButton" runat="server" CommandName="Last"  />
                                                </li>
                                            </asp:TableCell>
                                         </asp:TableRow>
                                    </asp:table>
                                </PagerTemplate>
                            </asp:TemplatePagerField>
                        </Fields>
                        </asp:DataPager>
                    </ul>
                </div>
            </div>
            <div class="inpageinf-rpage pc-show">
                <div class="topbannerbar-load pc-show"></div>
            </div>
        </div>
    </div>
    <!--cr-->
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
</body>
</html>
