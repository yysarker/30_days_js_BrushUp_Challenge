const defaultNumber = 0;
let currentResult = defaultNumber;
let logEntries=[];

// Gets input from Input field
function getUserInputNumber() {
    return +userInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `(${resultBeforeCalc} ${operator} ${calcNumber})`;
    outputResult(currentResult, calcDescription);//came from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newNumber) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newNumber
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

// This function work for Addition
function add() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentResult;
    currentResult += enterNumber; // Full form of this code is currentResult = currentResult + enterNumber
    createAndWriteOutput('+', initialNumber, enterNumber );
    writeToLog('Add',initialNumber,enterNumber,currentResult);
}

// This function work for Subtraction
function subtract() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentResult;
    currentResult -= enterNumber;
    createAndWriteOutput('-', initialNumber, enterNumber )
    writeToLog('Subtract',initialNumber,enterNumber,currentResult);
}

// This function work for Multiply
function multiply() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentResult;
    currentResult *= enterNumber;
    createAndWriteOutput('*', initialNumber, enterNumber )
    writeToLog('Multiply',initialNumber,enterNumber,currentResult);
}

// This function work for Division
function divide() {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentResult;
    currentResult /=  enterNumber;
    createAndWriteOutput('/', initialNumber, enterNumber )
    writeToLog('Divide',initialNumber,enterNumber,currentResult);
}

// Here we call function for Addition , subtraction, multiplication , division for output
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

