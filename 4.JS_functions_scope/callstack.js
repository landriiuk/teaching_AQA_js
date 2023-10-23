function greeting() {
  console.log("Start"); // greeting() / start
  sayHi();
  console.log("Finish");
}

function sayHi() {
  console.log("Hi!");
}

greeting();

// recursion
// function add() {
//     add();
// }
// add(); // RangeError: Maximum call stack size exceeded
