<?php 
$action =$_GET["Action"];
if($action=='loadjs')
{
    $url = 'http://jieone.com/demo/stock/data/stock.php?Action='.$action.'&name='.$_GET["name"].'';
    $content = file_get_contents($url);
    echo $content; 
}
else
{
    $url = 'http://jieone.com/demo/stock/data/stock.php?Action='.$action.'&stockID='.$_GET["stockID"].'&stockType='.$_GET["stockType"].'';
    $content = file_get_contents($url);
    echo $content; 
}?>
    

