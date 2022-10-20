function validate()
{
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    // debugger;
    // console.log(username,password.trim());
   
if(username.value =="" || password.value==""){
    alert("blank values are not allowed");
    return false;
}
else{
true;
}
}
