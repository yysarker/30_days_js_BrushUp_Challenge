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
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === PAPER) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

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


    let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;

    winner === RESULT_DRAW ? (message = message + 'had a draw.') : winner === RESULT_PLAYER_WINS ? (message = message + 'win.') : (message = message + 'lost.');

    alert(message);
});


//Not related to game
const combine = (resultHandler, operator, ...number) =>{
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const numberElement of number) {
        if (operator === 'ADD'){
            sum += validateNumber(numberElement);
        }else {
            sum -= validateNumber(numberElement);
        }
    }
    resultHandler(sum);//callback function inside a function used as a pointer
};

const showResult = (messageText, result) => {
    alert( messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is: '),'ADD',4,-5,6,'test',8,9,10);
combine(showResult.bind(this, 'The result after adding all numbers is:'),'ADD',30,14,35,56,-71,18,-9,10);
combine(showResult.bind(this, 'The result after subtract all numbers is:'),'SUBTRACT ',1,2,3,4,5,6,7,8,9);