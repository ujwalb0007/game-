let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");



let turnO= true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

const resetgame = () => {
turnO=true;
enableboxes();
msgcontainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{

console.log("box was clicked");
if(turnO) {
box.innerText = "O";
turnO = false;
}
else{
box.innerText = "X";
turnO = true; }
box.disabled = true;

checkWinner ();

    })   
});

const enableboxes = () => {
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    
    }
    }





const disablebtn = () => {
for(let box of boxes){
box.disabled=true;

}
}

const showWinner = (winner) => {
msg.innerText=`Congratulation, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disablebtn();


}




const checkWinner= () => {
for(let pattern of winpatterns){
let pos0Val = boxes[pattern[0]].innerText;
let pos1Val = boxes[pattern[1]].innerText;
let pos2Val = boxes[pattern[2]].innerText;


if(pos0Val != "" && pos1Val != "" && pos2Val != ""){
if(pos0Val === pos1Val && pos1Val === pos2Val){
console.log("winner",pos1Val);
showWinner(pos1Val);




}
}
}
}

resetbutton.addEventListener("click",resetgame)


