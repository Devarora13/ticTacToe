let boxes = document.querySelectorAll(".box");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let playAgain = document.querySelector(".play-again");
let playerX = true;
let winPatt = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let drawCnt = 0;

let playerTurn = (playerX) => {
    if(playerX){
        player1.style.borderColor = "#A02334";
        player2.style.borderColor = "transparent";
    } else {
        player2.style.borderColor = "#A02334";
        player1.style.borderColor = "transparent";
    }
}
playerTurn(playerX);
for(let box of boxes){
    box.addEventListener("click",()=>{
        // playerTurn(playerX);
        if(playerX){
            box.textContent = "X";
            playerX = false;
            box.disabled = true;
            ifWin(player1);
        } else {
            box.textContent = "O";
            playerX = true;
            box.disabled = true;
            ifWin(player2);
        }
        playerTurn(playerX);
        drawCnt++;
        ifDraw();
    })
}
let ifWin = (winner) => {
    for(let patt of winPatt){
        let box1 = boxes[patt[0]].textContent; 
        let box2 = boxes[patt[1]].textContent; 
        let box3 = boxes[patt[2]].textContent; 
        if(box1===box2 && box2===box3 && box1!=""){
            if(winner===player1){
                player1.textContent = "Player 1 Wins";
                playerX = true;
            } else {
                player2.textContent = "Player 2 Wins";
                playerX = false;  
            }
            boxes.forEach((box)=>{
                box.disabled = true;
            });
        }
    }
}

playAgain.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.textContent = "";
        box.disabled = false;
    });
    player1.textContent = "Player 1";
    player2.textContent = "Player 2"; 
    player1.style.borderColor = "#A02334";
    player2.style.borderColor = "transparent";
    playerX = true;
    drawCnt = 0;
})
let ifDraw = ()=>{
    if(drawCnt===9){
        player1.textContent = "Draw !";
        player2.textContent = "Draw !";
        player1.style.borderColor = "#A02334";
        player2.style.borderColor = "#A02334";
    }
}
