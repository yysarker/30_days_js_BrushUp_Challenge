/*
* Data Type:
* String  ex: "This is string text because those text Rep with double/single or `Backtick`  quote"
* Number ex: 0 1 2 3 4 5
*
* */

const defaultResult = 0;
let currentResult;

currentResult = (defaultResult  + 10) * 3 / 2 -1;

let calculationDescription = `(${defaultResult} + 10) * 3/2 -1`

outputResult(currentResult, calculationDescription)
