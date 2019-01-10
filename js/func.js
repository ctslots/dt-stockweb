function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null;
 }
 
function changeURLArg(url,arg,arg_val){ 
    var pattern=arg+'=([^&]*)'; 
    var replaceText=arg+'='+arg_val; 
    if(url.match(pattern)){ 
            var tmp='/('+ arg+'=)([^&]*)/gi'; 
            tmp=url.replace(eval(tmp),replaceText); 
            return tmp; 
        }
    else{ 
            if(url.match('[\?]')){ 
                return url+'&'+replaceText; 
            }else{ 
                return url+'?'+replaceText; 
            } 
        } 
     return url+'\n'+arg+'\n'+arg_val; 
    } 

$('.tabBox05').find('a').click(function(){
    var act = $(this).attr("data-name");
    var url=window.location.href;//获取当前url
    window.location.href= changeURLArg(url,'k',act);
 });
 
 $('.tabBox01').find('a').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
    var act = $(this).attr("data-name");
    var url=window.location.href;//获取当前url
    window.location.href= changeURLArg(url,'type',act);
 });



//点击事件
function click(act,b,pages,page)
{
     $(".aM01,.detail,.aColor01").click(function(){
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var id=$(this).attr("data-id");
        var code=$(this).attr("data-code");
        var page= $(".activP").text();
        window.open(localhostPaht+'/edit.php?id='+id+'&market='+b+'&pe='+pages+'&p='+page+'&f='+act+'&c='+code);
        
    });
    
}
//加载模板 1为shsz 2 为hk,3为us,4中概股
function tempter(list,b)
{   
    var strHtml="";
    if(b=='1')
        for(i=0;i<list.length;i++)
        {  
            if(i%2==0) strHtml +='<tr class="tr01">'; else { strHtml +='<tr class="tr02">';}
           
            strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aM01" href="javascript:;" data-id="'+i+'" data-code="'+list[i]["symbol"]+'"  title="'+list[i]["symbol"].toUpperCase()+'" target="_blank">';
                         strHtml +=list[i]["symbol"].toUpperCase();
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aColor01" href="javascript:;" data-id="'+i+'" data-code="'+list[i]["symbol"]+'" title="'+list[i]["name"]+'" target="_blank">';
                         strHtml +=list[i]["name"];
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["trade"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+Number(list[i]["changepercent"]).toFixed(2)+'%</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["pricechange"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+Number(list[i]["volume"])+'</div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+(Number(list[i]["amount"]))+'</div></td>';
             strHtml +='<td align="center">';
                strHtml +='<div class="tdP01 tdCz01">';
                     strHtml +='<a href="javascript:void(0)" data-id="'+i+'" class="detail"  title="'+list[i]["name"]+'">详情</a>';
                 strHtml +='</div>';
             strHtml +='</td>';
            
            strHtml +='</tr>';
             
        } 
    else if(b=='2')
        for(i=0;i<list.length;i++)
        {  
            if(i%2==0) strHtml +='<tr class="tr01">';
            else
            {
                strHtml +='<tr class="tr02">';
            }
            strHtml += '<form action="/tradeDit.php" method="post">';
            strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aM01" href="javascript:;" title="'+list[i]["name"]+'"  data-id="'+i+'" data-code="hk'+list[i]["symbol"]+'"  target="_blank">';
                         strHtml +=list[i]["symbol"].toUpperCase();
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aColor01" href="javascript:;" data-code="hk'+list[i]["symbol"]+'" data-id="'+i+'" title="'+list[i]["name"]+'" target="_blank">';
                         strHtml +=list[i]["name"];
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["lasttrade"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+Number(list[i]["changepercent"]).toFixed(2)+'%</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["pricechange"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+Number(list[i]["volume"])+'</div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+(Number(list[i]["amount"]))+'</div></td>';
             strHtml +='<td align="center">';
                 strHtml +='<div class="tdP01 tdCz01">';
                     strHtml +='<a href="javascript:void(0)" class="detail"  data-id="'+i+'" data-code="hk'+list[i]["symbol"]+'"   title="'+list[i]["name"]+'">详情</a>';
                 strHtml +='</div>';
             strHtml +='</td>';
             strHtml +='</form>';
         strHtml +='</tr>';
                 
        }
    else if(b=='3')
   
            for(i=0;i<list.length;i++)
            {  
                if(i%2==0){
                    strHtml +='<tr class="tr01">';
                }
                else
                {
                    strHtml +='<tr class="tr02">';
                }
                strHtml += '<form action="/tradeDit.php" method="post">';
                strHtml +='<td align="left">';
                     strHtml +='<div class="tdP01"><div class="tf">';
                         strHtml +='<a class="aM01" data-code="'+list[i]["symbol"]+'" href="javascript:;" data-id="'+i+'" title="'+list[i]["symbol"].toUpperCase()+'" target="_blank">';
                             strHtml +=list[i]["symbol"].toUpperCase();
                         strHtml +='</a>';
                     strHtml +='</div></div>';
                 strHtml +='</td>';
                 strHtml +='<td align="left">';
                     strHtml +='<div class="tdP01"><div class="tf">';
                         strHtml +='<a class="aColor01" data-code="'+list[i]["symbol"]+'" href="javascript:;" data-id="'+i+'" title="'+list[i]["name"]+'" target="_blank">';
                             strHtml +=list[i]["name"];
                         strHtml +='</a>';
                     strHtml +='</div></div>';
                 strHtml +='</td>';
                 strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["price"]+'</span></div></td>';
                 strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["chg"]+'%</span></div></td>';
                 strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["diff"]+'</span></div></td>';
                 strHtml +='<td align="right"><div class="tdP01">'+parseInt(Number(list[i]["volume"]))+'</div></td>';
                 strHtml +='<td align="right"><div class="tdP01"><span class="up">'+(Number(list[i]["mktcap"])/100000000).toFixed(2)+'</span></div></td>';
                 strHtml +='<td align="right"><div class="tdP01">'+(Number(list[i]["pe"])).toFixed(2)+'</div></td>';
                 strHtml +='<td align="center">';
                     strHtml +='<div class="tdP01 tdCz01">';
                         strHtml +='<a href="javascript:void(0)"  title="'+list[i]["name"]+'">详情</a>';
                         //strHtml +='<input type="submit" value="详情" />';
                     strHtml +='</div>';
                 strHtml +='</td>';
                 strHtml +='</form>';
             strHtml +='</tr>';
            }
    else if(b=='4')//中概股
         for(i=0;i<list.length;i++)
         {  
            if(i%2==0) strHtml +='<tr class="tr01">';
            else { strHtml +='<tr class="tr02">'; }
            strHtml += '<form action="/tradeDit.php" method="post">';
            strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aM01" href="javascript:;" data-id="'+i+'" title="'+list[i]["symbol"].toUpperCase()+'" target="_blank">';
                         strHtml +=list[i]["symbol"].toUpperCase();
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="left">';
                 strHtml +='<div class="tdP01"><div class="tf">';
                     strHtml +='<a class="aColor01" href="javascript:;" data-id="'+i+'" title="'+list[i]["name"]+'" target="_blank">';
                         strHtml +=list[i]["name"];
                     strHtml +='</a>';
                 strHtml +='</div></div>';
             strHtml +='</td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["price"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["chg"]+'%</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+list[i]["diff"]+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+parseInt(Number(list[i]["volume"]))+'</div></td>';
             strHtml +='<td align="right"><div class="tdP01"><span class="up">'+(Number(list[i]["mktcap"])/100000000).toFixed(2)+'</span></div></td>';
             strHtml +='<td align="right"><div class="tdP01">'+(Number(list[i]["pe"])).toFixed(2)+'</div></td>';
             strHtml +='<td align="center">';
                 strHtml +='<div class="tdP01 tdCz01">';
                     strHtml +='<a href="javascript:void(0)" title="'+list[i]["name"]+'">详情</a>';
                 strHtml +='</div>';
             strHtml +='</td>';
             strHtml +='</form>';
            strHtml +='</tr>';
          }
    return strHtml;
}
//处理数据
function handData(data)
{   
    
    if(!data)
        layer.msg("获取行情失败！");
    else{
        var list=[];
        var data = eval("("+data+")");

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
    }
    
    return list;
}


 
