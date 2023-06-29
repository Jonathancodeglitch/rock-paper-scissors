//create a function to get computer choice

function getComputerChoice(){
    const computerChoices=["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random()*computerChoices.length);
    const computerChoice=computerChoices[randomNumber];
    return computerChoice
}

console.log(getComputerChoice());

//create a function that get user choice

//make user choice case sensitive

//create a function that takes the computer and user chioce called playRound

//playRound should look for a winner and return a string

//create a function that plays 5 rounds and keep scores and report the loser or winner.

