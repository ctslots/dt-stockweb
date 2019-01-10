<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>沪股通-沪港通-股票行情-模拟炒股</title>
  <link type="css/text" rel="stylesheet" href="css/common.css">
  <link type="css/text" rel="stylesheet" href="css/jquery.page.css">
 </head>
 <body>
<?php include "template/header.php"?> 
<div class="wrap">
<?php include "template/nav.php"?> 
<div class="cBox01">
        <div class="c01" id="topList">
            <div class="tabBox05">
                <a class="sh_c" href="javascript:;" title="沪股通" data-name="sh_c">
                    沪股通
                </a>
               <span class="sGap01"></span>
                <a href="javascript:;" title="港股通" class="hk_c" data-name="hk_c">
                    港股通
                </a>
               
            </div>

            <table cellspacing="0" cellpadding="0" border="0" width="100%" class="tableList01">
                <thead>
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
                <tbody class="top-list-tbody"></tbody>
            </table>

         <div div class="pageBox01 pageBox01-3" id="topListPager"></div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-1.6.js"></script> 
<script type="text/javascript" src="js/func.js"></script>    
<script type="text/javascript" src="js/shhkInit.js"></script>  
<script type="text/javascript" src="js/jquery.page.js"></script> 
</body>
</html>