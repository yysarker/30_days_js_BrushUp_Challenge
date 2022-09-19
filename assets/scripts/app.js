const defaultNumber = 0;
let currentResult = defaultNumber;

function getUserNumberInput() {
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calculationDescription);
}
function add() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enterNumber;
    createAndWriteOutput('+', initialResult, enterNumber);

}
function subtract() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enterNumber;
    createAndWriteOutput('-', initialResult, enterNumber);
}
function multiply() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enterNumber;
    createAndWriteOutput('*', initialResult, enterNumber);

}
function divide() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enterNumber;
    createAndWriteOutput('/', initialResult, enterNumber);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



