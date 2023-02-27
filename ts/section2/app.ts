let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput !! ERROR

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("error occured", 500);
