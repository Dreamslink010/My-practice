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
