/*
	1、用来获取元素
	2、用来判断某个元素是否有某个class
	3、如果没有就添加
	4、如果有就删除
*/

//获取元素

function M(sele){
	var first = sele.substr(0,1),
		isArr = sele.split(' ');
	if(first == '#' && isArr.length == 1){
		return document.getElementById(substr(1));
	}else{
		var arr = Array.from(document.querySelectorAll(sele));
		return arr.length == 1 ? arr[0] : arr;
	}
		
}
