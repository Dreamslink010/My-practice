function ep1(){
	console.log(`我是ep1`);
}

function ep2(){
	console.log(`我是ep2`);
}

export {   //esc6中模块化管理暴露出口的关键字
	ep1,
	ep2
}
export default function fn(){ //export default 关键字，默认导出的意思
	console.log(`fn from module b`);
}
