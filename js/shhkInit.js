$(function(){
    
    var pages=20;//默认显示多少条;    
    var plate=getUrlParam("plate"),type=getUrlParam("type"),k=getUrlParam("k"),s=getUrlParam("s"),num=1;
    $("."+s).addClass('current').siblings().removeClass('current');
    $("."+type).addClass('current').siblings().removeClass('current');
    $("."+k).addClass('current').siblings().removeClass('current');
    if(k=="hk_c") Gethq_hk(k,num,true);
    else Gethq_sh(k,num,true);

function Gethq_sh(act,num,is_page)
{
   $.get("hq.php?act="+act+'&p='+num,function(data,status){
            $(".top-list-tbody").html(tempter(handData(data),'1'));
            
            var page= $(".activP").text();
            click(act,'sh',pages,page);
            if(is_page)
            pageFunc(data,'sh');
        
     });
}

function Gethq_hk(act,num,is_page)
{
   $.get("hq.php?act="+act+'&p='+num,function(data,status){ 
            
            $(".top-list-tbody").html(tempter(handData(data),'2'));
            
            var page= $(".activP").text();
            click(act,'hk',pages,page);
            if(is_page)
            pageFunc(data,'hk');
           
           
         
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
                if(b=='sh')
                Gethq_sh(k,page,false);
                else if(b=='hk')
                Gethq_hk(k,page,false);
            
          }
     });
    
}


});