let playerScore = 0;
let houseScore = 0;

function getRockPaperSCissor() {
  let rps = document.querySelectorAll('.default-option');

  rps.forEach((rps) => {
    rps.addEventListener('click', getPlayerChoice);
  });
}

getRockPaperSCissor();

//create a function that get user choice
function getPlayerChoice() {
  let playerChoice = this.dataset.id;
  let houseChoice = getHouseChoice();
  displayRound(playerChoice, houseChoice);
}

//create a function to get computer choice
function getHouseChoice() {
  const computerChoices = ['paper', 'scissors', 'rock'];
  const randomNumber = Math.floor(Math.random() * computerChoices.length);
  const computerChoice = computerChoices[randomNumber];
  return computerChoice;
}

/*  */
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Draw!!!';
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    playerScore++;
    return `YOU WIN!`;
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    houseScore++;
    return 'YOU LOSE!';
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    playerScore++;
    return 'YOU WIN!';
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
    houseScore++;
    return 'YOU LOSE!';
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    playerScore++;
    return 'YOU WIN!';
  } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    houseScore++;
    return 'YOU LOSE!';
  }
}

function displayRound(playerChoice, houseChoice) {
  let html = `
  <!-- round -->
  <div class="round">
    <!-- the player -->
    <div class="player-choice-container">
      <div class="player-choice game-option ${playerChoice}">
      </div>
      <p>YOU PICKED</p>
    </div>
    <!-- winner container begins -->
     <div class="game-result-container">
      <p class="game-result"></p>
    </div>
    <!-- winner container ends -->
    <!-- the house -->
    <div class="house-choice-container">
      <div class="shadow">
      </div>
      <p>THE HOUSE PICKED</p>
    </div>
  </div>
  `;
  displayGameContainer.innerHTML = html;

  showHouseChoice(houseChoice); //change house shadow to house choice
  displayPlayerResult(playRound(playerChoice, houseChoice));
  displayAllGameOptions(getGameWinner);
}

//add house choice after animation
function showHouseChoice(houseChoice) {
  let shadow = document.querySelector('.shadow');
  setTimeout(function () {
    shadow.setAttribute('class', `house-choice game-option ${houseChoice}`);
  }, 3000);
}

//display weather player won or lose
function displayPlayerResult(text) {
  let gameResult = document.querySelector('.game-result');
  let playerScoreContainer = document.querySelector('.score_text');
  setTimeout(function () {
    playerScoreContainer.textContent = playerScore;
    gameResult.textContent = text;
  }, 3000);
}

//show the overrall winner of the game
function displayGameWinner(resultText) {
  let gameResultContainer = document.querySelector('.game-result-container');
  let gameResult = document.querySelector('.game-result');
  gameResult.innerHTML = `${resultText}<br><span>${playerScore} - ${houseScore}</span>`;
  let playAgainBtn = document.createElement('div');
  playAgainBtn.classList.add('play-again-btn');
  playAgainBtn.textContent = 'PLAY AGAIN';
  gameResultContainer.appendChild(playAgainBtn);
}

//check for the overrall winner of the game
function getGameWinner(playerScore, houseScore) {
  if (playerScore > houseScore) {
    displayGameWinner('VICTORY!');
  } else {
    displayGameWinner('DEFEAT!');
  }
}

/* display all game options */
const displayGameContainer = document.querySelector('.selection-container');
function displayAllGameOptions(getGameWinner) {
  let html = `
  <div class="default-game-option">
        <div class="paper game-option default-option" data-id="paper">
        </div>
        <div class="scissors game-option default-option" data-id="scissors">
        </div>
        <div class="rock game-option default-option" data-id="rock">
        </div> 
      </div>
  `;

  checkForFiveWins(html, getGameWinner);
}

function checkForFiveWins(html, getGameWinner) {
  setTimeout(function () {
    console.log(playerScore, houseScore);
    if (playerScore === 5 || houseScore === 5) {
      getGameWinner(playerScore, houseScore);
      return;
    } else {
      displayGameContainer.innerHTML = html;
      getRockPaperSCissor();
    }
  }, 5000);
}

function restateGame() {
  location.reload();
}

/* rules */

const ruleBtn = document.querySelector('.rule-btn');
const rulePage = document.querySelector('.rule-modal-container');
const closeRulePageBtn = document.querySelector('.close-icon');

function displayRulePage() {
  rulePage.classList.add('show');
}

function closeRulePage() {
  rulePage.classList.remove('show');
}

rulePage.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.rule-modal');
  if (isOutside) {
    closeRulePage();
  }
});

/* events */
displayGameContainer.addEventListener('click', (e) => {
  if (e.target.className == 'play-again-btn') restateGame();
});
ruleBtn.addEventListener('click', displayRulePage);
closeRulePageBtn.addEventListener('click', closeRulePage);
