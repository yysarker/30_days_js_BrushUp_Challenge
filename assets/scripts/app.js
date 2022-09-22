const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER'
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER'
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER'
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER'
            break;
        case LOG_EVENT_GAME_OVER:
            break;
        default:
            logEntry = {};
    }
    // if(ev === LOG_EVENT_PLAYER_ATTACK){
    //     logEntry.target = 'MONSTER'
    // }else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
    //     logEntry.target = 'MONSTER'
    // }else if (ev === LOG_EVENT_MONSTER_ATTACK){
    //     logEntry.target = 'PLAYER'
    // }else if (ev === LOG_EVENT_PLAYER_HEAL){
    //    logEntry.target = 'PLAYER'
    // }else if (ev === LOG_EVENT_GAME_OVER){
    // }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth,currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth,currentPlayerHealth);
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth,currentPlayerHealth);
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw!');
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth,currentPlayerHealth);
    }

    if (currentMonsterHealth <= 0  || currentPlayerHealth <= 0){
        reset();
    }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage ,currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK)
}

function healAttackHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert('You can\'t heal to more than your max initial health.');
        healValue = chosenMaxLife - currentPlayerHealth;
    }else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue ,currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healAttackHandler);
logBtn.addEventListener('click', printLogHandler);


for (let i = 1; i <= 10; i++) {
    console.log(i + ' Your Name');
}

const newArrayName = ['Apple','Banana','Pineapple','Watermelon','Habil','Kabil','Navil'];
let j = 0;
console.log("---For of loop----");
for (const health of newArrayName) {
    console.log(health);
    j++;
}// used for Array element print

let k = 0;
const forInForObject = {
    name: 'User Name',
    age: 27,
    job: 'empty',
    hobby: 'cricket'
}
console.log("---For in loop----");
for (const forInForObjectKey in forInForObject) {
    console.log(forInForObjectKey);
    k++;
}// used for Object key/property print
