console.log("working fine");
let turn;
let ting = new Audio("./tic\ tac\ toe/ting.mp3");
let music = new Audio("./tic\ tac\ toe/music.mp3");



function changeTurn(){
    if(turn === "X"){
        turn = "O";
    }else{
        turn = "X";
    }
    return;
}
changeTurn();

// Game logic
let cells = document.querySelectorAll(".cell");
Array.from(cells).forEach(element => {
function play(){
      let  cellText = document.querySelector(".text");
        if(cellText.innerText === ""){
            cellText.innerText = turn;
            ting.play()
            changeTurn();
            console.log(turn);
           document.getElementById("player-turn").innerHTML = "Turn For " + "'" +turn + "'" ;
        };
        
    };
});