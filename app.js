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
        console.log("Draw!!!")
    }
    
    else if(playerChoice=="Rock" && computerChoice=="Scissors"){
        console.log("You Win! Rock beats Scissors")
    }

    else if(playerChoice=="Scissors" && computerChoice=="Rock"){
        console.log("You Lose! Rock beats Scissors")
    }

    else if(playerChoice=="Paper" && computerChoice=="Rock"){
        console.log("You Win! Paper beats Rock")
    }

    else if(playerChoice=="Rock" && computerChoice=="Paper"){
        console.log("You Lose! Paper beats Rock")
    }

    else if(playerChoice=="Scissors" && computerChoice=="Paper"){
        console.log("You Win! Scissors beats Paper")
    }

    else if(playerChoice=="Paper" && computerChoice=="Scissors"){
        console.log("You Lose! Scissors beats Paper")
    }
    else{
        console.log("Invalid input,chose from rock paper scissors")
    }
};

playRound(getPlayerChoice(),getComputerChoice());

//create a function that plays 5 rounds and keep scores and report the loser or winner.

