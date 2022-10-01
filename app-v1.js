const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'RESULT DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
const DEFAULT_USER_CHOICE = 'ROCK';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
        if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
            alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
            return DEFAULT_USER_CHOICE;
        }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67){
        return PAPER;
    }else {
        return SCISSORS;
    }
};
const getWinner = function (pChoice, cChoice){
    if (cChoice === pChoice){
        return RESULT_DRAW;
    }else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === PAPER){
        return RESULT_PLAYER_WINS;
    }else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener("click", function () {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
});