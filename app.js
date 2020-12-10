      let compScore = 0;
      let humanScore = 0;
      const humanWins = document.querySelector(".player-score p");
      const compWins = document.querySelector(".comp-score p");
      const matchOutcome = document.querySelector(".match .outcome");
      const images = document.querySelectorAll("img");

      


playMatch();
       

    


    function imageRestart(){
     images.forEach((image)=>{
        image.classList.remove("fadeOut");
        });
    }
    
      function playMatch(){
        const options = document.querySelectorAll("button");
        let compOptions = ["rock", "paper", "scissors"];
        let randNum = compRandRoll();
        imageRestart();
            options.forEach((option)=> { //for each button add event listener for click
                option.addEventListener("click", function(){ 
                    // after player clicks, computer selection is made
                    let compChoice = compOptions[randNum];
                    let humanChoice = this.textContent.toLowerCase();

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
                    return;

                }
                else if (compChoice == "scissors"){
                    matchOutcome.textContent= "You win this round!";
                    humanScore++;

                    updateScore(humanScore, compScore);
                    return;


                }
                else {
                    matchOutcome.textContent="It's a tie round.";

                    return;
                }
          }
        else if (humanChoice === "paper"){
            if (compChoice === "scissors"){
                matchOutcome.textContent="Computer wins this round!";
                compScore++;

                updateScore(humanScore, compScore);
                return;
            }
            else if (compChoice == "rock"){
                matchOutcome.textContent="You win this round!";
                humanScore++;

                updateScore(humanScore, compScore);
                return;

            }
            else {
                matchOutcome.textContent="It's a tie round.";

                return;
            }
      }
      else if (humanChoice === "scissors"){
        if (compChoice === "rock"){
            matchOutcome.textContent="Computer wins this round!";
            compScore++;

            updateScore(humanScore, compScore);
            return;

        }
        else if (compChoice == "paper"){
            matchOutcome.textContent="You win this round!";
            humanScore++;

            updateScore(humanScore, compScore);
            return;


        }
        else {

            matchOutcome.textContent="It's a tie round.";
            return;
        }
  }

}
      function updateScore(humanScore, compScore){
        humanWins.textContent=humanScore.toString();
        compWins.textContent=compScore.toString();
        
        
        return;
      }
      function finalScore(){
            if (humanScore > compScore){
                matchOutcome.textContent = "** You WIN!**"
                humanScore = 0;
                humanWins.textContent=humanScore.toString();

                compScore = 0;
                compWins.textContent=compScore.toString();

            }
            else if (humanScore < compScore){
                matchOutcome.textContent = "** You LOSE!**"
                humanScore = 0;
                humanWins.textContent=humanScore.toString();

                compScore = 0;
                compWins.textContent=compScore.toString();


            }
            else {
                matchOutcome.textContent = "** IT'S A TIE!**"
                humanScore = 0;
                humanWins.textContent=humanScore.toString();

                compScore = 0;
                compWins.textContent=compScore.toString();

            }
      }

      function compRandRoll(){
          return Math.floor(Math.random() * Math.floor(3)); // 0 , 1 , 2 ;
      }
      

