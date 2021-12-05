function func(){
  var mail_id=document.getElementById("id1")
  var str=mail_id.value;
  var paswd=document.getElementById("id2")
  var str2=paswd.value;
  var ctx=document.getElementById("ref");
   if(str=="chandra.pujitha02@gmail.com" && str2=="puji121" || str=="suraj@gmail.com" && str2=="suraj21")
  	{ ctx.innerHTML="Login";alert("success");}
  else
  	alert("invalid credentials");

 
}