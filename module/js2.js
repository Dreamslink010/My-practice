/**
 * Created by Administrator on 2017/4/13.
 */
/*
一个文件就是一个模块
每个模块都有自己的作用域
我们使用var声明一个变量，他并不是全局的，而是属于当前模块下的
*/
/*
var a = 100;
console.log(a);
global.a = 200;
console.log(a);
console.log(global.a);*/
//__filename 当前文件被解析过后的的绝对路径
//console.log(__filename);
/*
模块加载系统
require("模块")
*/
//require('./js3(mokuai).js')
/*
模块加载机制
路径(可以是相对路径，也可以是绝对路径)
绝对路径
 require("c:/WS_demo/module/js3(mokuai).js");
相对路径
 require("./js3(mokuai).js");
*/

//require('js3(mokuai).js') //这种相对路径没有./的话是错误的，他会去加载node中的核心模块。或者是node_modules
/*
1.首先按照加载模块的文件名进行查找
2。如果没有找到，则会在文件名称后加上.js的后缀，进行查找
3.如果还没有找到，则会在文件的名称后加上.json的后缀，进行查找
4.如果还没有，则会在文件名称后加上.node的后缀，进行查找
文件名 ——>.js ——>.json ——>.node ——>报错

*/












