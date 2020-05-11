function add(n1: number, n2: number): number{
  return n1 + n2
}

function printResult1(num: number): void{
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2
  cb(result)
}

printResult1(add(5,4))
console.log(printResult1(add(5,4)))

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult !!ERROR!!

console.log(combineValues(10,10))

addAndHandle(10, 20, (result) => {
  console.log(result)
})