$(function(){
    
var pages=20;//默认显示多少条;
var plate=getUrlParam("plate"),type=getUrlParam("type"),k=getUrlParam("k"),s=getUrlParam("s"),num=1;

$("."+s).addClass('current').siblings().removeClass('current');

$("."+plate).addClass('current').siblings().removeClass('current');

$("."+type).addClass('current').siblings().removeClass('current');

$("."+k).addClass('current').siblings().removeClass('current');

if(k !="" && k !=null) Gethq(k,num,true); else Gethq("hszsA",num,true);

$('.tabBox02 tabBox02-2').find('a').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
});
 
function Gethq(act,num,is_page)
{
   $.get("hq.php?act="+act+'&p='+num,function(data,status){
        $(".top-list-tbody").html(tempter(handData(data),1));
        var page= $(".activP").text();
        click(act,'sz',pages,page); 
        if(is_page)
        pageFunc(data);

     });
}
//分页
function pageFunc(data,b)
{
     var count = eval("("+data+")");
     $("#topListPager").Page({
          totalPages: Math.ceil((Number(count[0]["count"])/20)),//分页总数
          liNums: 7,//分页的数字按钮数(建议取奇数)
          activeClass: 'activP', //active 类样式定义
          callBack : function(page){
                var k=getUrlParam("k");
                $(".top-list-tbody").html('');
                Gethq(k,page,false);
               
          }
     });
    
}


    
});