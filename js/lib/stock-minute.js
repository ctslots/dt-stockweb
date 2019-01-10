var stock_minute={
		data:null,
		datacount:242,
		avgdata:new Array(),
		istouch:false,
		name:"",
		xy:[],
		load:function(name,c,o){
			this.name=name;
			
			stock.ajax({Action:name,stockID:stock.stockID,stockType:stock.stockType},function(result,data){
				if(!result||data==""){
					c.call(o,false);
				}else{
					data=data.split("\n");
					if(data[0].split(",").length==7){
						stock_minute.data=data;
						c.call(o,true);
					}else{
						c.call(o,false);	
					}
				}
				delete data;
			});
		},
		//画图
		canvas:function(){

			this.dispose();//先处理数据
			this.k.load();//加载K线图
			this.l.load();//加载K线图
			this.sellbuy();
			//只加载一次
			if(!this.istouch){
				this.istouch=true;
				this.touch.load();
			}
			$("#loading").hide();//隐藏加载框
		},
		reload:function(){
			this.load(this.name,function(result){
				if(result){
					if(stock.current==stock_minute.name){
						stock_minute.canvas();
					}
				}
			})	
		},
		//更新行情
		update:function(){
			//追加行情
			if(this.data.length>0){
				if(this.data[this.data.length-1].split(",")[0].split(":").length==3){
					this.data.pop();
				}
				this.data.push(stock.data[31]+","+stock.data[3]+",-1");
			}
				
			if(stock.current==this.name){
				$("#dot").animate({opacity:0.1},300,function(){
					stock_minute.canvas();
					$("#dot").animate({opacity:1},300);	
				})
			}
		},
		k:{
			width:1020,
			height:300,
			define:{max:0,min:0,avg:0,differ:0,PRE:0},//自定义变量(最高价格)
			
			id:null,
			load:function(){
				var data=stock_minute.data;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_minute.name+"-k";
				
				var cans=document.getElementById(this.id).getContext('2d');
			
				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				
				cans.strokeStyle=stock.color.withinBorder;
				//内框线(11:30-13:30 相差2个像素)
				cans.moveTo(this.width/2-2,0);
				cans.lineTo(this.width/2-2,this.height);

				index=0;
				var style="grey";
				//横线
				for(var i=1;i<=12;i++){
					if(i%4==2){
						cans.moveTo(0,this.height/12*i);
						cans.lineTo(this.width,this.height/12*i);
						
						//当前价格
						price=stock.addNum(this.define.max,-this.define.differ/12*i);
						if(price>this.define.PRE){
							style="red";
						}else if(price<this.define.PRE){
							style="green";
						}
						//价格
						$this=$("#"+stock_minute.name).find(".price li").eq(index);
						$this.css({top:this.height/12*i/2});
						$this.attr("class","");
						$this.addClass(style);
						$this.html(price.toFixed(2));
						
						//涨幅
						$this=$("#"+stock_minute.name).find(".range li").eq(index);
						$this.css({top:parseInt(this.height/12*i/2)});
						$this.attr("class","");
						$this.addClass(style);
						$this.html(((price-this.define.PRE)/(this.define.PRE)*100).toFixed(2)+"%");
						
						
						index++;
					}
				}

				cans.stroke();
				cans.closePath();
				
				
				//虚线
				cans.beginPath();
				cans.strokeStyle=stock.color.solid;
				var x=0;
				var y=0;
				for(var i=0;i<this.width/12;i++){
					y=this.getY(this.define.PRE);
					cans.moveTo(x,y);
					x+=6;
					cans.lineTo(x,y);
					x+=6;
				}
				cans.stroke();
				cans.closePath();
				
				stock_minute.xy=[];
				
				
				
				//曲线
				cans.beginPath();
				cans.lineWidth = 2; 
				cans.strokeStyle=stock.color.trend;
				var _data=data[0].split(",");
				var x=0;
				var y=this.getY(_data[1]);
				cans.moveTo(x,y);
				stock_minute.xy.push({x:x,y:y});
				
				//从1开始
				for(var i=1;i<data.length;i++){
					var _data=data[i];
					if(_data!=""){
						_data=_data.split(",");
					}	
					x+=this.width/(stock_minute.datacount-1);
					y=this.getY(_data[1]);
					cans.lineTo(x,y);
					stock_minute.xy.push({x:x,y:y});
				}
                //$("#dot").css("display","none");
				if(stock.hq.isRun()){
					$("#dot").css({left:x/2,top:y/2});
				}else{
					$("#dot").css({left:-1000});	
				}
				cans.stroke();
				
				//背景
				cans.lineTo(x, this.height);
				cans.lineTo(0, this.height);
				   
				cans.fillStyle=stock.color.fill;
				cans.fill();
				
				cans.closePath();
				
				cans.globalCompositeOperation="destination-over";
				
				//平均线
				
				data=stock_minute.avgdata;
				
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.minuteAvg;
				cans.moveTo(0,this.getY(data[0]));
				
				for(var i=1;i<data.length;i++){
					x=stock_minute.xy[i].x;
					y=this.getY(data[i]);
					cans.lineTo(x,y);
				}
				
				cans.stroke();
				cans.closePath();
				
				
				cans.save();
				
				//释放内存
				$this=null,index=null,price=null;
				delete cans;
				delete data;
			},
			//Y坐标
			getY:function(price){
				return (this.define.max-price)/this.define.differ*this.height
			}
		},
		//L线
		l:{
			width:0,
			height:0,	
			define:{max:0,allsize:0},//自定义变量(成交量)
			id:null,
			load:function(){
				var data=stock_minute.data;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_minute.name+"-l";
				
				var cans=document.getElementById(this.id).getContext('2d');
				
				this.width=parseInt($("#"+this.id).width())*2;
				this.height=parseInt($("#"+this.id).height())*2;

				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				
				cans.stroke();
				cans.closePath();
				
				
				
				cans.beginPath();
				cans.fillStyle =stock.color.volume;
				
				cans.linewidth=0;
				var x=0;
				var y=0;
				var w=this.width/stock_minute.datacount*0.6;
				var h=0;
				
				if(this.define.max*1>100000000){
					$("#"+stock_minute.name).find(".max-volume").html((this.define.max/100000000).toFixed(2)+"亿手");
				}else{
					$("#"+stock_minute.name).find(".max-volume").html((this.define.max/1000000).toFixed(2)+"万手");
				}
				
				
				//最大成交量
				for(var i=0;i<data.length;i++){
					var _data=data[i];
					if(_data!=""){
						_data=_data.split(",");
					}
					h=(_data[2]/this.define.max)*this.height*0.98;
					if(h!=0){
						y=this.height-h;
						cans.fillRect(x,y,w,h);
					}
					x+=this.width/(stock_minute.datacount);
				}
				
				
				cans.closePath();
				
				cans=null;
				delete data;
			}
		},
		//处理数据
		dispose:function(){
			var data=this.data,_data,define;
			
			var PRE=stock.data[2]*1;//昨日收盘价
			var limit_up=(PRE*1.1).toFixed(2);//涨停
			var limit_down=(PRE*0.9).toFixed(2);//跌停
			
			var price_max=0,price_min=100000000,volume_max=0;
			var length=data.length;
			
			this.avgdata=new Array();
			var sumPrice=new Array(),_sumPrice=0;
			var sumVolume=new Array(),_sumVolume=0;
			
			for(var i=0;i<length;i++){
				_data=data[i].split(",");
				if(parseFloat(_data[1])>price_max){price_max=_data[1];}
				if(parseFloat(_data[1])<price_min){price_min=_data[1];}
				if(parseFloat(_data[2])>volume_max){volume_max=_data[2];}
				
				if(i!=0){_sumPrice=sumPrice[i-1];_sumVolume=sumVolume[i-1];}
				if(_data[2]!=-1){
					sumPrice[i]=(_data[3]*1+_sumPrice*1);
					sumVolume[i]=(_data[2]*1+_sumVolume*1);
					
					this.avgdata.push((sumPrice[i]/sumVolume[i]).toFixed(2));
				}
			}
			
			if(price_max==price_min){
				
				//涨
				if(price_max>=PRE){
					price_max=limit_up;
					price_min=PRE;
				}else{
					price_max=PRE;
					price_min=limit_down;
				}
			}else if(price_max<PRE){
				price_max=PRE;
			}else if(price_min>PRE){
				price_min=PRE;
			}

			
			//开盘价为0，停牌
			if(stock.data[1]==0){
				price_max=limit_up;
				price_min=limit_down;
			}
			
			price_max*=1;
			price_min*=1;

			price_max+=(price_max-price_min)/11;
			price_min-=(price_max-price_min)/11;
			
			define={
				max:price_max,
				min:price_min,
				//改
				avg:(stock.addNum(price_max,price_min)/2),	
				differ:(price_max-price_min),
				
				PRE:stock.data[2]
			}
			//赋值
			stock_minute.k.define=define;
			 
			define={
				max:volume_max
			}
			stock_minute.l.define=define;
			
			//释放内存
			delete data;
			delete sum;
			_data=null;
			length=null;
			define=null;
			
			price_max=null,price_min=null,volume_max=null;
	},
	//设置买卖数据
	sellbuy:function(){
		var data=stock.data;
		//卖
		var str="";
		for(var i=5;i>0;i--){
			var size=parseInt( data[18+i*2]/100);
			var price=data[19+2*i];
			var style="red";
			if(price==data[2]){
				style="grey";
			}else if(price<data[2]){
				style="green";	
			}
			if(price==0){
				price="&nbsp;&nbsp;---";
			}
			str+='<li><span class="name">卖'+i+'</span><span class="price '+style+'">'+price+'</span><span class="size">'+size+'</span></li>';
		}
		str+='<li class="hr"></li>';
		for(var i=1;i<=5;i++){	
			var size=parseInt( data[8+i*2]/100);
			var style="red";
			var price=data[9+2*i];
			if(price==data[2]){
				style="grey";
			}else if(price<data[2]){
				style="green";	
			}
			if(price==0){
				price="&nbsp;&nbsp;---";
			}
			str+='<li><span class="name">买'+i+'</span><span class="price '+style+'">'+price+'</span><span class="size">'+size+'</span></li>';
		}
		
		$("#sell-buy").html(str);
					
	},
	//监听事件
	touch:{
		map:null,
		spirit:null,
		load:function(){

			var touchID=$("#"+stock_minute.name).find(".touch").attr("id");//当前ID
			this.map=document.getElementById(touchID);
			
			if(stock.isPC){
				$("#"+touchID).mousedown(function(e){
					stock_minute.touch.touchStart(e.clientX,e.clientY);
					
					document.onmousemove = function(e) {
						if (!stock_minute.touch.spirit) return;
						stock_minute.touch.touchMove(e.clientX,e.clientY);	
					}
					document.onmouseup = function () {
						if (!stock_minute.touch.spirit) return;
						stock_minute.touch.touchEnd();	
					}
				});
			}else{
			
				function touchStart(event) {
					//阻止网页默认动作（即网页滚动）
					event.preventDefault();	
					if (stock_minute.touch.spirit || !event.touches.length) return;
					var touch = event.touches[0];
					stock_minute.touch.touchStart(touch.pageX,touch.pageY);
				}
				function touchMove(event) {
					event.preventDefault();
					if (!stock_minute.touch.spirit || !event.touches.length) return;
					var touch = event.touches[0];
					stock_minute.touch.touchMove(touch.pageX,touch.pageY);
				}
				function touchEnd(event) {
					if (!stock_minute.touch.spirit) return;
					stock_minute.touch.touchEnd();	
				}
				this.map.addEventListener("touchstart", touchStart, false);
				this.map.addEventListener("touchmove", touchMove, false);
				this.map.addEventListener("touchend", touchEnd, false);
					 
			}
		},
		//cls等于1点击时
		handle:function(x,y){
			
			var index=Math.round(stock_minute.datacount/stock_minute.k.width*x*2);
			var data=stock_minute.data[index];

			if(data==undefined){
				if($("#"+stock_minute.name).find(".x").css("top")=="-1000px"){
					$("#headers ul").hide();
					return false;
				}
				index=stock_minute.xy.length-1;
				data=stock_minute.data[index];
			}
			$("#headers ul").show();
			
			data=data.split(",");
			
			y=stock_minute.xy[index].y/2;
			
			$("#"+stock_minute.name).find(".x").css({top:y});
			
			$("#"+stock_minute.name).find(".x").find(".current-price").html(data[1]);
			
			$("#"+stock_minute.name).find(".x").find(".current-range").html(((data[1]-stock_minute.k.define.PRE)/(stock_minute.k.define.PRE)*100).toFixed(2)+"%");
			
			$("#"+stock_minute.name).find(".y").css({left:parseInt(stock_minute.xy[index].x/2)});
			
			if(data[2]==-1){
				var volume="--";
			}else{
				var volume=parseInt(data[2]/100);
			}
		
			var str="";
			str+='<li>当前价：'+data[1]+'</li>';
			str+='<li>成交量：'+volume+'</li>';
			str+='<li>时间：'+data[0]+'</li>';
            
			$("#headers ul").html(str);
			
		
			data=null;
		},
		touchStart:function(x,y){
			x-=stock.touch.left;
			y-=stock.touch.top;
			
			this.spirit = document.createElement("div");	
			this.map.appendChild(this.spirit);
			this.spirit.className = "xy";
			$("#"+stock_minute.name).find(".xy").html('<div class="x"><span class="current-price"></span><span class="current-range"></span></div><div class="y"></div>');
			this.handle(x,y);
		},
		touchMove:function(x,y){
			x-=stock.touch.left;
			y-=stock.touch.top;
			
			if(x<0){x=0;}
			if(y<0){y=0;}
			
			this.handle(x,y);
		},
		touchEnd:function(){
			this.map.removeChild(this.spirit);
			$("#headers ul").hide();
			this.spirit = null;
		}
	}
}
var stock_dayK={
		data:null,
		pagedata:null,
		name:"",
		xy:[],
		define:{pagesize:100,flexsize:[10,20,40,60,80,100,120,140,160,180,200],rightsize:0,interval:0,ofset:0,endsize:0},//间隔
		//只加载一次
		load:function(name,c,o){
			this.name=name;
			stock.ajax({Action:name,stockID:stock.stockID,stockType:stock.stockType},function(result,data){
				if(!result||data==""){
					c.call(o,false);
				}else{
					data=data.split("\n");
					stock_dayK.data=data;
					
					if(name=="dayK"){
						stock_dayK.update();
					}
					
					c.call(o,true);
				}
				delete data;
			});
		},
		//画图
		canvas:function(c,o){
			this.dispose();//先处理数据
			this.k.load();//加载K线图
			this.l.load();//加载K线图
			this.touch.load();//监听
			c.call(o);
		},
		reload:function(){
			
			this.dispose();//先处理数据
			this.k.load();//加载K线图
			this.l.load();//加载K线图
		},
		update:function(){
			
			if(stock.day!=stock.data[30]){
				return false;	
			}
		
			var _data=this.data[this.data.length-1].split(",");
			//已更新
			if(stock.data[30]==_data[0]){
				//删除最后一条
				this.data.pop();
			}
			this.data.push(stock.data[30]+","+stock.data[2]+","+stock.data[3]+","+stock.data[4]+","+stock.data[5]+","+stock.data[8]+","+stock.data[9]);
				
		},
		k:{
			width:0,
			height:0,
			define:{max:0,min:0,differ:0},//自定义变量(最高价格)
			id:null,
			load:function(){
				var data=stock_dayK.pagedata;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_dayK.name+"-k";
				
				var cans=document.getElementById(this.id).getContext('2d');
				this.width=$("#"+this.id).width()*2;
				this.height=$("#"+this.id).height()*2;
				
				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);
				
				//每个间隔
				var interval=this.width/(data.length);
				stock_dayK.define.interval=interval;
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				//cans.strokeStyle="rgba(0,0,0,.3)";
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				

				//内框线
				cans.strokeStyle=stock.color.withinBorder;
				
			
				
				//价格线
				index=0;
				for(var i=1;i<8;i++){
					if(i%2==1){
						cans.moveTo(0,parseInt(this.height/8*i));
						cans.lineTo(this.width,parseInt(this.height/8*i));
						
						//当前价格
						price=stock.addNum(this.define.max,-this.define.differ/8*i);
						//价格
						$this=$("#"+stock_dayK.name).find(".price li").eq(index);
						$this.css({top:parseInt(this.height/8*i/2)});
						$this.html(price.toFixed(2));
						index++;
					}
					
				}
				cans.stroke();
				
				
				//开盘 收盘 最高 最低
				
				stock_dayK.xy=[];
				
				var x1=interval/12,y1=0,w1=interval/6*5,h1=0;
				var x2=0,y2=0,w2=0,h2=0;
				var x=0,y=0;
				if(stock_dayK.define.pagesize>=150){
					 w2=1;
				}else{
					 w2=2;
				}

				var _xsize=parseInt(stock_dayK.define.pagesize/3);
				var _rightsize=stock_dayK.define.rightsize%_xsize;
				
				//隐藏所有时间
				$("#"+stock_dayK.name).find(".KL-time li").hide();
				
				for(var i=0;i<data.length;i++){
			
					var _data=data[i];
					if(_data!=""){
						_data=_data.split(",");
						
						//跌
						if(_data[1]>_data[2]){
							cans.fillStyle=stock.color.green;
							y1=this.getY(_data[1]);
							h1=this.getY(_data[2])-y1;
							y=y1+h1;
						}else{
							cans.fillStyle=stock.color.red;
							y1=this.getY(_data[2]);
							h1=this.getY(_data[1])-y1;
							y=y1;
						}
							
						if(h1<w2){h1=w2;}

						x2=x1+w1/2-w2/2;
						y2=this.getY(_data[3]);
						h2=this.getY(_data[4])-y2;
						x=x2+w2;
					
						stock_dayK.xy.push({x:x,y:y});	
						
						//时间
						for(var j=0;j<4;j++){
							if(x<67){break;}
							if(x>this.width-67){break;}
							if(i==_xsize*j+_rightsize){
								cans.moveTo(x,0);
								cans.lineTo(x,this.height);
								$("#"+stock_dayK.name).find(".KL-time li").eq(j).css({left:x/2,display:"block"});
								$("#"+stock_dayK.name).find(".KL-time li").eq(j).html(_data[0]);
							}
						}
						
						
						cans.fillRect(x1,y1,w1,h1);
						cans.fillRect(x2,y2,w2,h2);
						
						x1+=interval;

					}
				}
				
				cans.globalCompositeOperation="destination-over";
				cans.stroke();
				cans.closePath();
				
				
				
				//均线 quadraticCurveTo
				var _data=data[0].split(",");
				
				//5日均线:7
				var avg=[5,10,20,30];
				var html="";
				for(var a=0;a<avg.length;a++){
					cans.beginPath();
					cans.lineWidth = 2;  
					cans.strokeStyle=eval("stock.color.avg._"+avg[a]);
					cans.moveTo(0,this.getY(_data[7+a]));
					for(var i=1;i<data.length;i++){
						cans.lineTo(stock_dayK.xy[i].x,this.getY(data[i].split(",")[7+a]));
					}
					cans.stroke();
					cans.closePath();
					html+='<li style="color:'+eval("stock.color.avg._"+avg[a])+';">MA'+avg[a]+'：'+data[i-1].split(",")[7+a]+'</li>';
				}
				$("#"+stock_dayK.name).find("ul.avg").html(html);
				cans.save();
				//释放内存
				$this=null,index=null,price=null;
				cans=null;
			},
			//Y坐标
			getY:function(price){
				return (this.define.max-price)/this.define.differ*this.height;
			}
		},
		//L线
		l:{
			width:0,
			height:0,	
			define:{max:0,allsize:0},//自定义变量(成交量)
			id:null,
			load:function(){
				
				if(stock_dayK.volume.current=="MACD"){
					stock_dayK.MACH.load();
					return false;
				}
				if(stock_dayK.volume.current=="KDJ"){
					stock_dayK.KDJ.load();
					return false;
				}
			
				var data=stock_dayK.pagedata;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_dayK.name+"-l";
				
				var cans=document.getElementById(this.id).getContext('2d');
				
				this.width=parseInt($("#"+this.id).width())*2;
				this.height=parseInt($("#"+this.id).height())*2;

				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);
				
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				
				cans.stroke();
				cans.closePath();
				
				cans.beginPath();
				
				var interval=this.width/(data.length);
				var x=0,y=0,w=interval/6*5,h=0;
				
				if(this.define.max*1>100000000){
					$("#"+stock_dayK.name).find(".max-volume").html((this.define.max/100000000).toFixed(2)+"亿手");
				}else{
					$("#"+stock_dayK.name).find(".max-volume").html((this.define.max/1000000).toFixed(2)+"万手");
				}
				
				for(var i=0;i<data.length;i++){
			
					var _data=data[i];
					if(_data!=""){
						_data=_data.split(",");
						
						//跌
						if(_data[1]>_data[2]){
							cans.fillStyle=stock.color.green;
						}else{
							cans.fillStyle=stock.color.red;
						}
						h=(_data[5]/this.define.max)*this.height*0.98;
						x=stock_dayK.xy[i].x-w/2;
						if(h!=0){
							y=this.height-h;
							cans.fillRect(x,y,w,h);
						}
					
					}
				}
				cans.closePath();
				
				cans=null;
				data=null;
			}
		},
		avg5:[],
		avg10:[],
		avg20:[],
		avg30:[],
		//处理数据
		dispose:function(){
			
			var data=this.data;
			var _data,define,pagedata=[];
			var price_max=0,price_min=100000000,volume_max=0,volume_count=0;
			var length=data.length;
			
			if(length<this.define.pagesize){
				this.define.pagesize=length;
			}
			var endsize=length-this.define.rightsize;
			var ofset=endsize-this.define.pagesize;	
			
			this.define.ofset=ofset;
			this.define.endsize=endsize;
			
			
			if(this.fq.current=="qfq"){
				data=this.fq.qfq.get();
			}else if(this.fq.current=="hfq"){
				data=this.fq.hfq.get();
			}
			
			//几日，几条
			function avg(size,index){
				var price=0;
				var count=0;
				for(var i=index-size-1;i<=index;i++){
					if(i>0){
						count++;
						_data=data[i].split(",");
						price+=_data[2]*1;
					}
				}
				return (price/count).toFixed(2)
			}
		
			
			for(var i=ofset;i<endsize;i++){
			
				_data=data[i].split(",");
				if(this.avg5[i]==undefined){this.avg5[i]=avg(5,i);}
				if(this.avg10[i]==undefined){this.avg10[i]=avg(10,i);}
				if(this.avg20[i]==undefined){this.avg20[i]=avg(20,i);}
				if(this.avg30[i]==undefined){this.avg30[i]=avg(30,i);}
				_data[7]=this.avg5[i];
				_data[8]=this.avg10[i];
				_data[9]=this.avg20[i];
				_data[10]=this.avg30[i];
				
				if(parseFloat(_data[3])>price_max){price_max=_data[3];}
				if(parseFloat(_data[4])<price_min){price_min=_data[4];}
				if(parseFloat(_data[5])>volume_max){volume_max=_data[5];}
				
				volume_count+=parseFloat(_data[5]/100000000);
				
				_data=_data.join(",");
				pagedata.push(_data);
			}

			price_max*=1;
			price_min*=1;

			price_max+=(price_max-price_min)/11;
			price_min-=(price_max-price_min)/11;
			define={
				max:price_max.toFixed(2),
				min:price_min.toFixed(2),
				differ:(price_max-price_min).toFixed(2)
			}
		
			//赋值
			this.k.define=define;
			
			define={
				max:volume_max,
				allsize:volume_count
			}
			this.l.define=define;
			
			this.pagedata=pagedata;
			//释放内存
			delete data;
			delete pagedata;
			_data=null;
			length=null;
			define=null;
			
			price_max=null,price_min=null,volume_max=null,volume_count=null;
	},
	fq:{
		current:"normal",
		data:null,
		//切换
		tab:function(name){
			this.current=name;
			//恢复默认
			stock_dayK.define.pagesize=100;
			stock_dayK.define.rightsize=0;
			stock_dayK.define.interval=0;
			
			stock_dayK.avg5=new Array();
			stock_dayK.avg10=new Array();
			stock_dayK.avg20=new Array();
			stock_dayK.avg30=new Array();
			
			stock_dayK.MACH.data=null;
			stock_dayK.KDJ.data=null;
					
			if(this.current!="normal"){
				this.load(function(){
					stock_dayK.reload();
				})
			}else{
				stock_dayK.reload();
			}
		},
		load:function(c,o){
			if(this.data==null){
				$("#loading").show();
				$.get("data/stock.php",{Action:"fq",stockID:stock.stockID,stockType:stock.stockType},function(data){
					if(data!=""){
						data=data.split("\n");
					}
					stock_dayK.fq.data=data;
					c.call(o);
					$("#loading").hide();
					delete data;
				})
			}else{
				c.call(o);	
			}
		},
		qfq:{
			data:null,
			get:function(){
				if(this.data!=null){
					return this.data;
				}
				var alldata=stock_dayK.data;
				var data=new Array();
				
				var fqdata=stock_dayK.fq.data,_fqdata,_fqtime,_time;
				
				var length=alldata.length;
				
				for(var i=0;i<length;i++){
					_data=alldata[i].split(",");
					data[i]=new Array();
					data[i]=_data;
				}
			
				for(var i=0;i<fqdata.length;i++){
					_fqdata=fqdata[i].split(",");
					_fqtime=new Date(_fqdata[2]).getTime();
						
					for(var j=length-1;j>=0;j--){
							_time=new Date(data[j][0]+" 00:00:00").getTime();
							if(_time<_fqtime){
								data[j][1]=data[j][1]/_fqdata[0]-_fqdata[1];
								data[j][2]=data[j][2]/_fqdata[0]-_fqdata[1];
								data[j][3]=data[j][3]/_fqdata[0]-_fqdata[1];
								data[j][4]=data[j][4]/_fqdata[0]-_fqdata[1];
							}
					}
					
				}
				
				var mydata=[];
				
				for(var i=0;i<length;i++){
					data[i][1]=(data[i][1]*1).toFixed(2);
					data[i][2]=(data[i][2]*1).toFixed(2);
					data[i][3]=(data[i][3]*1).toFixed(2);
					data[i][4]=(data[i][4]*1).toFixed(2);
					mydata[i]=data[i].join(",");
				}
				this.data=mydata;
				//释放内存
				delete alldata;
				delete data;
				delete fqdata;
				delete mydata;
				return this.data;
				
				
			}
		},
		hfq:{
			data:null,
			get:function(){
				if(this.data!=null){
					return this.data;
				}
				var alldata=stock_dayK.data;
				var data=new Array();
				
				var fqdata=stock_dayK.fq.data,_fqdata,_fqtime,_time;
				
				var length=alldata.length;
				
				for(var i=0;i<length;i++){
					_data=alldata[i].split(",");
					data[i]=new Array();
					data[i]=_data;
				}
			
				for(var i=0;i<fqdata.length;i++){
					_fqdata=fqdata[i].split(",");
					_fqtime=new Date(_fqdata[2]).getTime();
						
					for(var j=0;j<length;j++){
						_time=new Date(data[j][0]+" 00:00:00").getTime();
						if(_time>=_fqtime){
							data[j][1]=data[j][1]*_fqdata[0]+_fqdata[1]*1;
							data[j][2]=data[j][2]*_fqdata[0]+_fqdata[1]*1;
							data[j][3]=data[j][3]*_fqdata[0]+_fqdata[1]*1;
							data[j][4]=data[j][4]*_fqdata[0]+_fqdata[1]*1;	
						}
					}
					
				}

				var mydata=[];
				
				for(var i=0;i<length;i++){
					data[i][1]=(data[i][1]*1).toFixed(3);
					data[i][2]=(data[i][2]*1).toFixed(3);
					data[i][3]=(data[i][3]*1).toFixed(3);
					data[i][4]=(data[i][4]*1).toFixed(3);
					mydata[i]=data[i].join(",");
				}
				this.data=mydata;
				//释放内存
				delete alldata;
				delete data;
				delete fqdata;
				delete mydata;
				
				return this.data;
				
				
			}
		}
	},
	//volume
	volume:{
		current:"normal",
		//切换
		tab:function(name){
			this.current=name;
			$("#"+stock_dayK.name).find(".MACD").hide();
			$("#"+stock_dayK.name).find(".KDJ").hide();
			$("#"+stock_dayK.name).find(".volume li").html("");
			$("#"+stock_dayK.name).find("."+name).show();
				
			stock_dayK.define.rightsize=0;
			stock_dayK.reload();
		}
	},
	//MACD
	MACH:{
		
		data:null,
		pagedata:new Array(),
		getData:function(){
			/*
			EMA（12）= 前一日EMA（12）×11/13＋今日收盘价×2/13
			EMA（26）= 前一日EMA（26）×25/27＋今日收盘价×2/27
			
			DIFF=今日EMA（12）- 今日EMA（26）
			DEA（MACD）= 前一日DEA×8/10＋今日DIF×2/10 
			MACH=2×(DIFF－DEA)
			*/
			var alldata=stock_dayK.data,_data;
			
			if(stock_dayK.fq.current=="qfq"){
				alldata=stock_dayK.fq.qfq.get();
			}else if(stock_dayK.fq.current=="hfq"){
				alldata=stock_dayK.fq.hfq.get();
			}
			
			//DIF,DEA,MACH
			var data=new Array();
			
			var EMA12=new Array();
			var EMA26=new Array();
			var DIFF=new Array();
			var DEA=new Array(),_DEA;
			var MACH=new Array();
			
			for(var i=0;i<alldata.length;i++){
				//前一日EMA（12）
				
				_data=alldata[i].split(",");
				
				
				if(i==0){
					EMA12[i]=0;
					EMA26[i]=0;	
				}else if(i==1){
					//第1天条数据
					_data0=alldata[0].split(",");
					EMA12[i]=_data0[2]*1+(_data[2]-_data0[2])*2/13;
					EMA26[i]=_data0[2]*1+(_data[2]-_data0[2])*2/27;	
				}else{
				
					EMA12[i]=EMA12[i-1]*11/13+_data[2]*2/13;
					EMA26[i]=EMA26[i-1]*25/27+_data[2]*2/27;	
				}
				DIFF[i]=EMA12[i]-EMA26[i];
				
				_DEA=DEA[i-1]==undefined?0:DEA[i-1];
				
				DEA[i]=_DEA*8/10+DIFF[i]*2/10;
				
				MACH[i]=2*(DIFF[i]-DEA[i]);
				

				data[i]=[DIFF[i].toFixed(3),DEA[i].toFixed(3),MACH[i].toFixed(3)];
			}

			delete EMA12,EMA26,DIFF,DEA,MACH,_DEA,alldata,_data;
			this.data=data;
			delete data;
		},
		dispose:function(){
			if(this.data==null){
				this.getData();
			}
			this.pagedata=new Array();
			var data=this.data;
			
			var _max=0,_min=100000000;
			var _max2=0,_min2=100000000;
			
			var endsize=stock_dayK.define.endsize;
			var ofset=stock_dayK.define.ofset;	
			
			for(var i=ofset;i<endsize;i++){
				if(parseFloat(data[i][2])>_max){_max=data[i][2];}
				if(parseFloat(data[i][2])<_min){_min=data[i][2];}
				
				
				if(parseFloat(data[i][0])>_max2){_max2=data[i][0];}
				if(parseFloat(data[i][1])>_max2){_max2=data[i][1];}
				
				if(parseFloat(data[i][0])<_min2){_min2=data[i][0];}
				if(parseFloat(data[i][1])<_min2){_min2=data[i][1];}
				this.pagedata.push(data[i]);
			}
			
			_max*=13/11;
			_min*=13/11;
			
			this.define.max=_max.toFixed(2);
			this.define.min=_min.toFixed(2);
			if(_max<=0){
				this.define.differ=-_min;
			}else if(_min<=0){
				//max大于0
				this.define.differ=_max*1-_min*1;
			}else{
				//max,min都大于0
				this.define.differ=_max;	
			}
			
			this.define2.max=_max2;
			this.define2.min=_min2;
			if(_max2<=0){
				this.define2.differ=-_min2;
			}else{
				//max大于0
				this.define2.differ=_max2-_min2;
			}
			delete data;
		},
		width:0,
		height:0,
		define:{max:0,min:0,differ:0},//differ 总价格刻度
		define2:{max:0,min:0,differ:0,maxh:0},//differ 总价格刻度
		id:null,
		load:function(){
				this.dispose();
				
				
				var data=this.pagedata;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_dayK.name+"-l";
				
				var cans=document.getElementById(this.id).getContext('2d');
				
				this.width=parseInt($("#"+this.id).width())*2;
				this.height=parseInt($("#"+this.id).height())*2;

				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);
				
				
				
				var interval=this.width/(stock_dayK.pagedata.length);
				var x=0,y=0,w=interval/6*5,h=0;
				
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				var _maxh=this.define.max/this.define.differ*this.height;
				
				var $this=null;
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(0);
				$this.css({top:0})
				$this.html(this.define.max);
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(1);
				$this.css({top:"50%",marginTop:"-7px"})
				$this.html("0");
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(2);
				$this.css({bottom:0})
				$this.html(this.define.min);
				
				for(var i=0;i<3;i++){
					$("#"+stock_dayK.name).find(".MACD li:eq("+i+") span").html(data[data.length-1][i]);
					if(i==2){
						if(data[data.length-1][i]>0){
							$("#"+stock_dayK.name).find(".MACD li:eq("+i+")").css({color:stock.color.red})
						}else{
							$("#"+stock_dayK.name).find(".MACD li:eq("+i+")").css({color:stock.color.green})
						}
					}
				}
				
				
				//内框线
				/*
				if(this.define.max>0){
					cans.strokeStyle=stock.color.withinBorder;
					cans.moveTo(0,_maxh);
					cans.lineTo(this.width,_maxh);
				}
				*/
				cans.stroke();
				cans.closePath();
				
				//MACH
				for(var i=0;i<data.length;i++){

					//跌
					if(data[i][2]<0){
						cans.fillStyle=stock.color.green;
					}else{
						cans.fillStyle=stock.color.red;
					}
					
					h=data[i][2]/this.define.max*_maxh;
					y=_maxh-h;
					x=stock_dayK.xy[i].x-w/2;
					if(h!=0){
						cans.fillRect(x,y,w,h);
					}
				}
				
				cans.closePath();
				
				
				this.define2.maxh=this.define2.max/this.define2.differ*this.height;
				
				//DIF
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.MACD.DIF;
				cans.moveTo(0,this.getY2(data[0][0]));
				
				
				for(var i=1;i<data.length;i++){
					x=stock_dayK.xy[i].x;
					y=this.getY2(data[i][0]);
					cans.lineTo(x,y);
				}
				
				cans.stroke();
				cans.closePath();
				
				//DEA
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.MACD.DEA;
				cans.moveTo(0,this.getY2(data[0][1]));
				

				for(var i=1;i<data.length;i++){
					x=stock_dayK.xy[i].x;
					y=this.getY2(data[i][1]);
					cans.lineTo(x,y);
				}
				cans.stroke();
				cans.closePath();
				
				cans.save();
				
				cans=null;
				delete data;
		},
		getY2:function(price){
			return this.define2.maxh-price/this.define2.max*this.define2.maxh;
		}
	},
	KDJ:{
		data:null,
		define:{max:0,min:0,differ:0},//differ 总价格刻度
		getData:function(){
			
			var alldata=stock_dayK.data,_data;
			var _max=0,_min=100000000;
			var _max2=0,_min2=100000000;
			
			if(stock_dayK.fq.current=="qfq"){
				alldata=stock_dayK.fq.qfq.get();
			}else if(stock_dayK.fq.current=="hfq"){
				alldata=stock_dayK.fq.hfq.get();
			}
			//$("#dayK-l").css({background:"#000"});//要删
			
			//开盘 收盘 最高 最低
			
			function LH(index){
				_max=0,_min=100000000;
				for(var i=index-9;i<index;i++){
					if(i>=0){
						_data=alldata[i].split(",");
						if(_data[4]<_min){_min=_data[4];}
						if(_data[3]>_max){_max=_data[3];}
					}
				}
				return [_min,_max];
			}
			
			//K,D,J
			var data=new Array();
			
			var K=new Array(),_K;
			var D=new Array(),_D;
			var J=new Array();
			var RSV=0,_LH;
			
			
			for(var i=0;i<alldata.length;i++){
				
					_data=alldata[i].split(",");
					_LH=LH(i);
					
					if(_LH[0]==_LH[1]){
						RSV=0;	
					}else{
						RSV=(_data[2]-_LH[0])/(_LH[1]-_LH[0])*100;
					}

					_K=K[i-1]==undefined?50:K[i-1];
					_D=D[i-1]==undefined?50:D[i-1];
				
					K[i]=2/3*_K+1/3*RSV;
					D[i]=2/3*_D+1/3*K[i];
					
					J[i]=3*D[i]-2*K[i];	
					
					if(J[i]>_max2){_max2=J[i];}
					if(J[i]<_min2){_min2=J[i];}
					
					if(K[i]>100){K[i]=100;}if(K[i]<1){K[i]=1;}
					if(D[i]>100){D[i]=100;}if(D[i]<1){D[i]=1;}
					if(J[i]>100){J[i]=100;}if(J[i]<1){J[i]=1;}
					
					data[i]=[K[i].toFixed(2),D[i].toFixed(2),J[i].toFixed(2)];
			}
			delete K,D,J,alldata,_data;
			this.data=data;
			delete data;
			//alert(_max2+","+_min2)
			/*
			this.define.max=_max.toFixed(2);
			this.define.min=_min.toFixed(2);
			
			*/
		},
		dispose:function(){
			if(this.data==null){
				this.getData();
			}
			this.pagedata=new Array();
			var data=this.data;

			
			var endsize=stock_dayK.define.endsize;
			var ofset=stock_dayK.define.ofset;	
			
			for(var i=ofset;i<endsize;i++){

				this.pagedata.push(data[i]);
			}
			delete data;
		},
		width:0,
		height:0,
		id:null,
		//加载KJD
		load:function(){
				this.dispose();
				
				var data=this.pagedata;
				var $this=null,index=0,price=0;
				if(data==null){return false;}
				this.id=stock_dayK.name+"-l";
				
				var cans=document.getElementById(this.id).getContext('2d');
				
				this.width=parseInt($("#"+this.id).width())*2;
				this.height=parseInt($("#"+this.id).height())*2;
				//$("#"+this.id).css({background:"#000"})
				$("#"+this.id).attr("width",this.width);
				$("#"+this.id).attr("height",this.height);

				
				for(var i=0;i<3;i++){
					$("#"+stock_dayK.name).find(".KDJ li:eq("+i+") span").html(data[0][i]);
				}
				
				var $this=null;
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(0);
				$this.css({top:0})
				$this.html("100");
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(1);
				$this.css({top:"50%",marginTop:"-7px"})
				$this.html("50");
				
				$this=$("#"+stock_dayK.name).find(".volume li").eq(2);
				$this.css({bottom:0})
				$this.html("0");
				
				
				var x=0,y=0;
				
				
				cans.beginPath();
				  
				cans.translate(0.5,0.5);
				cans.lineWidth = 1;  
	
				cans.strokeStyle=stock.color.border;
				
				//画框
				cans.strokeRect(0, 0, this.width-1,this.height-1);
				
				
				cans.strokeStyle=stock.color.withinBorder;
				cans.moveTo(0,this.height/2);
				cans.lineTo(this.width,this.height/2);
				cans.stroke();
				cans.closePath();
				
				
			
				//K
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.KDJ.K;
				cans.moveTo(0,this.getY(data[0][0]));
				
		
				for(var i=1;i<data.length;i++){
					x=stock_dayK.xy[i].x;
					y=this.getY(data[i][0]);
					cans.lineTo(x,y);
				}
				
				cans.stroke();
				cans.closePath();
				
				//D
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.KDJ.D;
				cans.moveTo(0,this.getY(data[0][1]));
				
				index=0;
				for(var i=1;i<data.length;i++){
					x=stock_dayK.xy[i].x;
					y=this.getY(data[i][1]);
					cans.lineTo(x,y);
					index++;
				}
				
				cans.stroke();
				cans.closePath();
				
				//J
				
				cans.beginPath();
				cans.lineWidth = 2;  
				cans.strokeStyle=stock.color.KDJ.J;
				cans.moveTo(0,this.getY(data[0][2]));
				
				for(var i=1;i<data.length;i++){
					x=stock_dayK.xy[i].x;
					y=this.getY(data[i][2]);
					cans.lineTo(x,y);
				}
				cans.stroke();
				cans.closePath();
				
					
		},
		getY:function(price){
			return this.height-price/100*this.height;
		}
	},
	//监听事件
	touch:{
		map:null,
		spirit:null,
		size:0,
		_size:0,
		x:0,//用于移动偏离
		x2:0,//由于手机是否长点击
		load:function(){

			var touchID=$("#"+stock_dayK.name).find(".touch").attr("id");//当前ID
			this.map=document.getElementById(touchID);
			var lock1=true;//经过画布时
			var lock2=true;//点击时
			
			
			//放大缩小
			$("#"+stock_dayK.name).find(".zoom span").click(function(){
				
				var type=$(this).attr("class");
				var index=0;
				var length=stock_dayK.define.flexsize.length;
				for(var i=0;i<length;i++){
					if(stock_dayK.define.flexsize[i]==stock_dayK.define.pagesize){
						index=i;break;
					}
				}
				//放大
				if(type=="up"){
					index--;
				}else{
					index++;
				}
				if(index<0){return false;}
				if(index==length){return false;}
				stock_dayK.define.pagesize=stock_dayK.define.flexsize[index];
				stock_dayK.touch.hideXY();
				lock1=false;
				
				stock_dayK.reload();
				
			});
			
			//复权
			$("#"+stock_dayK.name).find("#ktool .fq").click(function(){
				var name=$(this).attr("name");
				if(stock_dayK.fq.current==name){
					return false;	
				}
				$("#"+stock_dayK.name).find("#ktool .fq").removeClass("current");
				$(this).addClass("current");
				stock_dayK.fq.tab(name);
			});
			//MACD
			$("#"+stock_dayK.name).find("#ktool .volume").click(function(){
				var name=$(this).attr("name");
				if(stock_dayK.volume.current==name){
					return false;	
				}
				$("#"+stock_dayK.name).find("#ktool .volume").removeClass("current");
				$(this).addClass("current");
				stock_dayK.volume.tab(name);
			});
			
			
			if(stock.isPC){
				
				//鼠标经过
				$("#"+touchID).hover(function(){
					stock_dayK.touch.showXY();
					lock1=true;
				},function(){
					stock_dayK.touch.hideXY();
					lock1=false;
				});
				
				$("#"+touchID).find(".zoom").hover(function(){
					stock_dayK.touch.hideXY();
					lock1=false;
				},function(){
					stock_dayK.touch.showXY();
					lock1=true;
				});
				
				
				$("#"+stock_dayK.name).mousemove(function(e){
					if(lock1){
						e.clientX-=stock.touch.left;
						e.clientY-=stock.touch.top;
						stock_dayK.touch.handle(e.clientX,e.clientY);
					}
				});
			
				$("#"+touchID).mousedown(function(e){
					stock_dayK.touch.touchStart(e.clientX,e.clientY);
					lock2=true;
					$("#"+touchID).addClass("pointer");
					stock_dayK.touch.hideXY();
					lock1=false;
					
					document.onmousemove = function(e) {
						if(lock2){ 
							stock_dayK.touch.touchMove(e.clientX,e.clientY);
						}
					}
					document.onmouseup = function (e) {
						stock_dayK.touch.touchEnd(e.clientX,e.clientY);
						
						stock_dayK.touch.showXY();
						lock1=true;
					
						lock2=false;
						$("#"+touchID).removeClass("pointer");
					}
				});
			}else{
				var x=0,y=0;
				function touchStart(event) {
					//阻止网页默认动作（即网页滚动）
					event.preventDefault();	
					if (!event.touches.length) return;
					var touch = event.touches[0];
					
					x=touch.pageX;
					y=touch.pageY;
					
					stock_dayK.touch.x2=x;
					stock_dayK.touch.touchStart(x,y);
					
					stock_dayK.touch.hideXY();
					lock1=true;
					lock2=true;
					window.setTimeout(function(){
						if(stock_dayK.touch.x2==x&&lock1){
							stock_dayK.touch.showXY();
							lock2=false;
							stock_dayK.touch.handle(x-stock.touch.left,y-stock.touch.top);	
						}
					},500)
				}
				function touchMove(event) {
					event.preventDefault();
					if (!event.touches.length) return;
					var touch = event.touches[0];
					x=touch.pageX;
					y=touch.pageY;
					if(stock_dayK.touch.x2!=x){
						lock1=false;
					}
					stock_dayK.touch.x2=x;
					//没有锁定
					if(lock2){
						stock_dayK.touch.touchMove(x,y);
					}else{
						stock_dayK.touch.handle(x-stock.touch.left,y-stock.touch.top);	
					}
				}
				function touchEnd(event) {
					if(lock2){
						stock_dayK.touch.touchEnd(x,y);
					}
					lock1=false;
					stock_dayK.touch.hideXY();
				}
				this.map.addEventListener("touchstart", touchStart, false);
				this.map.addEventListener("touchmove", touchMove, false);
				this.map.addEventListener("touchend", touchEnd, false);
					 
			}
		},
		handle:function(x,y){
			var index=Math.round(stock_dayK.pagedata.length/stock_dayK.k.width*x*2);
			var data=stock_dayK.pagedata[index];

			if(data==undefined){
				this.hideXY();
				return false;
			}
			
			
			data=data.split(",");
			
			y=stock_dayK.xy[index].y/2;
			
			$("#"+stock_dayK.name).find(".x").css({top:y});
			
			$("#"+stock_dayK.name).find(".x").find(".current-price").html(data[2]);
		
			
			x=(stock_dayK.xy[index].x/2)-1;
			if(index==0){x=0;}
			$("#"+stock_dayK.name).find(".y").css({left:x});
			
			//开盘 收盘 最高 最低
			var str="";
			var style="";
			str+='<li class="k-li">时间:<span class="grey">'+data[0]+'</span></li>';
			str+='<li class="k-li">高:<span class="red">'+data[3]+'</span></li>';
			
			style=data[1]<data[2]?"green":"red";
			str+='<li class="k-li">开:<span class="'+style+'">'+data[1]+'</span></li>';
			
			style=data[4]<data[3]?"green":"red";
			str+='<li class="k-li">低:<span class="'+style+'">'+data[4]+'</span></li>';
			
			style=data[2]<data[1]?"green":"red";
			str+='<li class="k-li">收:<span class="'+style+'">'+data[2]+'</span></li>';
			
			//前一天数据
			var _data=stock_dayK.pagedata[index-1];
			if(_data!=undefined){
				_data=_data.split(",");
				var val=((data[2]-_data[2])/_data[2]*100).toFixed(2);
				style=val<0?"green":"red";
				str+='<li class="k-li">涨跌:<span class="'+style+'">'+val+'%</span></li>';
			}
			
			$("#headers ul").html(str);
			
			if(stock_dayK.volume.current=="MACD"){
				data=stock_dayK.MACH.pagedata[index];
				for(var i=0;i<3;i++){
					$("#"+stock_dayK.name).find(".MACD li:eq("+i+") span").html(data[i]);
					if(i==2){
						if(data[i]>0){
							$("#"+stock_dayK.name).find(".MACD li:eq("+i+")").css({color:stock.color.red})
						}else{
							$("#"+stock_dayK.name).find(".MACD li:eq("+i+")").css({color:stock.color.green})
						}
					}
				}
			}else if(stock_dayK.volume.current=="KDJ"){
				data=stock_dayK.KDJ.pagedata[index];
				for(var i=0;i<3;i++){
					$("#"+stock_dayK.name).find(".KDJ li:eq("+i+") span").html(data[i]);
				}
			}
				
			data=null;
		},
		//显示XY
		showXY:function(){
			$("#headers ul").show();
			$("#"+stock_dayK.name).find(".x").show();
			$("#"+stock_dayK.name).find(".y").show();
		},
		//隐藏XY
		hideXY:function(){
			$("#headers ul").hide();
			$("#"+stock_dayK.name).find(".x").hide();
			$("#"+stock_dayK.name).find(".y").hide();
		},
		touchStart:function(x,y){
			x-=stock.touch.left;
			y-=stock.touch.top;
			this.x=x;
			this.size=stock_dayK.define.rightsize;
		},
		touchMove:function(x,y){
			x-=stock.touch.left;
			y-=stock.touch.top;
			if(x<0){x=0;}
			if(y<0){y=0;}
			//每次移动格数
			var _size=parseInt((x-this.x)/stock_dayK.define.interval*2);
			//清除多余
			if(this._size==_size){
				return false;	
			}
			this._size=_size;
			
			stock_dayK.define.rightsize=_size+this.size;

			if(stock_dayK.define.rightsize<0){
				stock_dayK.define.rightsize=0;
				return false;
			}
			if(stock_dayK.define.rightsize+stock_dayK.define.pagesize>=stock_dayK.data.length){
				stock_dayK.define.rightsize=stock_dayK.data.length-stock_dayK.define.pagesize;
				return false;
			}
			
			stock_dayK.reload();
			
		},
		touchEnd:function(x,y){
			var _size=parseInt((x-this.x)/stock_dayK.define.interval*2);
			stock_dayK.define.rightsize=this.size+_size;
			if(stock_dayK.define.rightsize<0){
				stock_dayK.define.rightsize=0;
				return false;
			}
			if(stock_dayK.define.rightsize+stock_dayK.define.pagesize>=stock_dayK.data.length){
				stock_dayK.define.rightsize=stock_dayK.data.length-stock_dayK.define.pagesize;
				return false;
			}
			this.x=0;
		}
	}		
}


