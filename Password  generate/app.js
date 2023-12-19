function generatePassword(){
  var pass ="";
  var item = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*";
for(var i = 0; i<=8; i++){
  pass += item.charAt(Math.floor(Math.random() * item.length));

}

document.getElementById("pass").value=pass;





}