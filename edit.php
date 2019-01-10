
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>港股主板-涨幅前100-港股-股票行情</title>
 <link type="css/text" rel="stylesheet" href="css/common.css"> 
 <link type="css/text" rel="stylesheet" href="css/quote.css">  
 
 <link type="text/css" rel="stylesheet" href="css/socket_s.css"/>
 <script type="text/javascript" src="js/jquery-1.6.js"></script>  
 <script type="text/javascript" src="js/func.js"></script>  
 <script type="text/javascript" src="js/list.js"></script> 
 
 </head>
 <body>
<div class="wrap">
<div class="quoteBox01">
    <div class="nameBar">
        <h1 class="tf" title=""></h1>
        <div id="bmpWrapper"></div>
    </div>
    <div id="basicQuote">
    <div class="fr01">
        <span class="time001"><a class="st1"></a><a class="st"></a></span>
        <a href="javascript:void(0)" class="button btn06 quote-watched ui-add-watch"><span>添加自选</span></a>
        <a href="javascript:void(0)" target="_blank" class="button btn02"><span>模拟交易</span></a>
        <a href="javascript:void(0)" target="_blank" class="button btn01"><span>真实交易</span></a>
    </div>
    <div class="div002 up">
        <span class="price01 trade"></span>
        <span class="pricechange"></span>
        <span class="changepercent"></span>
    </div>
    <div class="listBar clearBox">
        <ul>
            <li><p>最　高：<span class="up high"></span>
                <p>最　低：<span class="up low"></span>
            </li>
            <li><p>今　开：<span class="up open"></span>
                <p>昨　收：<span class="up settlement"></span>
            </li>
            <li><p>成交额：<span class="up amount"></span>
                <p>成交量：<span class="up volumes"></span>
            </li>
            <li><p>总市值：<span class="up mktcap"></span>
                <p>流通市值：<span class="up nmc"></span>
            </li>
            <li><p>买  入：<span class="up buy"></span>
                <p>卖  出：<span class="up sell"></span>
            </li>
        </ul>
    </div>
</div>
</div>

<div class="main04 clearBox ui-tabs-panel" data-id="simple-news">

<div class="main04Left">
    <div class="cBox01 zxBox01">
        <div class="tbC01" id="chartsWrapper">
            <div class="kFlash01" id="chartWrapper" style="position: relative;">
                <div id="main" ></div>
            </div>
           
        </div>
    </div>

 

 
</div>

</div>
</div>
<script type="text/javascript" src="js/lib/stock_s.js"></script>  
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
            var c=getUrlParam('c');
            var id=c.substr(2,c.length);
            var ty=c.substr(0,2);
           
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            var newDate = new Date();
            eval('var hq_str_'+c+'=null');
            var data={};
            data.stockID=id;
            data.stockType=ty;
            data.time=parseInt(timestamp);
            data.hq=eval("hq_str_"+c);
            data.day = newDate.format('yyyy-MM-dd');
            data.isHqReload=eval("true");
            
            //菜单
            data.menu=[];
            data.menu.push({name:"minute",	title:"分时"});
             //data.menu.push({name:"monthK",	title:"分钟"});
            data.menu.push({name:"dayK",	title:"日K"});
            data.menu.push({name:"weekK",	title:"周K"});
            data.menu.push({name:"monthK",	title:"月K"});
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