//create a function to get computer choice

function getComputerChoice(){
    const computerChoices=["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random()*computerChoices.length);
    const computerChoice=computerChoices[randomNumber];
    return computerChoice
}

//create a function that get user choice
function getPlayerChoice(){
    let userChoice=prompt("Rock,Paper,Scissors");
    return changePlayerChoiceCase(userChoice)
};

//make user choice case sensitive
function changePlayerChoiceCase(userChoice){
    return `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1).toLowerCase()}`
};

//create a function that takes the computer and user chioce called playRound, playRound should look for a winner and return a string
 
function playRound(playerChoice, computerChoice){

    if(playerChoice===computerChoice){
        playerScore++
        computerScore++
        return "Draw!!!";
    }
    
    else if(playerChoice=="Rock" && computerChoice=="Scissors"){
        playerScore++
        return "You Win! Rock beats Scissors";
    }

    else if(playerChoice=="Scissors" && computerChoice=="Rock"){
        computerScore++
        return "You Lose! Rock beats Scissors";
    }

    else if(playerChoice=="Paper" && computerChoice=="Rock"){
        playerScore++
        return "You Win! Paper beats Rock";
    }

    else if(playerChoice=="Rock" && computerChoice=="Paper"){
        computerScore++
        return "You Lose! Paper beats Rock";
    }

    else if(playerChoice=="Scissors" && computerChoice=="Paper"){
        playerScore++
        return "You Win! Scissors beats Paper";
    }

    else if(playerChoice=="Paper" && computerChoice=="Scissors"){
        computerScore++
        return "You Lose! Scissors beats Paper";
    }
    else{
        return "Invalid input,chose from rock paper scissors";
    }
};

//create a function that plays 5 rounds and keep scores and report the loser or winner at the end.

let playerScore=0;
let computerScore=0;

function game(){
  for(let i=1; i<=5; i++){
   playRound(getPlayerChoice(),getComputerChoice())
  }
  return getWinner(playerScore,computerScore);
};

//check for winner

function getWinner(playerScore,computerScore){
    if(playerScore > computerScore){
        return `you won`
    }
    else if(playerScore === computerScore){
         return `its a draw` 
    }
    else{
        return `you lose`
    }
};

console.log(game())
