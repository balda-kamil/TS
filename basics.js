"use strict";
function add1(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + " " + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var resultPhrase = "Result is: ";
add1(number1, number2, printResult, resultPhrase);
