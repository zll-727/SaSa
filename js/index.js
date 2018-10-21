requirejs.config({
	paths:{
		"jquery":"jquery-1.11.3"
	}
})

requirejs(["jquery"],function($){
	//li滑过之后
	$("#h-right li").hover(function(){
		bgcolor = $(this).css("backgroundColor");
		$(this).css({"background":"white"});
	},function(){
		$(this).css({"background" : bgcolor});
	})
	
	
	//我的账号
	$('#uCount').hover(function(){
		$('#ulist').css({"display":"block"});	
		$("#ulist li").hover(function(){
			$(this).css({color:"#fa3778"});
		},function(){
			$(this).css({color:""});
		})
	},function(){
		$("#ulist").css("display","none");
	})
	
	//我的购物车
	$("#ushopCar").hover(function(){
		$("#shopcar").css({"display":"block"})
	},function(){
		$("#shopcar").css({"display":"none"});
	})
	
	//关注我们
	$("#wb").hover(function(){
		$("#wbcode").css({"display":"block"});
	},function(){
		$("#wbcode").css({"display":"none"});
	})
	$("#wx").hover(function(){
		$("#wxcode").css({"display":"block"});
	},function(){
		$("#wxcode").css({"display":"none"});
	})
	
	
	//香港特快直达
	$("#special_list > li > a").hover(function(){
		$(this).css({"color":"#fa3778"});
	
		$("#special_list > li").last().hover(function(){
			$("#all_brand").css({"display":"block"});
		},function(){
			$("#all_brand").css({"display":"none"});
		})
	},function(){
		$(this).css({"color":""});
	})
	
	//轮播图
	lunbo();
	function lunbo(){
		var i = 0;
		var timer;
		$(function(){
			//第一张图片显示，其他的隐藏
			$('#box li').eq(0).show().siblings().hide();
			clearInterval(timer);
			autoPlay();
			$('#pox li').hover(function(){
				//获取当前的i值，并显示,同时清除定时器
				//如果不给 .index() 方法传递参数，那么返回值就是这个jQuery对象集合中第一个元素相对于其同辈元素的位置。
				//获取当前下标
				i = $(this).index();
				slide();
				clearInterval(timer);
			},function(){
				clearInterval(timer);
				autoPlay();
			});
		})
		//自动轮播函数
		function autoPlay(){
			//定时器
			clearInterval(timer);
			timer = setInterval(function(){
				//调用show函数					
				if(i==4){
					i=-1;
				}
				i++;
				if(i<5){
					//$("#box").animate({"opacity":0.1},500) ;
				}
				slide();
			},3000)
			$('#box').hover(function(){
				clearInterval(timer);
			},function(){
				autoPlay();
			})
		}		
		//轮播函数
		function slide(){
			//大图
			$('#box li').eq(i).css({display:'block'}).siblings().css({display:'none'});
			//重置圆点的样式
			$('#pox li').eq(i).css({"background":"#fa3778"}).siblings().css({"background":"#ADADAD"});
		}
	}

	//右边悬浮
	$("#floor >li").each(function(index,value){
		$(value).hover(function(){
			//购物车
			$(value).find("#f_spw").css({"background":"#fa3778"});
			//剩下的
			$(value).find("em").css({"background":"#fa3778"});
			$("#li_top").find("em").css({"background":0});
			$(value).find("span").css({"display":"block"}).animate({"left":"-80px"});
		},function(){
			$(value).find("em").css({"background":0});
			$(value).find("span").css({"left":"-100px","display":'none'});
			$(value).find("#f_spw").css({"background":0});
		})	
	})
	
	//点击top回到顶部
	$("#li_top").click(function(){
		$("body,html").animate({scrollTop:0},500);	
	})

	/*侧边列表*/
	
	$("#type_list >li").each(function(index,value){
		$(value).hover(function(){
			$(value).css({"background":"#fff","color":"#000"});
			$('#tl_1').css({"background":"#333333","color":"#fff"});
			$(value).find(".face").css({"display":"block"});
			
			
			$(".face > li").each(function(index,value){
				$(value).find('a').hover(function(){
					$(value).find('a').css({"color":"#fa3778"});
					$(value).find('ul li a').css({"color":"#ADADAD"});
				},function(){
					$(value).find('a').css({"color":"#4f484a"});
					$(value).find('ul li a').css({"color":"#ADADAD"});
					$(".face_1 > li").each(function(index,value){
						$(value).find('a').hover(function(){
							$(this).css({"color":"#fa3778"});
						},function(){
							$(this).css({"color":"#ADADAD"});
						})
					})
				})
			})
			
		},function(){
			$(value).css({"background":"#fa3778","color":"#fff"});
			$('#tl_1').css({"background":"#333333","color":"#fff"});
			$(value).find(".face").css({"display":"none"});
		})
	})
	
	/**/
	
		
})

