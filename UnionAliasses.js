"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //   return +result
    // }
    // return result.toString();
}
var combinedAges = combine(30, 26, "as-text");
console.log(combinedAges);
var combinedNames = combine("Kamil ", "Magda ", "as-text");
console.log(combinedNames);
var combinedStringAges = combine("30 ", "26 ", "as-number");
console.log(combinedStringAges);
