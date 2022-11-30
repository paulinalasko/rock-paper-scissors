const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //Starts the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', function () {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }; 
    //Plays round
    const playRound = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        
        //Generates random output from computer
        const choices = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
               
                //Call round comparison function
                compareRound(this.textContent, computerChoice);
                
                //Update Images
                playerHand.src = `./images/${this.textContent}.png`
                computerHand.src = `./images/${computerChoice}.png`
            });
        });
    };

    const updateScore = () => {
        const pScore = document.querySelector('.player-score p');
        const cScore = document.querySelector('.computer-score p');
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

    const compareRound = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice == computerChoice) {
            winner.textContent = `The result is a tie! You both chose ${playerChoice}.`
            return;
        }
        //Checks for rock
        if (playerChoice == 'rock') {
            if (computerChoice == 'scissors') {
                playerScore += 1;
                winner.textContent = 'Ding ding ding!! You win. You are so awesome.';
                updateScore();
                return;
            } else {
                computerScore += 1;
                winner.textContent = 'You lost, better luck next time kid';
                updateScore();
                return;
            }
        }     
        //Checks for paper
        if (playerChoice == 'paper') {
            if (computerChoice == 'rock') {
                playerScore += 1;
                winner.textContent = 'Ding ding ding!! You win. You are so awesome.';
                updateScore();
                return;
            } else {
                computerScore += 1;
                winner.textContent = 'You lost, better luck next time kid';
                updateScore();
                return;
            }
        }   
        //Checks for scissors
        if (playerChoice == 'scissors') {
            if (computerChoice == 'paper') {
                playerScore += 1;
                winner.textContent = 'Ding ding ding!! You win. You are so awesome.';
                updateScore();
                return;
            } else {
                computerScore += 1;
                winner.textContent = 'You lost, better luck next time kid';
                updateScore();
                return;
            }
        }  
    }
    startGame();
    playRound();
};


game();