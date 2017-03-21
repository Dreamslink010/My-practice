/*验证邮编*/
function postCode(i){
	var	pattern = /^[1-9]\d{5}$/;
	var result = pattern.test(i);
	return result;
};
/*验证至少n位的数字（验证码）*/
function leastNumber(n,i){
	var pattern= '^\\d{'+n+',}$';
	var regx = new RegExp(pattern);
	var result = regx.test(i);
	return result;
};
/*验证m到n个数字*/
function BetweenNumber(n,m,i){
	var pattern = '^\\d{'+n+','+m+'}$';
	var regx = new RegExp(pattern);
	var result = regx.test(i);
	return result;
};
/*验证手机号码*/
function phoneNumber(i){
	var pattern = /^1[34578]\d{9}$/;
	var result = pattern.test(i);
	return result;
};
/*验证电子邮箱*/
function Email(i){
	var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var result = pattern.test(i);
	return result;
};
/*验证中文m-n个字*/
function mustChinese(m,n,i){
	var pattern = '^[\u4e00-\u9fa5]{'+m+','+n+'}$';
	var regx = new RegExp(pattern);
	var result = regx.test(i);
	return result;
};
/*验证电话号码*/
function telephone(i){
	var pattern = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/;
	var result = pattern.test(i);
	return result;
};
/*验证身份证号*/
function idNumber(i){
	var pattern = /^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/;
	var result = pattern.test(i);
	return result;
};

//btn.onclick = function(){
//	var inpt = document.getElementById('inpt');
//	var btn = document.getElementById('btn');
//	var val = inpt.value;
//	console.log(idNumber(val));
//	
//}
/*验证数字的正则表达式集 
验证数字：^[0-9]*$
验证n位的数字：^\d{n}$
验证至少n位数字：^\d{n,}$
验证m-n位的数字：^\d{m,n}$
验证零和非零开头的数字：^(0|[1-9][0-9]*)$
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
验证非零的正整数：^\+?[1-9][0-9]*$
验证非零的负整数：^\-[1-9][0-9]*$
验证非负整数（正整数 + 0）  ^\d+$
验证非正整数（负整数 + 0）  ^((-\d+)|(0+))$
验证长度为3的字符：^.{3}$
验证由26个英文字母组成的字符串：^[A-Za-z]+$
验证由26个大写英文字母组成的字符串：^[A-Z]+$
验证由26个小写英文字母组成的字符串：^[a-z]+$
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
验证由数字、26个英文字母或者下划线组成的字符串：^\w+$
验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+
验证汉字：^[\u4e00-\u9fa5],{0,}$
验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
验证身份证号（15位或18位数字）：^\d{15}|\d{}18$
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$    正确格式为：01、09和1、31。
整数：^-?\d+$
非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$
正浮点数   ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
负浮点数  ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数  ^(-?\d+)(\.\d+)?*/