

let rps = document.querySelectorAll('.default-option');
let gameResult = document.querySelector('.game-result');
let playerScoreContainer = document.querySelector('.score_text');

let playerScore = 0;
let houseScore = 0;

//create a function that get user choice
function getPlayerChoice() {
  let playerChoice = this.dataset.id;
  let houseChoice = getHouseChoice();
  displayRound(playerChoice, houseChoice);
  displayPlayerResult(playRound(playerChoice, houseChoice));

  displayAllGameOptions();
}

//create a function to get computer choice
function getHouseChoice() {
  const computerChoices = ['paper', 'scissors', 'rock'];
  const randomNumber = Math.floor(Math.random() * computerChoices.length);
  const computerChoice = computerChoices[randomNumber];
  return computerChoice;
}

const displayGameContainer = document.querySelector('.selection-container');

function displayAllGameOptions() {
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

  /* refactor code */
  setTimeout(function () {
    console.log(playerScore, houseScore);
    if (playerScore === 5 || houseScore === 5) {
      getGameWinner(playerScore, houseScore);
      return;
    } else {
      displayGameContainer.innerHTML = html;
      gameResult.textContent = '';
      let rps = document.querySelectorAll('.default-option');
      rps.forEach((rps) => {
        rps.addEventListener('click', getPlayerChoice);
      });
    }
  }, 6000);
}

function displayRound(userChoice, houseChoice) {
  let html = `
  <!-- round -->
  <div class="round">
    <!-- the player -->
    <div class="player-choice-container">
      <div class="player-choice game-option ${userChoice}">
      </div>
      <p>YOU PICKED</p>
    </div>
    <!-- the house -->
    <div class="house-choice-container">
      <div class="shadow">
      </div>
      <p>THE HOUSE PICKED</p>
    </div>
  </div>
  `;
  displayGameContainer.innerHTML = html;

  let shadow = document.querySelector('.shadow');
 showHouseChoice(shadow, houseChoice); //change house shadow to house choice
}

function showHouseChoice(shadow, houseChoice) {
  setTimeout(function () {
    shadow.setAttribute('class', `house-choice game-option ${houseChoice}`);
  }, 3000);
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

function displayPlayerResult(text) {
  setTimeout(function () {
    playerScoreContainer.textContent = playerScore;
    gameResult.textContent = text;
  }, 3000);
}

function getGameWinner(playerScore, houseScore) {
  if (playerScore > houseScore) {
    displayGameWinner('VICTORY!');
  } else {
    displayGameWinner('DEFEAT!');
  }
}

let gameResultContainer = document.querySelector('.game-result-container');
function displayGameWinner(resultText) {
  gameResult.innerHTML = `${resultText}<br><span>${playerScore} - ${houseScore}</span>`;
  let playAgainBtn = document.createElement('div');
  playAgainBtn.classList.add('play-again-btn');
  playAgainBtn.textContent = 'PLAY AGAIN';
  gameResultContainer.appendChild(playAgainBtn);
}

function restateGame() {
  location.reload();
}

/* events */

rps.forEach((rps) => {
  rps.addEventListener('click', getPlayerChoice);
});

gameResultContainer.addEventListener('click', (e) => {
  if (e.target.className == 'play-again-btn') {
    restateGame();
  }
});

/* rules */

const ruleBtn = document.querySelector('.rule-btn');
const rulePage = document.querySelector('.rule-modal-container');
const closeRulePageBtn = document.querySelectorAll('.close-icon');

function displayRulePage() {
  rulePage.classList.add('show');
}

function closeRulePage() {
  rulePage.classList.remove('show');
}

ruleBtn.addEventListener('click', displayRulePage);

closeRulePageBtn.forEach((closeRulePageBtn) => {
  closeRulePageBtn.addEventListener('click', closeRulePage);
});


