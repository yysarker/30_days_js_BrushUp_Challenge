const defaultNumber = 0;
let currentResult = defaultNumber;
let logEntries=[];

// Gets input from Input field
function getUserInputNumber() {
    return parseInt(userInput.value);
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

function calculationOperatorCheck(calculationType) {
    const enterNumber = getUserInputNumber();
    const initialNumber = currentResult;
    let mathOperator;

    if (calculationType === "ADD"){
        currentResult += enterNumber;
        mathOperator = '+';
    }else if(calculationType === "SUBTRACT") {
        currentResult -= enterNumber;
        mathOperator = '-';
    }else if(calculationType === "MULTIPLY"){
        currentResult *= enterNumber;
        mathOperator = '*';
    }else {
        currentResult /= enterNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialNumber, enterNumber );
    writeToLog(calculationType,initialNumber,enterNumber,currentResult);
}

function add() {
    calculationOperatorCheck("ADD")
}
function subtract() {
    calculationOperatorCheck("SUBTRACT")
}
function multiply() {
    calculationOperatorCheck("MULTIPLY")
}
function divide() {
    calculationOperatorCheck("DIVIDE")
}

// Here we call function for Addition , subtraction, multiplication , division for output
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
