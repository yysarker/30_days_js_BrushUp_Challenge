const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';


let gameIsRunning = false;

const getPlayerChoice = () => { //Converted into Arrorw function
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS ){
        alert(`Invalid choice! We Choose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () =>  {
    const randomValue = Math.random();
    if (randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
};

//Ternary Operator
const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice ? RESULT_DRAW : cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK ? RESULT_PLAYER_WIN : RESULT_COMPUTER_WIN;

// const getWinner = (cChoice, pChoice) => {
//     if(cChoice === pChoice){
//         return RESULT_DRAW;
//     }else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK){
//         return RESULT_PLAYER_WIN;
//     }else {
//         return RESULT_COMPUTER_WIN;
//     }
// };

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice);
    let message;
    if (winner === RESULT_COMPUTER_WIN){
        message = `You Picked ${playerChoice}, computer Picked ${computerChoice}, Therefor Computer Win.`;
    }else if (winner === RESULT_PLAYER_WIN){
        message = `You Picked ${playerChoice}, computer Picked ${computerChoice}, Therefor Player Win.`;
    }else{
        message = `You Picked ${playerChoice}, computer Picked ${computerChoice}, Therefor you had a draw.`;
    }
    console.log(message)
});