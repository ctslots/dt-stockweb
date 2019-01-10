$(function(){
 
  getData();
  setInterval("getData()", 3000); 
  $(".kTab01").find('a').click(function(){
      var i = $(this).index();
      $(this).addClass('current').siblings('.kTab01 a').removeClass('current');
      $(this).parents('.tbC01').find('.kFlash01').eq(i).show().siblings('.kFlash01').hide();
  });
});

function getData()
{
  var d = new Date();
  var h = d.getHours();
  var date = '';
  if(h < 11) $(".st").html(' 早盘'); else if(h < 15&&h>11) $(".st").html(' 午盘'); else $(".st").html(' 已收盘');
  var pe = getUrlParam('pe'),p = getUrlParam('p'),f = getUrlParam('f');//p 是第几页 pe是一页多少条 f是执行那个方法
  $.get('hq.php?act=lists&pe='+pe+'&p='+p+'&f='+f,function(data,status){
       
            var data = eval("("+data+")");
          
            var list=[];
            var fields = data[0]["fields"];
            var items = data[0]["items"];
            for(i=0;i<items.length;i++)
            {
                var obj={};
                var m=0;
                for(var item in fields) 
                { 
                    obj[fields[m]]=items[i][m];
                    m++; 
                } 
                list.push(obj);
            }
            var market = getUrlParam('market');
            if(market=="sh" || market=="sz")
            shsz(list)  
            else if(market=='hk')
            hk(list);
            else if(market=='us')
            us(list);    
           
           
            
   }); 
   
}

function shsz(list)
{   
   
    var id = getUrlParam('id');
    for(i=0;i<list.length;i++)
    {  
        if(i==id)
        {
           $(document).attr("title",list[i]["name"] +' '+list[i]["symbol"]);
           $(".tf").text(list[i]["name"]+'  '+list[i]["symbol"].toUpperCase());
           $(".tf").attr("title",list[i]["name"]);
           $(".tf").attr("data-id",list[i]["symbol"]);
           $(".trade").text(list[i]["trade"]);
           if(list[i]["pricechange"] >0) $(".pricechange").text('+'+list[i]["pricechange"]);else $(".pricechange").text(list[i]["pricechange"]);
           if(list[i]["changepercent"] >0) $(".changepercent").text('+'+list[i]["changepercent"]+'%'); else { $(".changepercent").text(list[i]["changepercent"]+'%');}

           $(".high").text(list[i]["high"]);
           $(".low").text(list[i]["low"]);
           $(".open").text(list[i]["open"]);
           $(".settlement").text(list[i]["settlement"]);
           $(".amount").text((Number(list[i]["amount"])/100000000).toFixed(2)+'亿');
           $(".volumes").text((Number(list[i]["volume"])/1000000).toFixed(2)+'手');
           $(".mktcap").text((Number(list[i]["mktcap"])/10000).toFixed(2)+'亿');
           $(".nmc").text((Number(list[i]["nmc"])/10000).toFixed(2)+'亿');
           $(".buy").text(list[i]["buy"]);
           $(".sell").text(list[i]["sell"]);
           
           
        }
     
               
    } 
        
}
function hk(list)
{   
    
    var id = getUrlParam('id');
    for(i=0;i<list.length;i++)
    {  
        if(i==id)
        {
            $(document).attr("title",list[i]["name"]+'  '+list[i]["symbol"]);
           $(".tf").text(list[i]["name"]+'  '+list[i]["symbol"].toUpperCase());
           $(".tf").attr("title",list[i]["name"]);
           $(".tf").attr("data-id",list[i]["symbol"]);
           $(".trade").text(list[i]["lasttrade"]);
           if(list[i]["pricechange"] >0) $(".pricechange").text('+'+list[i]["pricechange"]);else $(".pricechange").text(list[i]["pricechange"]);
           if(list[i]["changepercent"] >0) $(".changepercent").text('+'+Number(list[i]["changepercent"]).toFixed(2)+'%'); else { $(".changepercent").text(Number(list[i]["changepercent"]).toFixed(2)+'%');}

           $(".high").text(list[i]["high"]);
           $(".low").text(list[i]["low"]);
           $(".open").text(list[i]["open"]);
           $(".settlement").text(list[i]["prevclose"]);
           $(".amount").text((Number(list[i]["amount"])/100000000).toFixed(2)+'亿');
           $(".volumes").text((Number(list[i]["volume"])/10000).toFixed(2)+'万手');
           $(".mktcap").text((Number(list[i]["mktcap"])/100000000).toFixed(2)+'亿');
           //$(".nmc").text((Number(list[i]["lasttrade"])*Number(list[i]["stocks_sum"])/100000000).toFixed(2)+'亿');
           $(".nmc").text((Number(list[i]["nmc"])/100000000).toFixed(2)+'亿');
           $(".st1").text(list[i]["ticktime"]);
           $(".buy").text(list[i]["buy"]);
           $(".sell").text(list[i]["sell"]);
        }
    } 
       
}

function us(list)
{   
  
    var id = getUrlParam('id');
    for(i=0;i<list.length;i++)
    {  
        if(i==id)
        {
           $(document).attr("title",list[i]["name"]+' '+list[i]["symbol"]);
           $(".tf").text(list[i]["name"]+'  '+list[i]["symbol"].toUpperCase());
           $(".tf").attr("title",list[i]["name"]);
           $(".tf").attr("data-id",list[i]["symbol"]);
           $(".trade").text(list[i]["price"]);
           $(".high").text(list[i]["high"]);
           $(".low").text(list[i]["low"]);
           $(".open").text(list[i]["open"]);
           $(".settlement").text(list[i]["preclose"]);
           $(".amount").text('--');
           $(".volumes").text((Number(list[i]["volume"])/10000).toFixed(2)+'万手');
           $(".mktcap").text((Number(list[i]["mktcap"])/100000000).toFixed(2)+'亿');
           $(".nmc").text('--');
           $(".st1").text(list[i]["ticktime"]);
           $(".sd").css("display","none");
           
        }
    } 
       
}
