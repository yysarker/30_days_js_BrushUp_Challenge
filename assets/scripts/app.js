const defaultNumber = 0;
let currentNumber = defaultNumber;

// Gets input from Input field
function getUserInputNumber() {
    return +userInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `(${resultBeforeCalc} ${operator} ${calcNumber})`;
    outputResult(currentNumber, calcDescription);//came from vendor file
}

// This function work for Addition
function add() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentNumber;
    currentNumber += enterNumber; // Full form of this code is currentResult = currentResult + enterNumber
    createAndWriteOutput('+', initialNumber, enterNumber )
}

// This function work for Subtraction
function subtract() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentNumber;
    currentNumber -= enterNumber;
    createAndWriteOutput('-', initialNumber, enterNumber )
}

// This function work for Multiply
function multiply() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentNumber;
    currentNumber *= enterNumber;
    createAndWriteOutput('*', initialNumber, enterNumber )
}

// This function work for Division
function divide() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentNumber;
    currentNumber /=  enterNumber;
    createAndWriteOutput('/', initialNumber, enterNumber )
}

// Here we call function for Addition , subtraction, multiplication , division for output
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

