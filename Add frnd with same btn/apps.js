let istatus = document.querySelector("h3");
let addFriend = document.getElementById("btn");

let chek = 0
addFriend.addEventListener("click",function(){
if(chek == 0){

    istatus.innerHTML = "Anishans_1";
    istatus.style.color = "black";
    addFriend.style.backgroundColor = "cadetblue"
    
    chek = 1;
}else{

    istatus.innerHTML = "remove Friend ";
    istatus.style.color = "black";
    addFriend.style.backgroundColor = "#ddd"
chek = 0;
}
}) 
