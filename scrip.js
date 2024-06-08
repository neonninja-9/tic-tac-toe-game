//elements access area

let btns = document.querySelectorAll(".btn")// all buttons accessed
let currentPlayer = true// set a player's turn
let Newgame = document.querySelector(".NewGame");
let winbox = document.querySelector(".winbox");
let msg = document.querySelector("#winmsg");
let reset = document.querySelector(".reset");


//function area

const resetGame = () => {
  currentPlayer = true;
  for(btn of btns){btn.innerText = ""};
  btns.innerText = "";
  winbox.classList.add("hide");
}

const NewGame = () => {
  currentPlayer = true;
  for(btn of btns){btn.innerText = ""};
  winbox.classList.add("hide");
  enableButtons();

}//new game function

const enableButtons = ()=> {
  for(let btn of btns){
    btn.disabled = false}
};//enableButton function

const  disablebtns = () =>{
  for(let btn of btns){
  btn.disabled = true;
}
}

const color = ()=>{
  if (currentPlayer){
    btns.innerText.color = "red"
  }
}

const showWinner = (winner) => {
  msg.innerText = 'congratulations, winner is   ' + winner;
  winbox.classList.remove("hide");
  disablebtns()
}

const checkWinner = () =>{
  for (patterns of winPatterns){
    
      let posi1 = btns[patterns[0]].innerText;
      let posi2 = btns[patterns[1]].innerText;
      let posi3 = btns[patterns[2]].innerText;

      if (posi1 != "" , posi2 != "" , posi3 != ""){
        if ( posi1 === posi2 && posi2 === posi3){
          console.log('player' , posi1 , "is winner");
          showWinner(posi1);

        }
      }

  }

}//creat a function for checking winner



//add eventlistners


Newgame.addEventListener("click" , NewGame);

reset.addEventListener("click" , resetGame);

btns.forEach((btn) => {
  btn.addEventListener("click", function() {
    if (currentPlayer) {
      btn.innerText = "x";
    } else {
      btn.innerText = "o";
    }//eventListner added to all buttons using for-each loop
    currentPlayer = !currentPlayer;//another player's turn set 
    btn.disabled = true;//button disableed
    checkWinner()//check if a player is winner or not 
  })
});


//data storage

const winPatterns = [
  [0 , 1 , 2],
  [0 , 3 , 6],
  [0 , 4 , 8],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [3 , 4 , 5],
  [6 , 7 , 8],
  [2 , 4 , 6],

];//winning patterns saved 




