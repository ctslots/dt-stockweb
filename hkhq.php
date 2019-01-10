<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>港股主板-涨幅前100-港股-股票行情</title>
  <link type="css/text" rel="stylesheet" href="css/common.css">
  <link type="css/text" rel="stylesheet" href="css/jquery.page.css">
 </head>
 <body>
<?php include "template/header.php"?> 
<div class="wrap">
<?php include "template/nav.php"?>
    <div class="cBox01">
        <div class="title05">
            <div class="tabBox01">
                <a class="up100" href="javascript:;" title="涨幅前20" data-name="up100">涨幅前20</a>
                <a href="javascript:;" title="跌幅前20" class="down100" data-name="down100">跌幅前20</a>
                                <!--<a  href="/quote/highest?market=hk" title="52周新高">52周新高</a>-->
                <a href="javascript:;" title="机构评级" class="g100" data-name="g100">机构评级</a>
                            </div>
        </div>
        <div class="c01" id="topList">
                        <div class="tabBox05">
                                <a class="hk_c" href="javascript:;" title="港股主板" data-name="hk_c">
                    港股主板
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="港股创业板" class="hk_cyb" data-name="hk_cyb">
                    港股创业板
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="香港指数" class="hk_z" data-name="hk_z">
                    香港指数
                </a>
                                 <span class="sGap01"></span>
                                                <a href="javascript:;" title="国企股" class="gqg_hk" data-name="gqg_hk">
                    国企股
                </a>
                                 <span class="sGap01"></span>
                                                <a href="javascript:;" title="蓝筹股" class="lcg_hk" data-name="lcg_hk">
                    蓝筹股
                </a>
                                 <span class="sGap01"></span>
                                                <a href="javascript:;" title="红筹股" class="hcg_hk" data-name="hcg_hk">
                    红筹股
                </a>
                                            </div>
            
            <table cellspacing="0" cellpadding="0" border="0" width="100%" class="tableList01">
                <thead class="top-list-thead">
                <tr>
                    <th width="100" align="left"><div class="tdP01">股票代码</div></th>
                    <th align="left"><div class="tdP01">股票名称</div></th>
                    <th width="100" align="right"><div class="tdP01">最新价</div></th>
                    <th width="100" align="right"><div class="tdP01">涨跌幅</div></th>
                    <th width="100" align="right"><div class="tdP01">涨跌额</div></th>
                    <th width="100" align="right"><div class="tdP01">成交量</div></th>
                    <th width="100" align="right"><div class="tdP01">成交额(万)</div></th>
                    <th width="140" align="center"><div class="tdP01">操作</div></th>
                </tr>
                </thead>
                <tbody class="top-list-tbody">
                
                </tbody>
            </table>
             
            <div div class="pageBox01 pageBox01-3" id="topListPager"></div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-1.6.js"></script>    
<script type="text/javascript" src="js/func.js"></script> 
<script type="text/javascript" src="js/hkhqInit.js"></script> 
<script type="text/javascript" src="layer/layer.js"></script> 
<script type="text/javascript" src="js/jquery.page.js"></script> 
 </body>
</html>