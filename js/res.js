requirejs.config({
	paths:{
		"jquery":"jquery-1.11.3"
	}
})

requirejs(["jquery"],function(){
	//用户名获取焦点
	var flagNum = null;
	$("#unum").blur(function(){
		var res1=/[\w]+@((126)|(163)|(qq))((\.com)|(\.cn))$/;
		var res2 =  /^[\d]{11}$/;
		
		if( res1.test($('#unum').val()) || res2.test($("#unum").val()) ){
			$('#p1').css({"opacity":0});
			flagNum =  true;
		}
		else{
			$('#p1').css({"opacity":1});
			flagNum =  false;
		}
	})
	
	//密码获取焦点
	var flagPwd = null;
	$("#upwd").blur(function(){
		//var res = /^[_a-z0-9]{6,16}$/;
		
		var res1 = /^([0-9]){1,6}|([a-z]){1,6}$/;
		if(res1.test($("#upwd").val())){
			$('#em2').css({"opacity":1});
			flagPwd = true;
		}
		else{
			flagPwd = false;
		}
		
		var res2 = /^([0-9]){6,16} |([a-z]){6,16}$/;
		var res2_1 = /^[\d]{6,16}$/;
		var res2_2 = /^[a-z]{6,16}$/;
		if(res2.test($("#upwd").val()) || res2_1.test($("#upwd").val())
			 || res2_2.test($("#upwd").val()) ){
			$('#em2').css({"opacity":1,"background":"orange",});
			$("#em2").html("弱");
			flagPwd = true;
		}
			 else{
			flagPwd = false;
		}
		
		var res3 = /^([0-9]){6,16}|([a-z]){6,16}$/;
		if(res3.test($("#upwd").val())){
			$('#em2').css({"opacity":1,"background":"green"});
			$("#em2").html("中");
			flagPwd = true;
		}
		else{
			flagPwd = false;
		}
		
		var res = /^[0-9a-z_]{6,16}$/;
		if(res.test($("#upwd").val())){
			$('#em2').css({"opacity":1,"background":"skyblue"});
			$("#em2").html("强");
			flagPwd = true;
		}
		else{
			flagPwd = false;
		}
	})
	
	//重复密码 
	var flagRep = null;
	$("#urep").blur(function(){
		if($('#upwd').val() == $('#urep').val()){
			$('#p2').css({"opacity":0});
			flagRep = true;
		}
		else{
			$('#p2').css({"opacity":1});
			flagRep = false;
		}
	})
	
	
	//点击获取验证码
	yzm();
	var flagTest = null;
	
	
	$("#utest").blur(function(){
		var Ynum = $("#utest").val();
	    var Ybtn = $("#test").html();
		if(Ynum == Ybtn){
			flagTest = true;
		}
		else{
			flagTest = false;
		}
	})

	
	$("#test").click(function(){
		yzm();
	})
	
	$("#testBtn").click(function(){
		yzm();
 	})
	function yzm(){
		var num = rand(1000,9999);
		var color = getColor();
		$("#test").html(num).css({"background": color});
	}
	function rand(min,max){
		return Math.round(Math.random()*(max-min)+min)
	}
	function getColor(){
		var str="0123456789abcdef";
		var color="#";
		for(var i=1;i<=6; i++){
			color+=str.charAt(rand(0,15));
		}
		return color;
	}
	
	
	//获取邮箱验证码
	var flagEmail = null;
	
	$("#Ebtn").click(function(arr){
		Eyzm();
 	})
	function Eyzm(){
		var num = rand(100000,999999);
		var color = getColor();
		$("#uEmail").val(num);
	}
	
	$("#Ebtn").blur(function(){
		var Enum = $("#uEamil").val();
		var hqEnum = $("#Ebtn").val();
		if(Enum==hqEnum){
			flagEmail = true;
		}
		else{
			flagEmail = false;
		}
	})
	
	$("#subBtn").click(function(){
		if( flagNum && flagPwd && flagRep){	
			window.location.href = "login.html";
			var uname = setCookie("unum",$('#unum').val(),1000);
			var uphone = setCookie("upwd",$('#upwd').val(),1000);
			var uedu = setCookie("urep",$('#urep').val(),1000);
			var uage = setCookie("utest",$('#utest').val(),1000);
			var umoney = setCookie("uEmail",$('#Email').val(),1000);
			alert(document.cookie);
			
		}
	})
})
	
	

