
const funcExp = function () { console.log('body') }

function name(a, b) {
    return a, b
}

name(1, 2)

// IIFE

(function () {
body
})();

(function () {
console.log("I'm")
})();

// Closures.
// 1)
function findFrameName() {
    let frameName = "Playwright";
    function displayName() {
        console.log(frameName); //undefined
    }
    displayName();
}
findFrameName();

// 2
function findFrameName() {
    let frameName = "Playwright";
    function displayName() {
        console.log(frameName); //undefined
    }
    return displayName;
}
let result = findFrameName();
// result();// === displayName

console.log(result);

function outerFunction() {
    let outerVariable = 10;
  
    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
  }
  // Створення замикання
let closure = outerFunction();
  // Виклик замикання
closure(); // Результат виведення буде "10"



