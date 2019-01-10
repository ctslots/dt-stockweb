<!doctype html>
<html style="height:100%">
<head>
<meta charset="utf-8">
<title>股票行情</title>
<link type="css/text" rel="stylesheet" href="css/index.css">
</head>
<body >
<?php include 'template/header3.php'?>

<div class="wrap">
    <div class="homeHotBox">
        <div class="cBox01">
            <div class="infoBox01">
                <div class="title05">
                    <em class="em001"></em><h4>今日要闻</h4>
                    <span class="fr01">
                        <a target="_blank" class="more01" href="news/section-news?s=yaowen">更多<i class="iconfont"></i></a>
                    </span>
                </div>
                <div class="c01">
                    <div class="newsList-lg">
                        <ul>
                            <li class="hot">
                                <a href="//news.futunn.com/section/748193?src=25" title="休市安排：A股连休4天 港股端午节休市一天" target="_blank">休市安排：A股连休4天 港股端午节休市一天</a>
                            <span class="time01">17:21</span>
                            </li>
                            <li>
                                <a href="//news.futunn.com/section/748170?src=25" title="一文看后市：看这里！大数据透露节后走势" target="_blank">一文看后市：看这里！大数据透露节后走势</a>
                            <span class="time01">16:32</span>
                            </li>
                            <li>
                                <a href="//news.futunn.com/section/748168?src=25" title="证监会：拟修改上市公司大股东减持相关规定" target="_blank">证监会：拟修改上市公司大股东减持相关规定</a>
                            <span class="time01">16:31</span>
                            </li>
                            <li>
                                <a href="//news.futunn.com/section/748160?src=25" title="股市监管风暴未歇 IPO拖不垮市场" target="_blank">股市监管风暴未歇 IPO拖不垮市场</a>
                            <span class="time01">15:25</span>
                            </li>
                            <li>
                                <a href="//news.futunn.com/section/748152?src=25" title="乐视体育再融资25亿 去“贾跃亭化”成立战略委员会" target="_blank">乐视体育再融资25亿 去“贾跃亭化”成立战略委员会</a>
                            <span class="time01">15:18</span>
                            </li>
                          </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bannerBox">
            <ul>
                   <li style="display: list-item;">
                        <a href="https://live.futunn.com/university" title="牛牛大学" target="_blank">                    
                            <img src="https://pubimg.futunn.com/20170300022836293400adfce.jpg" width="660" height="300">
                        </a>                
                   </li>
                   <li style="display: none;">
                        <a href="https://act.futunn.com/margin-us/" title="美股融资0利息1个月" target="_blank">                    
                            <img src="https://pubimg.futunn.com/2017050004761279607834110.png" width="660" height="300">
                        </a>                
                    </li>
                    <li style="display: none;">
                        <a href="https://act.futunn.com/june" title="转仓入金5月活动" target="_blank">                    
                            <img src="https://pubimg.futunn.com/20170500049066338f5ca8109.jpg" width="660" height="300">
                        </a>                
                    </li>
                    <li style="display: none;">
                        <a href="https://www.futu5.com/activity/margin-us" title="美股融资融券上线" target="_blank">                    
                            <img src="https://pubimg.futunn.com/201702000195788af6ab474af.png" width="660" height="300">
                        </a>                
                    </li>
                    <li style="display: none;">
                        <a href="https://www.futu5.com/about/mediatopic?tid=468" title="腾讯证券获奖banner" target="_blank">                    
                            <img src="https://pubimg.futunn.com/20170100016029526d5017a69.jpg" width="660" height="300">
                        </a>               
                    </li>
            </ul>
            <div class="midSwitch">
                <a href="#" class="current"></a>
                <a href="#" class=""></a><a href="#" class=""></a>
                <a href="#" class=""></a><a href="#" class=""></a>
            </div>
            <a href="#" class="aBtnLeft"></a>
            <a href="#" class="aBtnRight"></a>
        </div>
    </div>

    <div class="gap02"></div>

    <div class="main04 clearBox">

        <div class="main04Left" style="width: 840px;">

            <div class="cBox01">

            <div class="tabBox03" id="marketSwitch">
                <ul>
                    <li data-type="3" class="current">
                        <a href="javascript:void(0)"><em class="cn"></em><span>沪深市场</span></a>
                    </li>
                    <li data-type="1">
                        <a href="javascript:void(0)"><em class="hk"></em><span>港股市场</span></a>
                    </li>
                    <li data-type="2">
                        <a href="javascript:void(0)"><em class="us"></em><span>美股市场</span></a>
                    </li>
                </ul>
            </div>
            <div class="infoBox01">
                <div id="plateSwitch" class="title05 title05-2">
                    <h4>个股排行</h4>
                        <div id="stock_3" class="tabBox01" style="">
                            <a data-id="3000005" data-type="cn" class="current" href="javascript:void(0)">沪深A股</a>
                            <a data-id="3000002" data-type="cn" href="javascript:void(0)">沪深指数</a>
                            <a data-id="3000000" data-type="cn" href="javascript:void(0)">上海主板</a>
                            <a data-id="3000001" data-type="cn" href="javascript:void(0)">深证主板</a>
                            <a data-id="3000003" data-type="cn" href="javascript:void(0)">中小板</a>
                            <a data-id="3000004" data-type="cn" href="javascript:void(0)">创业板</a>
                        </div>
                        <div id="stock_1" class="tabBox01" style="display: none;">
                            <a data-id="999910" data-type="hk" class="current" href="javascript:void(0)">港股主板</a>
                            <a data-id="999911" data-type="hk" href="javascript:void(0)">港股创业板</a>
                            <a data-id="999912" data-type="hk" href="javascript:void(0)">港股指数</a>
                        </div>
                        <div class="tabBox01" id="stock_2" style="display: none;">
                            <a href="javascript:void(0)" class="current" data-id="200304" data-type="us">美股中概股</a>
                            <a href="javascript:void(0)" data-id="200305" data-type="us">美股明星股</a>
                        </div>
                </div>
                <div class="c01 c02 clearBox" style="padding-bottom:0;">
                    <div class="div01 div01-up">
                        <div class="tBar001">涨幅<span class="fr01"><a href="/quote/top100?market=cn&amp;type=up100&amp;plate=3000005" class="more01 ui-more-up" target="_blank">更多<i class="iconfont"></i></a></span></div>
                        <div>
                            <table cellspacing="0" cellpadding="0" border="0" width="100%" class="tableList04">
                                <thead>
                                <tr class="trT01">
                                    <td width="17" valign="top"></td>
                                    <td width="55" valign="top">
                                        <div>代码</div>
                                    </td>
                                    <td valign="top">
                                        <div>名称</div>
                                    </td>
                                    <td align="right" width="85" valign="top">
                                        <div>最新价</div>
                                    </td>
                                    <td align="right" width="70" valign="top">
                                        <div>涨跌幅</div>
                                    </td>
                                </tr>
                                </thead>
                                <tbody id="raiseTop">
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-01-no1">1</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300659" target="_blank" class="aColor01" title="N中孚 300659">300659</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300659" target="_blank" class="aColor01" title="N中孚 300659">N中孚</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 up"><span>18.500</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="up">+43.97%</div>
        </td>
    </tr>
    
    <tr class="tr02">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-01">2</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600812" target="_blank" class="aColor01" title="华北制药 600812">600812</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600812" target="_blank" class="aColor01" title="华北制药 600812">华北制药</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 up"><span>6.230</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="up">+10.07%</div>
        </td>
    </tr>
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-01">3</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600250" target="_blank" class="aColor01" title="南纺股份 600250">600250</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600250" target="_blank" class="aColor01" title="南纺股份 600250">南纺股份</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 up"><span>11.830</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="up">+10.05%</div>
        </td>
    </tr>
    
    <tr class="tr02">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-01">4</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=002379" target="_blank" class="aColor01" title="鲁丰环保 002379">002379</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=002379" target="_blank" class="aColor01" title="鲁丰环保 002379">鲁丰环保</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 up"><span>8.000</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="up">+10.04%</div>
        </td>
    </tr>
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-01">5</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600537" target="_blank" class="aColor01" title="亿晶光电 600537">600537</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600537" target="_blank" class="aColor01" title="亿晶光电 600537">亿晶光电</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 up"><span>5.590</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="up">+10.04%</div>
        </td>
    </tr>
    
</tbody>
 </table>
      </div>
   </div>

<div class="div01 div01-down mr0">
<div class="tBar001">跌幅<span class="fr01"><a href="/quote/top100?market=cn&amp;type=down100&amp;plate=3000005" class="more01 ui-more-down" target="_blank">更多<i class="iconfont"></i></a></span></div>
<div>
    <table cellspacing="0" cellpadding="0" border="0" width="100%" class="tableList04">
        <thead>
        <tr class="trT01">
            <td width="17" valign="top"></td>
            <td width="55" valign="top">
                <div>代码</div>
            </td>
            <td valign="top">
                <div>名称</div>
            </td>
            <td align="right" width="85" valign="top">
                <div>最新价</div>
            </td>
            <td align="right" width="70" valign="top">
                <div>涨跌幅</div>
            </td>
        </tr>
        </thead>
        <tbody id="downTop">
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-02-no1">1</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600173" target="_blank" class="aColor01" title="卧龙地产 600173">600173</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sh&amp;code=600173" target="_blank" class="aColor01" title="卧龙地产 600173">卧龙地产</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 down"><span>8.330</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="down">-10.04%</div>
        </td>
    </tr>
    
    <tr class="tr02">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-02">2</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300235" target="_blank" class="aColor01" title="方直科技 300235">300235</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300235" target="_blank" class="aColor01" title="方直科技 300235">方直科技</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 down"><span>21.920</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="down">-10.02%</div>
        </td>
    </tr>
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-02">3</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=002045" target="_blank" class="aColor01" title="国光电器 002045">002045</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=002045" target="_blank" class="aColor01" title="国光电器 002045">国光电器</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 down"><span>16.000</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="down">-10.01%</div>
        </td>
    </tr>
    
    <tr class="tr02">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-02">4</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=000893" target="_blank" class="aColor01" title="东凌国际 000893">000893</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=000893" target="_blank" class="aColor01" title="东凌国际 000893">东凌国际</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 down"><span>9.620</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="down">-10.01%</div>
        </td>
    </tr>
    
    <tr class="tr01">
        <td valign="top">
            <div><span class="numPxBox01 numPxBg-02">5</span>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300072" target="_blank" class="aColor01" title="三聚环保 300072">300072</a>
            </div>
        </td>
        <td valign="top">
            <div class="tf"><a href="/quote/stock?m=sz&amp;code=300072" target="_blank" class="aColor01" title="三聚环保 300072">三聚环保</a>
            </div>
        </td>
        <td align="right" valign="top">
            <div class="price01 down"><span>35.020</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div>
        </td>
        <td align="right" valign="top">
            <div class="down">-10.00%</div>
        </td>
    </tr>
    
</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <div class="gap02"></div>

            <div class="cBox01">
                <div class="infoBox01" id="newsWrapper">
                    <div class="title05">
                        <em class="em001"></em><h4>直播</h4>
                        <div class="refreshBar">
                            <span class="time">（<font class="news-lastTime">2017年05月26日 18:07:59</font>）</span>
                            <label class="checkbox01">
                                <input type="checkbox" checked="checked" class="news-timer-switch"><u><span class="news-timer-count">57</span>秒后刷新</u>
                            </label>
                            <a href="javascript:void(0);" class="news-action">刷新</a>
                        </div>
                        <span class="fr01">
                            <a href="news/infolive?s=news" class="more01" target="_blank">更多<i class="iconfont">
                                </i></a>
                        </span>
                    </div>
                    <div class="c01">
                        <div class="kxList01">
                            <ul class="news-list"><li><em></em><span class="time01">17:50:52</span>渣打提高以香港HIBOR利率为基准的按揭利率10个基点。渣打发言人：上调按揭利率自5月29日生效。</li><li><em></em><span class="time01">17:50:28</span>信和置业等组成的财团中标港铁公司的锦上路站地块。</li><li><em></em><span class="time01">17:45:15</span>台湾4月景气下降至黄蓝灯 中止连续九绿灯。</li><li><em></em><span class="time01">17:42:15</span>默克尔将在5月31日及6月1日在柏林会晤中国总理李克强。</li><li class="last"><em></em><span class="time01">17:41:53</span>交行:人民币贬值和资本外流有加大可能 调整中间价避免汇率剧烈波动。</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main04Right">
            <div id="creditsSignBox" class="cBox01 sign-box">
                <div class="title01">
                    <h3>每日签到</h3>
                </div>
                <div class="sign-content">
                    <i class="sign-icon iconfont">&nbsp;</i>
                                            <div class="sign-text">
                            <p class="text01">签到赚积分</p>
                            <p class="text02">连续签到越多，奖励越丰富</p>
                        </div>
                        <div class="sign-foot">
                            <a class="sign-btn ui-login-link" href="" style="margin-left: 66px;">签到</a>
                        </div>
                                    </div>
            </div>


            <div class="cBox01">
                <div class="title01">
                    <h3>牛油动态</h3>
                </div>
                <div class="c04">
                    <div class="dynamicList01">
                        <ul>
    
    <li>
        <p class="p01">
            <b>冬&nbsp;蟲&nbsp;夏&nbsp;草7004310</b>卖出 <a href="/quote/stock?m=hk&amp;code=00372" target="_blank">00372.HK
            德祥企业</a>，模拟练习收益<span class="down">0%</span>
        </p>

        <p class="p02">2小时前&nbsp;&nbsp;
            
            来源：<a href="/trade/hk-trade" target="_blank">模拟练习区</a>
            </p>
    </li>
    
    <li>
        <p class="p01">
            <b>☞♂￥缘♥5976259</b>卖出 <a href="/quote/stock?m=hk&amp;code=08027" target="_blank">08027.HK
            吉辉控股</a>，模拟练习收益<span class="down">0%</span>
        </p>

        <p class="p02">2小时前&nbsp;&nbsp;
            
            来源：<a href="/trade/hk-trade" target="_blank">模拟练习区</a>
            </p>
    </li>
    
    <li>
        <p class="p01">
            <b>投资管家-张一山5996440</b>卖出 <a href="/quote/stock?m=hk&amp;code=00538" target="_blank">00538.HK
            味千(中国)</a>，模拟练习收益<span class="down">0%</span>
        </p>

        <p class="p02">2小时前&nbsp;&nbsp;
            
            来源：<a href="/trade/hk-trade" target="_blank">模拟练习区</a>
            </p>
    </li>
    
    <li>
        <p class="p01">
            <b>tianxia</b>卖出 <a href="/quote/stock?m=hk&amp;code=08207" target="_blank">08207.HK
            中国信贷</a>，模拟练习收益<span class="up">+2.77%</span>
        </p>

        <p class="p02">2小时前&nbsp;&nbsp;
            
            来源：<a href="/trade/hk-trade" target="_blank">模拟练习区</a>
            </p>
    </li>
    
    <li>
        <p class="p01">
            <b>投资管家-张一山5996440</b>买入 <a href="/quote/stock?m=hk&amp;code=00586" target="_blank">00586.HK
            海螺创业</a>，模拟练习收益<span class="down">0%</span>
        </p>

        <p class="p02">2小时前&nbsp;&nbsp;
            
            来源：<a href="/trade/hk-trade" target="_blank">模拟练习区</a>
            </p>
    </li>
    
</ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>





</body>

</html>

