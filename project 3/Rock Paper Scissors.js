function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return 'Invalid choice. Please choose rock, paper, or scissors.';
    }

    if (playerSelection === computerSelection.toLowerCase()) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie!');
    }
}

playGame();
