$(function(){
    
var plate=getUrlParam("plate"),type=getUrlParam("type"),k=getUrlParam("k"),s=getUrlParam("s"),num=1,pages=20;
$("."+s).addClass('current').siblings().removeClass('current');
if (k=="zgg") Gethq_zgg(k,num,true); else Gethq(k,num,true);
$("."+plate).addClass('current').siblings().removeClass('current');
$("."+type).addClass('current').siblings().removeClass('current');
$("."+k).addClass('current').siblings().removeClass('current');
function Gethq(act,num,is_page)
{
   $.get("hq.php?act="+act+'&p='+num,function(data,status){
            $(".top-list-tbody").html(tempter(handData(data),'3'));
            
            var page= $(".activP").text();
            click2(act,'us',pages,page);
            if(is_page)
            pageFunc(data,'sz');
     });
}

function Gethq_zgg(act,num,is_page)
{
   $.get("hq.php?act="+act+'&p='+num,function(data,status){
            $(".top-list-tbody").html(tempter(handData(data),'4'));
            
            var page= $(".activP").text();
            click2(act,'us',pages,page);
            if(is_page)
            pageFunc(data,'zgg');
           
         
     });
}
//点击事件
function click2(act,b,pages,page)
{
     $(".aM01,.detail,.aColor01").click(function(){
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var id=$(this).attr("data-id");
        var code=$(this).attr("data-code");
        var name=$(this).attr("title");
        var page= $(".activP").text();
        layer.open({
          type: 2,
          title: name,
          maxWidth:'594px',
          scrollbar:false,
          area: ['594px', '560px'],
          shade: 0.1,
          shadeClose: true,
          content: localhostPaht+'/detail.php?id='+id+'&market='+b+'&pe='+pages+'&p='+page+'&f='+act+'&c='+code
        });
       

        
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
                if(b=='zgg')
                Gethq_zgg(k,page,false);
                else if(b=='sz')
                Gethq(k,page,false);
          }
     });
    
}
});