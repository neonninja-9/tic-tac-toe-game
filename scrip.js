(function() {
  //elements access area

  let btns = document.querySelectorAll(".btn")// all buttons accessed
  const PLAYER_X_SYMBOL = "x";
  const PLAYER_O_SYMBOL = "o";
  let isPlayerXTurn = true// set a player's turn
  let turnCount = 0;
  let Newgame = document.querySelector(".NewGame");
  let winbox = document.querySelector(".winbox");
  let msg = document.querySelector("#winmsg");
  let reset = document.querySelector(".reset");


  //function area

  const initializeGame = () => {
    turnCount = 0;
    isPlayerXTurn = true;
    winbox.classList.add("hide");
    for (let btn of btns) {
      btn.disabled = false;
      btn.innerText = "";
    }
  };

  const  disablebtns = () =>{
    for(let btn of btns){
    btn.disabled = true;
  }
  }

  const showWinner = (winner) => {
    msg.innerText = 'congratulations, winner is   ' + winner;
    winbox.classList.remove("hide");
    disablebtns()
  }

  const showDraw = () => {
    msg.innerText = "It's a Draw!";
    winbox.classList.remove("hide");
    disablebtns();
  };

  const checkWinner = () =>{
    for (patterns of winPatterns){
      
        let posi1 = btns[patterns[0]].innerText;
        let posi2 = btns[patterns[1]].innerText;
        let posi3 = btns[patterns[2]].innerText;

        if (posi1 != "" && posi2 != "" && posi3 != ""){
          if ( posi1 === posi2 && posi2 === posi3){
            console.log('player' , posi1 , "is winner");
            showWinner(posi1);
            return;
          }
        }
    }

    if (turnCount === 9) {
      showDraw();
    }
  }//creat a function for checking winner



  //add eventlistners


  Newgame.addEventListener("click" , initializeGame);

  reset.addEventListener("click" , initializeGame);

  btns.forEach((btn) => {
    btn.addEventListener("click", function() {
      if (isPlayerXTurn) {
        btn.innerText = PLAYER_X_SYMBOL;
      } else {
        btn.innerText = PLAYER_O_SYMBOL;
      }//eventListner added to all buttons using for-each loop
      isPlayerXTurn = !isPlayerXTurn;//another player's turn set
      btn.disabled = true;//button disableed
    turnCount++;
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
})();
