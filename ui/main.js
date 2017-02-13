//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and save it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState==XMLHttpRequest.DONE)
        {
            //take some action
             if(request.status==200)
             {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();  
             }
        }
       //not done yet
    };
    request.open('GET','http://nishant8055.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
  //make a request to the server and send the name
  var request=new XMLHttpRequest();
    //capture the response and save it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState==XMLHttpRequest.DONE)
        {
            //take some action
             if(request.status==200)
             {
              var names=['name1','name2','name3','name4'];
              var list='';
              for(var i=0;i<names.length;i++)
               {
                  list+='<li>'+names[i]+'</li>';
               }
               var ul=document.getElementById('namelist');
                ul.innerHTML=list;
              
             }
        }
       //not done yet
    };
var nameInput=document.getElementById('name');
var name=nameInput.value;
request.open('GET','http://nishant8055.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};