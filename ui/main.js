//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and save it in a variable
    request.onreadystatechanage=function()
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