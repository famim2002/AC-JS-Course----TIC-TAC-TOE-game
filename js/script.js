// TIC TAC TOE GAME......

//  TTT JS CODE START  //

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;


const winPatterns = [

    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9], //cross-line
    [3, 5, 7] //cross-line

];

boxes.forEach((singleBox) => {
    singleBox.addEventListener("click", () => {
        console.log(`box was clicked`);

        singleBox.innerHTML = "a"
        if(turnO){ //player O
            singleBox.innerHTML = "O"
            turnO = false
            // boxes.disabled = true
        }else{  //player X
            singleBox.innerHTML = "X"
            turnO = true
          
        }
        singleBox.disabled = true,
      
        singleBox.style ="background-color: rgb(230, 220, 220) !important; box-shadow: none !important"

         checkWinner ();

    });
});

const checkWinner = () =>{
    for(singlePattern of winPatterns){
         console.log(singlePattern);
         
    }
}


//  TTT JS CODE END  //