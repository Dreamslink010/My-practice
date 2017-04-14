/**
 * Created by Administrator on 2017/4/14.
 */
/*
process他是一个全局对象,可以在任何地方都能访问到他，通过这个对象提供的属性和方法，使我们对当前运行的程序进行访问和控制
argv -Array，一组包含命令行参数的数组
execPath 开启当前进程的绝对路径
env返回用户环境信息


*/
//console.log(process);
//console.log(global.process);
//console.log(process.argv);
//console.log(process.env);
//console.log(process.pid);
//console.log(process.title);
//process.stdout.write('hello');
/*
function log(data){
    process.stdout.write(data);
};
log('你好');*/
/*
 stdin 标准输入流
 stdout 标准输出流
默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流

*/
/*process.stdin.resume();
//用于监听用户的输入数据
process.stdin.on('data',function(chunk){
    console.log('用户输入了：'+chunk);
});*/
var a,b;
process.stdout.write('请输入a的值：');
process.stdin.on('data',function(chunk){
    if(!a){
        a = Number(chunk);
        process.stdout.write('请输入b的值：');
    }else{
        b = Number(chunk);
        process.stdout.write( '结果是：'+ (a + b) );
    }
})

















