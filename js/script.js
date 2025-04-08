// TIC TAC TOE GAME......

//  TTT JS CODE START  //
let boxPlate = document.querySelector(".main_game");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-game");
let winner = document.querySelector(".winner");

let turnO = true;


const winPatterns = [
    
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [2, 5, 8],
    [8, 7, 6],
    [0, 4, 8], //cross-line
    [2, 4, 6] //cross-line
    
    
    
];




const resetGame = ()=>{
  /*  turnO = true;
    winner.style = "display: none"
    newBtn.style = "display: none "
    boxPlate.style = "display: flex "

    */
   location.reload()
}




boxes.forEach((singleBox) => {
    singleBox.addEventListener("click", () => {
        console.log(`box was clicked`);

        singleBox.innerHTML = "a"
        if (turnO) { //player O
            singleBox.innerHTML = "O"
            turnO = false
            // boxes.disabled = true
        } else { //player X
            singleBox.innerHTML = "X"
            turnO = true

        }
        singleBox.disabled = true,



            checkWinner();

    });
});

const checkWinner = () => {
    for (singlePattern of winPatterns) {
        
          let pos1Val =  boxes[singlePattern[0]].innerHTML;
          let pos2Val =  boxes[singlePattern[1]].innerHTML;
          let pos3Val =  boxes[singlePattern[2]].innerHTML;
        
        
        if(pos1Val != "" && pos2Val != "" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winner.innerHTML = `winner is ${pos1Val}`;
               
                boxPlate.style = "display: none "
                newBtn.style = "display: block "
                winner.style = "display: block "
                
                
            }
        }
        
        
    }
}

newBtn.addEventListener("click", resetGame )
resetBtn.addEventListener("click", resetGame)


//  TTT JS CODE END  //