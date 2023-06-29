//create a function to get computer choice

function getComputerChoice(){
    const computerChoices=["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random()*computerChoices.length);
    const computerChoice=computerChoices[randomNumber];
    return computerChoice
}

getComputerChoice()

//create a function that get user choice
function getPlayerChoice(){
    let userChoice=prompt("Rock,Paper,Scissors");
    return changePlayerChoiceCase(userChoice)
};

getPlayerChoice()

//make user choice case sensitive
function changePlayerChoiceCase(userChoice){
    return `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1).toLowerCase()}`
};

//create a function that takes the computer and user chioce called playRound, playRound should look for a winner and return a string
 
function playRound(){

};

//create a function that plays 5 rounds and keep scores and report the loser or winner.

