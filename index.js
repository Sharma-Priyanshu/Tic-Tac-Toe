console.log("working fine");
let turn;
let ting = new Audio("./tic\ tac\ toe/ting.mp3");
let music = new Audio("./tic\ tac\ toe/music.mp3");
let gameover = false;


function changeTurn(){
    if(turn === "X"){
        turn = "O";
    }else{
        turn = "X";
    }
    return;
}

changeTurn();

function checkWin(){
    let cellText = document.getElementsByClassName("text");
    
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    wins.forEach(e => {
        if((cellText[e[0]].innerHTML === cellText[e[1]].innerHTML) && (cellText[e[1]].innerHTML === cellText[e[2]].innerHTML) && (cellText[e[0]].innerHTML !== "")){
            document.querySelector("#player-won").innerHTML = "'" + cellText[e[0]].innerHTML + "'" + " Won";
            let board = document.querySelector(".board")
            let gameoverPage = document.querySelector(".gameoverPage")
            let playerTurn = document.querySelector("#player-turn")
            board.style.visibility = "hidden"
            gameoverPage.style.visibility = "visible";
            playerTurn.style.visibility = "hidden";
            reset.style.visibility = "hidden"

            gameover = true;
        } 
    });
};

// Game logic
let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element =>{
    let cellText = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(cellText.innerHTML === ''){
            cellText.innerHTML = turn;
            changeTurn();
            checkWin()
            ting.play();
            if(!gameover){
                document.querySelector("#player-turn").innerHTML  = "Turn for " +"'" +turn+ "'";
            }
        }
    })
});


reset.addEventListener('click', ()=>{
    let cellText = document.querySelectorAll('.text');
   
    Array.from(cellText).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X"; 
    gameover = false;
    
    
    document.querySelector("#player-turn").innerHTML  = "Turn for " + turn;
    
})


replay.addEventListener('click', ()=>{
    let cellText = document.querySelectorAll('.text');
   
    Array.from(cellText).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X"; 
    let board = document.querySelector(".board")
            let gameoverPage = document.querySelector(".gameoverPage")
            let playerTurn = document.querySelector("#player-turn")
            board.style.visibility = "visible"
            gameoverPage.style.visibility = "hidden";
            playerTurn.style.visibility = "visible";
            reset.style.visibility = "visible"

    gameover = true;
    document.querySelector("#player-turn").innerHTML  = "Turn for " + turn;
    
})
