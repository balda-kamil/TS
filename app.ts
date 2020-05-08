let userInput: unknown
let userName: string

userInput = 5;
userInput = "Kamil"

if(typeof userInput === 'string'){
  userName = userInput
}

function generateError( message: string, code: number): never {
  throw { message: message, errorCode: code };
}

let result = generateError('An error occured!', 500)

console.log(result)