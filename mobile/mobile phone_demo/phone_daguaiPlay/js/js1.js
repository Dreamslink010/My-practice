changePage()
function changePage(){
	var section = document.getElementsByTagName('section');
	var pageDown = 0
	bind(document,'touchstart',function(ev){
		var ev = ev||event;
		pageDown = ev.changedTouches[0].pageY;
	});
	bind(document,'touchend',function(){
		var ev = ev||event;
		var pageUp = ev.changedTouches[0].pageY;
		if(pageUp>pageDown){
		}else{
			removeClass(section[0],'sectionIn');
			addClass(section[0],'sectionOut');
		};
	});
};
musicShow()
function musicShow(){
	var au = s('music').getElementsByTagName('audio')[0];
	bind(s('music'),'touchstart',function(event){
		event.stopPropagation();
		if(au.paused){
			au.play();
			removeClass(s('music'),'musicStop')
			addClass(s('music'),'musicRun');
		}else{
			au.pause();
			removeClass(s('music'),'musicRun')
			addClass(s('music'),'musicStop');
		};
	});
};
var arrImg = [
	'img/top.png',
	'img/bg.png',
	'img/flay.png',
	'img/name.png',
	'img/thanks.png'
];
var loadImg = 0;
for(var i = 0; i<arrImg.length; i++){
	var aImg = document.createElement('img');
	aImg.src = arrImg[i];
	aImg.onload = function(){
		loadImg++;
		s('progress').style.width = Math.floor(loadImg/arrImg.length) * 100 +'%';
		if(loadImg == arrImg.length){
			remove(s('progress').parentNode);
		};
		
	};
}
































