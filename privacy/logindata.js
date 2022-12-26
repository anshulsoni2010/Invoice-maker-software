function run()
{
var a= document.getElementById("UserPassword").value;

if (a=="9660762444")
  {
window.open("./users-file/s.k.enterprises")  }
if(a==1234567890){
  window.open("./users-file/dummy")  }


else
  {
    a= document.getElementById("invalid");
    a.innerHTML="You have entered invalid password!,Try again";
  }
}
