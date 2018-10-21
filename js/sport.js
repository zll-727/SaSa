//获取CSS样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//完美运动
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true; //检测停止的开关
		for(var attr in json){
			//获取初值
			var cur = 0;
			if(attr == "opacity"){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			//设置速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0? Math.ceil(speed) : Math.floor(speed);
			//检测停止
			if(json[attr] != cur){
				stop = false;
			}
			//运动
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed ) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}
