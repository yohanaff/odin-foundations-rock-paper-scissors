class RockPaperScissors {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.result = document.getElementById('result');
    // this.score = document.getElementById('score');
    this.playerScoreDisplay = document.getElementById('playerScore');
    this.computerScoreDisplay = document.getElementById('computerScore');
    this.choiceButtons = document.getElementById('choice-buttons');
    this.playAgainButton = document.getElementById('play-again');

    this.attachChoiceListeners();
    this.attachPlayAgainListener();
  }

  getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  attachChoiceListeners() {
    const buttons = this.choiceButtons.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.playRound(button.value, this.getComputerChoice());
      });
    });
  }

  attachPlayAgainListener() {
    this.playAgainButton.addEventListener('click', () => {
      this.resetGame();
    });
  }

  playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      this.result.textContent = 'Tie';
    } else if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
      this.playerScore++;
      this.result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      this.computerScore++;
      this.result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    this.updateScore();
    this.checkWinner();
  }

  updateScore() {
    this.playerScoreDisplay.textContent = `Player: ${this.playerScore}`;
    this.computerScoreDisplay.textContent = `Computer: ${this.computerScore}`;
  }

  checkWinner() {
    if (this.playerScore === 5 || this.computerScore === 5) {
      const winner = this.playerScore > this.computerScore ? 'You won the game!' : 'You lost the game.';
      this.result.textContent = winner;
      this.toggleButtons(false);
    }
  }

  toggleButtons(showChoices) {
    this.choiceButtons.style.display = showChoices ? 'block' : 'none';
    this.playAgainButton.style.display = showChoices ? 'none' : 'block';
  }

  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.updateScore();
    this.result.textContent = '';
    this.toggleButtons(true);
  }
}

new RockPaperScissors();