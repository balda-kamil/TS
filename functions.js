"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult1(add(5, 4));
console.log(printResult1(add(5, 4)));
var combineValues;
combineValues = add;
// combineValues = printResult !!ERROR!!
console.log(combineValues(10, 10));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
