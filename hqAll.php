<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>股票行情-模拟炒股,港股美股A股模拟交易,股票实时行情</title>
  <link type="css/text" rel="stylesheet" href="css/common.css">
  <link type="text/css" rel="stylesheet" href="css/quote.css"/>
  <link type="text/css" rel="stylesheet" href="css/iconfont.css?v=9c5ee2fb005571408d421e4c51ce41df"/>
  <link type="text/css" rel="stylesheet" href="css/socket.css"/>
 </head>
 <body>
<?php include "template/header.php"?> 
<div class="wrap">
<?php include "template/nav.php"?> 
<div class="main04 clearBox">
<div class="main04Left">
<div class="cBox01 zxBox01">
    <div class="zsTab001">
        <ul id="indexQuote">
        
            <li data-type="hk" data-id="800000" class="up ">
            <p class="p01">恒生指数</p>
            <p class="p03">24662.210</p>
            <p class="p02">
                <span class="span01">+84.300</span><span class="span02">+0.34%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="hk" data-id="800100" class="up ">
            <p class="p01">国企指数</p>
            <p class="p03">10027.320</p>
            <p class="p02">
                <span class="span01">+44.900</span><span class="span02">+0.45%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="us" data-id="200002" class="up ">
            <p class="p01">纳斯达克综合指数</p>
            <p class="p03">6102.660</p>
            <p class="p02">
                <span class="span01">+1.902</span><span class="span02">+0.03%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="us" data-id="200003" class="up ">
            <p class="p01">标普500指数</p>
            <p class="p03">2399.380</p>
            <p class="p02">
                <span class="span01">+0.090</span><span class="span02">+0.00%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="us" data-id="200001" class="up ">
            <p class="p01">道琼斯指数</p>
            <p class="p03">21012.280</p>
            <p class="p02">
                <span class="span01">+5.340</span><span class="span02">+0.03%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="sh" data-id="1000001" class="down current">
            <p class="p01">上证指数</p>
            <p class="p03">3077.670</p>
            <p class="p02">
                <span class="span01">-0.940</span><span class="span02">-0.03%</span>
            </p>
            <em></em>
        </li>
        
            <li data-type="sz" data-id="2399001" class="up ">
            <p class="p01">深证成指</p>
            <p class="p03">9847.120</p>
            <p class="p02">
                <span class="span01">+13.955</span><span class="span02">+0.14%</span>
            </p>
            <em></em>
        </li>
        
    </ul>
    </div>
    <div class="tbC01" id="chartsWrapper">
    	<div class="tabBox01">
            <a href="javascript:void(0)" class="js-chart-btn current" data-target="chartWrapper">分时图</a>
            <!--
            <a href="javascript:void(0)" class="js-chart-btn" data-target="kChartWrapper" data-type="2">日K</a>
            <a href="javascript:void(0)" class="js-chart-btn" data-target="kChartWrapper" data-type="3">周K</a>
            <a href="javascript:void(0)" class="js-chart-btn" data-target="kChartWrapper" data-type="4">月K</a>
            -->
        </div>
         <div class="kFlash01" id="chartWrapper" style="position: relative; height: 335px; width: 793px;">
            <div id="main" style="width: 793px;height:335px;"></div>
           
        </div>
     
    </div>
</div>

<div class="gap02"></div>

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
                <td width="55" valign="top"><div>代码</div></td>
                <td valign="top"><div>名称</div></td>
                <td align="right" width="85" valign="top"><div>最新价</div></td>
                <td align="right" width="70" valign="top"><div>涨跌幅</div></td>
            </tr>
            </thead>
            <tbody id="raiseTop">
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-01-no1">1</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=603229" target="_blank" class="aColor01" title="N奥翔 603229">603229</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=603229" target="_blank" class="aColor01" title="N奥翔 603229">N奥翔</a></div></td>
            <td align="right" valign="top"><div class="price01 up"><span>11.250</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="up">+44.05%</div></td>
        </tr>
        
        <tr class="tr02">
            <td valign="top"><div><span class="numPxBox01 numPxBg-01">2</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=603728" target="_blank" class="aColor01" title="N鸣志 603728">603728</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=603728" target="_blank" class="aColor01" title="N鸣志 603728">N鸣志</a></div></td>
            <td align="right" valign="top"><div class="price01 up"><span>16.170</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="up">+43.99%</div></td>
        </tr>
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-01">3</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=300651" target="_blank" class="aColor01" title="N金陵 300651">300651</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=300651" target="_blank" class="aColor01" title="N金陵 300651">N金陵</a></div></td>
            <td align="right" valign="top"><div class="price01 up"><span>19.740</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="up">+43.98%</div></td>
        </tr>
        
        <tr class="tr02">
            <td valign="top"><div><span class="numPxBox01 numPxBg-01">4</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000795" target="_blank" class="aColor01" title="英洛华 000795">000795</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000795" target="_blank" class="aColor01" title="英洛华 000795">英洛华</a></div></td>
            <td align="right" valign="top"><div class="price01 up"><span>6.450</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="up">+10.07%</div></td>
        </tr>
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-01">5</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=601991" target="_blank" class="aColor01" title="大唐发电 601991">601991</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=601991" target="_blank" class="aColor01" title="大唐发电 601991">大唐发电</a></div></td>
            <td align="right" valign="top"><div class="price01 up"><span>4.930</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="up">+10.04%</div></td>
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
                <td width="55" valign="top"><div>代码</div></td>
                <td valign="top"><div>名称</div></td>
                <td align="right" width="85" valign="top"><div>最新价</div></td>
                <td align="right" width="70" valign="top"><div>涨跌幅</div></td>
            </tr>
            </thead>
            <tbody id="downTop">
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-02-no1">1</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=600151" target="_blank" class="aColor01" title="航天机电 600151">600151</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=600151" target="_blank" class="aColor01" title="航天机电 600151">航天机电</a></div></td>
            <td align="right" valign="top"><div class="price01 down"><span>9.870</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="down">-10.03%</div></td>
        </tr>
        
        <tr class="tr02">
            <td valign="top"><div><span class="numPxBox01 numPxBg-02">2</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000702" target="_blank" class="aColor01" title="正虹科技 000702">000702</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000702" target="_blank" class="aColor01" title="正虹科技 000702">正虹科技</a></div></td>
            <td align="right" valign="top"><div class="price01 down"><span>11.590</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="down">-10.02%</div></td>
        </tr>
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-02">3</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=600602" target="_blank" class="aColor01" title="云赛智联 600602">600602</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sh&amp;code=600602" target="_blank" class="aColor01" title="云赛智联 600602">云赛智联</a></div></td>
            <td align="right" valign="top"><div class="price01 down"><span>8.450</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="down">-10.01%</div></td>
        </tr>
        
        <tr class="tr02">
            <td valign="top"><div><span class="numPxBox01 numPxBg-02">4</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000503" target="_blank" class="aColor01" title="海虹控股 000503">000503</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000503" target="_blank" class="aColor01" title="海虹控股 000503">海虹控股</a></div></td>
            <td align="right" valign="top"><div class="price01 down"><span>27.700</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="down">-10.01%</div></td>
        </tr>
        
        <tr class="tr01">
            <td valign="top"><div><span class="numPxBox01 numPxBg-02">5</span></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000516" target="_blank" class="aColor01" title="国际医学 000516">000516</a></div></td>
            <td valign="top"><div class="tf"><a href="/quote/stock?m=sz&amp;code=000516" target="_blank" class="aColor01" title="国际医学 000516">国际医学</a></div></td>
            <td align="right" valign="top"><div class="price01 down"><span>7.110</span><i class="iconfont"><font class="font up-font"></font><font class="font down-font"></font><font class="font flat-font"></font></i></div></td>
            <td align="right" valign="top"><div class="down">-10.00%</div></td>
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
            <em class="em001"></em><h4>实时资讯</h4>
            <div class="refreshBar">
                <span class="time">（<font class="news-lastTime">2017年05月09日 11:37:12</font>）</span>
                <label class="checkbox01">
                    <input type="checkbox" checked="checked" class="news-timer-switch"><u><span class="news-timer-count">41</span>秒后刷新</u>
                </label>
                <a href="javascript:void(0);" class="news-action">刷新</a>
            </div>
            <span class="fr01"><a href="/news/infolive" class="more01" target="_blank">更多<i class="iconfont"></i></a></span>
        </div>
        <div class="c01">
            <div class="kxList01">
                <ul class="news-list"><li><em></em><span class="time01">11:32:22</span>上证综指上午收盘下跌0.03%，报3077.67；深证成指上涨0.14%，报9847.12；创业板板指上涨0.17%，报1791.67。</li><li><em></em><span class="time01">11:31:10</span>【国际巨头亨斯迈上调全球销售钛白粉价格】国际钛白粉巨头亨斯迈8日宣布，上调其在全球销售的二氧化钛(钛白粉)颜料价格。以下提价将于2017年7月1日起生效，或另见合同要求：欧洲、亚太、非洲、中东和拉丁美洲：上调250欧元/吨或250美元/吨；以下提价将于2017年6月1日起生效，或另见合同要求。北美地区，上调0.08美元/磅。</li><li><em></em><span class="time01">11:30:54</span>【两部门正就灰霾成因及治理组织项目论证】中科院院长白春礼表示，目前环保部、科学院两家正在提出关于灰霾的成因以及治理方式，组织一个大的项目，目前正在项目的论证过程当中。（上证）</li><li><em></em><span class="time01">11:30:08</span>【甘肃将对百余家重点行业企业实施强制清洁生产】5月份起，甘肃将对辖区内的百余家企业实施强制清洁生产，以进一步减少污染物排放。2017年，甘肃将对102家重点行业企业实施清洁生产，目前已经开始对这些企业进行清洁生产审核，甘肃省环保厅已向社会公布了102家企业名单。这些企业涉及造纸、焦化、氮肥、有色金属、石油、化工、印染、农副食品加工、制药、制革、农药、电镀、建材、供热等十余类行业。（新华社）</li><li><em></em><span class="time01">11:23:32</span>【国新办未来还将连续举行5场新闻发布会介绍"一带一路"】自5月8日起，国新办将连续举行7场新闻发布会，邀请国家发改委、工信部、交通部、商务部、国资委、中科院、国研中心等部门和有关金融机构、央企、研究机构的负责人出席 ，介绍“一带一路”互联互通情况。8日、9日国新办已分别举行央企参与“一带一路”建设和中科院科技支撑“一带一路”发布会。
（上证）</li><li><em></em><span class="time01">11:22:45</span>全国乘联会：中国4月份广义乘用车销量169万辆。同比下跌1.7%。中国1-4月份广义乘用车销量727万辆，下跌1.4%。</li><li><em></em><span class="time01">11:21:10</span>【工信部：运用市场化法治化手段 坚决淘汰不达标的落后产能】5月8日，工信部召开淘汰落后产能工作部际协调小组办公室会议，工信部总工程师张峰要求，更多运用市场化法治化手段，坚决淘汰不达标的落后产能。按照2017年重点工作任务，明确时间节点要求，把握好工作节奏和力度。</li><li><em></em><span class="time01">11:17:53</span>【鸿海股价上涨 有报道称公司将独享iPhone 8装配大单】鸿海股价在台北一度上涨4.5%，创出了4月5日以来的最大盘中涨幅，先前有报道称，鸿海将成为新款iPhone手机的独家装配商。 台湾《工商时报》报道称，苹果高阶OLED版iPhone 8组装大单，外传将由鸿海独食。报道没有说明消息来源。</li><li><em></em><span class="time01">11:15:19</span>【河南严禁授信支持煤钢企业 停止审批新项目】近日河南省政府印发文件，要求对钢铁、电解铝、水泥、平板玻璃、船舶等产能严重过剩行业的项目，不得备案新增产能项目，不得办理土地供应、能评、环评审批和新增授信支持等相关业务，并要求从2016年起3年内，原则上停止审批新建煤矿项目。据悉，2017年8月底前，仅郑州就将退出煤矿18家，每关闭一处奖励250万元。（证券时报）
</li><li class="last"><em></em><span class="time01">11:10:42</span>隔夜Shibor报2.8199%，上涨0.19基点；7天期Shibor报2.9233%，涨1.42基点；3个月Shibor报4.3848%，涨1.17基点。</li></ul>
            </div>
        </div>
    </div>
</div>

</div>

<div class="main04Right">
    
    <div class="cBox01 rightSoftDowBox">
        <div class="t001">
            <p class="p01">下载富途牛牛</p>
            <p class="p02">富途桌面端及手机客户端产品</p>
        </div>
        <div class="c001">
            <span class="openBar01">
                <a href="/download/windows" class="pc" target="_blank" title="富途牛牛 for Windows"><em class="iconfont"></em></a>
                <a href="/download/mac" class="mac" target="_blank" title="富途牛牛 for MAC"><em class="iconfont"></em></a>
                <a href="/download/iphone" class="ios" target="_blank" title="富途牛牛 for iPhone"><em class="iconfont"></em></a>
                <a href="/download/android" class="android" target="_blank" title="富途牛牛 for Android"><em class="iconfont"></em></a>
            </span>
        </div>
    </div>
    
    <div class="gap02"></div>

    <div class="cBox01">
        <div class="title01">
            <h3>自选股</h3>
        </div>
        <div class="c01-2">
            <div class="tabBox01" id="watchSwitch">
                <a href="javascript:void(0);" data-market-type="3" class="current">沪深</a>
                <a href="javascript:void(0);" data-market-type="1">港股</a>
                <a href="javascript:void(0);" data-market-type="2">美股</a>
            </div>
            <div class="myStockList01">
                <ul id="watchList">
        
        <li class="li01" align="center">
        
        <div>查看自选股,请先<a href="javascript:void(0)" class="ui-require-login">登录</a></div>
        
        </li>
        
        <li class="li02">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
        <li class="li01">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
        <li class="li02">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
        <li class="li01">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
        <li class="li02">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
        <li class="li01">
        
        <div class="div01">
            <p class="p01"><a class="aColor01" target="_blank" href="/quote/stock?m=&amp;code=" style="cursor: default;">--</a></p>
            <p class="p02">--</p>
        </div>
        <div class="div02 flat">
            <p class="p01">--</p>
            <p class="p02">
                <span class="span01">--</span>
                <span class="span02">--</span>
            </p>
        </div>
        
        </li>
        
    </ul>
            </div>
        </div>
    </div>

    <div class="gap02"></div>

    <div class="cBox01">
        <div class="title01">
            <h3>热门持仓股</h3>
        </div>
        <div class="c01-2">
            <div class="tabBox01" id="hotPositionsSwitch">
                <a href="javascript:void(0);" data-market-type="3" class="current">沪深</a>
                <a href="javascript:void(0);" data-market-type="1">港股</a>
                <a href="javascript:void(0);" data-market-type="2">美股</a>
            </div>
            <div class="line01"></div>
            <div>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" class="tableList04">
                    <thead>
                    <tr class="trT01">
                        <td valign="top"><div>名称</div></td>
                        <td align="right" width="63" valign="top"><div>涨跌幅</div></td>
                        <td align="right" width="50" valign="top"><div>持仓人数</div></td>
                    </tr>
                    </thead>
                    <tbody id="hotPositionsList">
        
        <tr class="tr01">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=000001">平安银行</a></div></td>
        <td align="right" valign="top"><div class="up">+0.58%</div></td>
        <td align="right" valign="top"><div>2460</div></td>
        
        </tr>
        
        <tr class="tr02">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=300104">乐视网</a></div></td>
        <td align="right" valign="top"><div class="flat">0.00%</div></td>
        <td align="right" valign="top"><div>1400</div></td>
        
        </tr>
        
        <tr class="tr01">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sh&amp;code=600030">中信证券</a></div></td>
        <td align="right" valign="top"><div class="down">-0.06%</div></td>
        <td align="right" valign="top"><div>1178</div></td>
        
        </tr>
        
        <tr class="tr02">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sh&amp;code=601766">中国中车</a></div></td>
        <td align="right" valign="top"><div class="down">-0.40%</div></td>
        <td align="right" valign="top"><div>780</div></td>
        
        </tr>
        
        <tr class="tr01">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sh&amp;code=600074">保千里</a></div></td>
        <td align="right" valign="top"><div class="down">-0.16%</div></td>
        <td align="right" valign="top"><div>645</div></td>
        
        </tr>
        
        <tr class="tr02">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=000333">美的集团</a></div></td>
        <td align="right" valign="top"><div class="down">-1.46%</div></td>
        <td align="right" valign="top"><div>371</div></td>
        
        </tr>
        
        <tr class="tr01">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=000725">京东方A</a></div></td>
        <td align="right" valign="top"><div class="up">+0.81%</div></td>
        <td align="right" valign="top"><div>284</div></td>
        
        </tr>
        
        <tr class="tr02">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sh&amp;code=600028">中国石化</a></div></td>
        <td align="right" valign="top"><div class="down">-0.35%</div></td>
        <td align="right" valign="top"><div>246</div></td>
        
        </tr>
        
        <tr class="tr01">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=000002">万科A</a></div></td>
        <td align="right" valign="top"><div class="up">+0.54%</div></td>
        <td align="right" valign="top"><div>235</div></td>
        
        </tr>
        
        <tr class="tr02">
        
        <td valign="top"><div class="tf"><a class="aColor01" target="_blank" href="/quote/stock?m=sz&amp;code=000630">铜陵有色</a></div></td>
        <td align="right" valign="top"><div class="flat">0.00%</div></td>
        <td align="right" valign="top"><div>207</div></td>
        
        </tr>
        
    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="gap02"></div>

    <div class="cBox01">
        <div class="title01">
            <h3>股票学堂</h3>
            <span class="fr01"><a href="http://www.futu5.com/faq/category/cid/57" target="_blank" class="more01">更多<i class="iconfont"></i></a></span>
        </div>
        <div class="c01">
            <ul class="ulList01" id="stockSchool">
        
        <li><a href="http://www.futu5.com/faq/topic/tid/92" target="_blank">VOL 成交量指标</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/94" target="_blank">KDJ 随机指标</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/164" target="_blank">交易心态变化过程</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/95" target="_blank">ARBR 情绪指标/人气意愿指标</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/108" target="_blank">BOLL 布林线指标</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/168" target="_blank">完善自己的交易心理</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/162" target="_blank">心理分析法的优势</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/106" target="_blank">RSI 相对强弱指标</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/163" target="_blank">心理分析法的应用</a></li>
        
        <li><a href="http://www.futu5.com/faq/topic/tid/103" target="_blank">DMA 平行线差</a></li>
        
    </ul>
        </div>
    </div>

</div>






    


</div>

</div>
 
<script type="text/javascript" src="js/jquery-1.6.js"></script>  
<script type="text/javascript" src="js/lib/stock.js"></script>  
<script type="text/javascript" src="js/func.js"></script>         
<script type="text/javascript">
             Date.prototype.format = function(format) {
                   var date = {
                          "M+": this.getMonth() + 1,
                          "d+": this.getDate(),
                          "h+": this.getHours(),
                          "m+": this.getMinutes(),
                          "s+": this.getSeconds(),
                          "q+": Math.floor((this.getMonth() + 3) / 3),
                          "S+": this.getMilliseconds()
                   };
                   if (/(y+)/i.test(format)) {
                          format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                   }
                   for (var k in date) {
                          if (new RegExp("(" + k + ")").test(format)) {
                                 format = format.replace(RegExp.$1, RegExp.$1.length == 1
                                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                          }
                   }
                   return format;
            }
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            var newDate = new Date();
            eval('var hq_str_sz002024=null');
            var data={};
            data.stockID="002024";
            data.stockType="sz";
            data.time=parseInt(timestamp);
            data.hq=eval("hq_str_sz002024");
            data.day = newDate.format('yyyy-MM-dd');
            data.isHqReload=eval("true");
            
            //菜单
            data.menu=[];
             //data.menu.push({name:"minute",	title:"分时"});
             //data.menu.push({name:"monthK",	title:"分钟"});
             //data.menu.push({name:"dayK",	title:"日K"});
             //data.menu.push({name:"weekK",	title:"周K"});
             //data.menu.push({name:"monthK",	title:"月K"});
             //data.menu.push({name:"5day",	title:"多日"});
            
            //data.menu.push({name:"6month",	title:"6月"});
            //data.menu.push({name:"3year",	title:"3年"});
            //data.menu.push({name:"all",	title:"全部"});
            //默认加载
            data.default="minute";
            var s=getUrlParam("s");
            $("."+s).addClass('current').siblings().removeClass('current');
            stock.load(data);
            
           
</script>
    </body>
</html>