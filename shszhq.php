<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>沪深A股-涨幅前100-沪深-股票行情</title>
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
                <a class="up100" href="javascript:;" title="涨幅前100" data-name="up100">涨幅前100</a>
                <a href="javascript:;" title="跌幅前100" class="down100" data-name="down100">跌幅前100</a>
            </div>
        </div>
        <div class="c01" id="topList">
                        <div class="tabBox05">
                                <a  href="javascript:;" title="沪深A股" data-name="hszsA" class="hszsA">
                    沪深A股
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="沪深指数" data-name="hszs" class="hszs">
                    沪深指数
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="深证主板" data-name="szzb" class="szzb">
                    深证主板
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="上海主板" data-name="shzb" class="shzb">
                    上海主板
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="中小企业" data-name="zxqy" class="zxqy">
                    中小企业
                </a>
                                <span class="sGap01"></span>
                                                <a href="javascript:;" title="创业板" data-name="cyb" class="cyb">
                    创业板
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
                    <th width="120" align="right"><div class="tdP01">成交额(万)</div></th>
                    <th width="140" align="center"><div class="tdP01">详情</div></th>
                </tr>
                </thead>
                <tbody class="top-list-tbody">
                
                </tbody>
            </table>
            
           <div div class="pageBox01 pageBox01-3" id="topListPager"></div>
           </div>
            
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-1.6.js"></script>  
<script type="text/javascript" src="js/func.js"></script>   
<script type="text/javascript" src="js/shszInit.js"></script> 
<script type="text/javascript" src="js/jquery.page.js"></script>   
 </body>
</html>
