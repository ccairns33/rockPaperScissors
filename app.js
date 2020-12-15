      let compScore = 0;
      let humanScore = 0;
      const humanWins = document.querySelector(".player-score p");
      const compWins = document.querySelector(".comp-score p");
      const matchOutcome = document.querySelector(".match .outcome");
      const images = document.querySelectorAll("img");

      let count =0;
      
playMatch();
       

    


    function imageRestart(){
     images.forEach((image)=>{
        image.classList.remove("fadeOut");
        });
    }
    
      function playMatch(){
        let compOptions = ["rock", "paper", "scissors"];
        let humanChoice = "";
        let compChoice;
        let randNum = compRandRoll();
        const btns = document.querySelectorAll("button");
        compChoice = compOptions[randNum];

            btns.forEach(btn=> { //for each button add event listener for click
                btn.addEventListener("click", function(){ 
                    // after player clicks, computer selection is made
                    humanChoice = this.textContent.toLowerCase();
                    compareChoice(humanChoice, compChoice);
                    
                    });
            });

      }
      function compareChoice(humanChoice, compChoice){
       
       images.forEach((image)=>{
        // changing images on the screen

            if (image.id !== humanChoice && image.id !== compChoice){
                image.classList.add("fadeOut");
            }
            
        });
        console.log(humanChoice + " " +compChoice);
        //Rock Paper Scissor comparison
          if (humanChoice === "rock"){
                if (compChoice === "paper"){
                    matchOutcome.textContent = 'Computer wins this round!';
                    compScore++;
                    updateScore(humanScore, compScore);

                }
                else if (compChoice == "scissors"){
                    matchOutcome.textContent= "You win this round!";
                    humanScore++;

                    updateScore(humanScore, compScore);


                }
                else {
                    matchOutcome.textContent="It's a tie round.";
                    updateScore(humanScore, compScore);
                 
                }
          }
        else if (humanChoice === "paper"){
            if (compChoice === "scissors"){
                matchOutcome.textContent="Computer wins this round!";
                compScore++;

                updateScore(humanScore, compScore);
            }
            else if (compChoice == "rock"){
                matchOutcome.textContent="You win this round!";
                humanScore++;

                updateScore(humanScore, compScore);

            }
            else {
                matchOutcome.textContent="It's a tie round.";
                updateScore(humanScore, compScore);
            }
      }
      else if (humanChoice === "scissors"){
        if (compChoice === "rock"){
            matchOutcome.textContent="Computer wins this round!";
            compScore++;

            updateScore(humanScore, compScore);

        }
        else if (compChoice == "paper"){
            matchOutcome.textContent="You win this round!";

            humanScore++;

            updateScore(humanScore, compScore);


        }
        else {
            matchOutcome.textContent="It's a tie round.";
            updateScore(humanScore, compScore);
        }
  }

}
      function updateScore(humanScore, compScore){
        count++; //counts the round

        humanWins.textContent=humanScore.toString();
        compWins.textContent=compScore.toString();
        imageRestart();
        if (count == 5 ){
            finalScore();
        }
       
      }

      
      function finalScore(){
            if (humanScore > compScore){
                matchOutcome.textContent = `** You WIN! ** P:${humanScore} C: ${compScore}'` 
                resetScores()
            }
            else if (humanScore < compScore){
                matchOutcome.textContent = `** You LOSE!** P:${humanScore} C: ${compScore}`
                resetScores()

            }
            else {
                matchOutcome.textContent = "** IT'S A TIE!**"
                resetScores()

            }
      }
      function resetScores(){
        count = 0;
        humanScore = 0;
        humanWins.textContent=humanScore.toString();

        compScore = 0;
        compWins.textContent=compScore.toString();
    }
      function compRandRoll(){
          return Math.floor(Math.random() * Math.floor(3)); // 0 , 1 , 2 ;
      }
      

