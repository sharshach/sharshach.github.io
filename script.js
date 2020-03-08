var myVar = setInterval(func1, 20);
function func1(){
	var item=document.getElementById('i0');
	var style = window.getComputedStyle(item);
	var left = parseInt(style.getPropertyValue('left'),10);
	var top = parseInt(style.getPropertyValue('top'),10);
	var width=screen.width-154;
	var x=Math.random()*3;
	var y=Math.random()*3;
	if(left>width||left<0){
		left=left-1;
	}
	if(left%2==0)
		item.style.left=(left+2);
	else
		item.style.left=(left-2);
}