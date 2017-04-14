/** Created by Administrator on 2017/4/13.*/

/*
在ECMAScript部分node和js其实是一样的，比如数据类型的定义，语法结构，内置的对象
在js中的顶层对象，是window
在node中没有什么window
node的顶层就是global（全局）
 */

/*var a = 100;
console.log(a);*/
/*
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getHours());*/
/*var arr = [1,2,3];
arr.push(4);
console.log(arr);*/
/*function Person(name){
    this.name = name;
};
Person.prototype.run = function(){
    console.log(this.name + ' running')
};
var p1 = new Person('leo');
p1.run();*/
var a = 100;
console.log(global.a); //undefined
