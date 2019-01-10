<?php
header('Content-Type:text/html; charset= utf-8');
$act=$_GET['act'];
call_user_func($act);

function us_a()
{   
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[[%22us_c%22,0,%22%22,%22%22,0,'.$p.',20]]';
    $content = file_get_contents($url);
    echo $content;  
}
function hk()
{
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hgtnode","hgt_hk","",0,'.$p.',20]]';
    $content = file_get_contents($url);
    echo $content;  
}
function hszs()
{
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["jjhq",'.$p.',20,"",0,"hs300"]]';
    $content = file_get_contents($url);
    echo $content;  
}
function szzb()
{
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["jjhq",'.$p.',20,"",0,"zhishu_399001"]]';
    $content = file_get_contents($url);
    echo $content;  
}
function shzb()
{
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["jjhq",'.$p.',20,"",0,"zhishu_000001"]]';
    $content = file_get_contents($url);
    echo $content;  
}
function gl()
{
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[[%22bknode%22,%22gainianbankuai%22,%220%22,0]]';
	$content = file_get_contents($url);
    echo $content; 
}
function hybk()
{
  
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[[%22bkshy%22,%22%22,0]]';
  $content = file_get_contents($url);
  echo $content; 
}
function zxqy()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hq","zxqy","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}
function cyb()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hq","cyb","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function hszsA()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[[%22hq%22,%22hs_a%22,%22%22,0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function zgg()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["us_z",0,"","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}
function nsdk()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["us_cf",1,"","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}
function djs()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["us_cf",3,"","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}
function zmmg()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["us_cf",2,"","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function hk_c()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[[%22hgtnode%22,%22hgt_hk%22,%22%22,0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function gqg_hk()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hk","gqg_hk","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function lcg_hk()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hk","lcg_hk","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function hcg_hk()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hk","hcg_hk","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function hk_cyb()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hk","cyb_hk","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function hk_z()
{
  $p=$_GET["p"];
  if($p == '' || $p == null){ $p=1;}
  $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["hk","zs_hk","",0,'.$p.',20]]';
  $content = file_get_contents($url);
  echo $content; 
}

function sh_c()
{
    $p=$_GET["p"];
    if($p == '' || $p == null){ $p=1;}
    $url = 'http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["bkshy_node","hgt_sh","",0,'.$p.',20]]';
    $content = file_get_contents($url);
    echo $content;
}

function lists()
{
    $p  = $_GET["p"];//第几页
    $pe = $_GET["pe"];//一页多少条
    $f  = $_GET["f"];//方法名
    call_user_func($f);
}


?>
