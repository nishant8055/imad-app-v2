console.log('Loaded!');
//change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
var img=document.getElementById('madi');
var marginRight=0;
function moveLeft()
{
    marginRight=marginRight + 10;
    img.style.marginRight=marginRight+ 'px';
}
img.onclick=function()
{
    var interval=setInterval(moveLeft,50);
};