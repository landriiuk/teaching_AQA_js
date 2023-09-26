//_ASSIGN VARIABLES:
let user;
user = 10;
console.log(user);

let clickOnCancelButton = "cancel";
clickOnCancelButton = 10;
console.log(typeof clickOnCancelButton);

const USER_NAME = "Liubov";
const userName = "Liubov";
// userName = "test" // error. we can not reassign const.

const user2 = "userName";
console.log(user2);

//_______var vs let/const
console.log(person); // undefined
var person = "test";

// console.log(person1); // ReferenceError: Cannot access 'person1' before initialization
// let person1 = "test2"; 

if (true) {
    var bool = "false";
}
console.log(bool);

if (true) {
    let isBool = "false";
}
//console.log("let bool" , isBool); // let isBool is out of scope, ReferenceError: isBool is not defined

var loginButton;
var loginButton;

let loginButton2;
// let loginButton2; //SyntaxError: Identifier 'loginButton2' has already been declared

//______________Primitives

//String 
let stringTest = "string value"
console.log(typeof stringTest);

//Number
let floatValue = 1000000;
console.log(typeof floatValue);

let numberValue = 100.1;
console.log(typeof numberValue);

// BigInt
let bigIntValueTest = 10000000000000000000000000000000000000000000000000000;
console.log(typeof bigIntValueTest);// number

let bigIntValue = 100000000000000n;
console.log(typeof bigIntValue); //bigInt

//Bool
let boolTrue = true;

let boolFalse = false;
console.log(typeof boolFalse, typeof boolTrue);

//Undefined
let undefinedValue;
// let undefinedValue = undefined;
console.log(typeof undefinedValue);

//Null
const nullDeclarationValue = null;
console.log(typeof nullDeclarationValue);

console.log(`Javascript is: ${bigIntValue} ${bigIntValue}`)


