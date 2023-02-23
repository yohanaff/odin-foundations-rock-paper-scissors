function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'Tie';
    } else if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
      playerScore++;
      return 'You Win!';
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }

  function capitalizeFirstLetter(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  }

  function game() {
    for (let i = 0; i < 5; i++) {

      let playerSelection = '';

      while (true) {
        playerSelection = prompt('Rock, Paper or Scissors?');
        playerSelection = capitalizeFirstLetter(playerSelection);

        if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
          break;
        } else {
          alert('Invalid input! Please choose again.');
        }
      }

      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);

      console.log(`Player: ${playerScore}`);
      console.log(`Computer: ${computerScore}`);
      console.log(roundResult);
    }
  }

  game();

  const gameResult = '';
  if (playerScore > computerScore) {
    gameResult = 'You won the game!';
  } else if (playerScore < computerScore) {
    gameResult = 'You lost the game.';
  } else {
    gameResult = 'It was a tie.';
  }
  console.log(winner);