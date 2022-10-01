const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'RESULT DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
const DEFAULT_USER_CHOICE = 'ROCK';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
        if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
            alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
            return;
        }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSORS;

    // if (randomValue < 0.34){
    //     return ROCK;
    // }else if (randomValue < 0.67){
    //     return PAPER;
    // }else {
    //     return SCISSORS;
    // }
};
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === PAPER) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

    // if (cChoice === pChoice){
    //     return RESULT_DRAW;
    // }else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === PAPER){
    //     return RESULT_PLAYER_WINS;
    // }else {
    //     return RESULT_COMPUTER_WINS;
    // }


startGameBtn.addEventListener("click", () => {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    playerChoice ? (winner = getWinner(computerChoice, playerChoice)) : (winner = getWinner(computerChoice));

    // if (playerChoice){
    //     winner = getWinner(computerChoice, playerChoice);
    // }else {
    //     winner = getWinner(computerChoice);
    // }


    let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;

    winner === RESULT_DRAW ? (message = message + 'had a draw.') : winner === RESULT_PLAYER_WINS ? (message = message + 'win.') : (message = message + 'lost.');

    // if (winner === RESULT_DRAW){
    //     message = message + 'had a draw.';
    // }else if (winner === RESULT_PLAYER_WINS){
    //     message = message + 'win.';
    // }else {
    //     message = message + 'lost.';
    // }
    alert(message);
});


//Not related to game

const sumUp = (a, b, ...number) =>{
    let sum = 0;
    for (const numberElement of number) {
        sum += numberElement;
    }
    return sum;
};

/*
* Alternative of rest operator.
* Argument gives object type array,
* It's look like strange
* And I don't use this.
 */
const subtractUp = function () {
    let sum = 0;
    for (const numberElement of arguments) {
        sum += numberElement;
    }
    return sum;
};

console.log(sumUp(1,3,4,-5,6,7,-8,9,10));
console.log(sumUp(-1,30,14,35,56,-71,18,9,10));
console.log(subtractUp(-1,2,3,4,5,6,7,8,9));