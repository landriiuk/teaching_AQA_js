// '', "" , ` `

// let greeting = "Hello world!";
//  0123456 - index ->
// console.log(greeting[0]);
// console.log(greeting.length);
// console.log(greeting.substring(1, 3));

let userName = "Ivan User";
     
let userNameDB = "ivan user";

console.log(userName + ' ' + userNameDB);
console.log(userName.concat(userNameDB))

let formatUserName = userName.toUpperCase();
console.log(formatUserName);
console.log(userName.toLowerCase() === userNameDB.toLowerCase())
console.log(userName.charAt(1));
console.log(userName.indexOf("n"));
console.log(userName.endsWith("er"))//true or false
console.log(userName.startsWith("Ivan"));

let greeting = "    Hello worldtest world! hello";

console.log(greeting.replace("world", "bla bla bla bla bla "));// change for first true
console.log(greeting.replaceAll("world", " ")); // change for all true

console.log(greeting.trim()); // delete whitespace
console.log(greeting.includes("hello")); // true/false
console.log(greeting.split(" ")); // make array






