/*
* Function
* Function is "code on demand"
 */

//Define Function

const defaultResult = 0;
let currentResult;

function add (num1, num2){
    const result = num1 + num2;
    return result;
}
currentResult = add(2,3)

// currentResult = (defaultResult + 10) * 3/2 - 1;
let calcutaionDescription = `(${defaultResult} + 10) * 3/2 -1`;
outputResult(currentResult, calcutaionDescription)


