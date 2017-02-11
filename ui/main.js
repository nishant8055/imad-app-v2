//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
       if(request.readystate==XMLHttpRequestDONE)
       {
           if(request.status==200)
           {
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML=counter.toString();
           }
       }
    };
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{var names=['name1','name2','name3'];
var list='';
for(var i=0;i<names.length;i++)
{
    
}
    
}