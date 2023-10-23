let numberOne = 1; // глобальна
var numberTwo = 2;
// let test = "test";
console.log(numberOne);
function calculate(a) {
  let numberFour = 2; // функція
  let numberOne = 2;
  var numberTwo = 3;
  console.log(numberOne);
  if (a === 11) {
    // блочний скоуп
    let numberOne = 3;
    var numberTwo = 4;
    console.log(numberOne);
  }
  console.log(numberOne);
}

calculate((a = 11));
console.log(numberFour); //numberFour is not defined
console.log(numberOne);

let character4 = "Teddy"; // global scope
foo();
function foo() {
  if (true) {
    var character1 = "Robin"; //function scope
    let character2 = "Ted"; //block scope
    const character3 = "Barney"; //block scope
  }
  let character4 = "Ban"; //function scope
  console.log(character1); //Robin
  // console.log(character2)  //not defined
  // console.log(character3) //not defined
}

function multiply(test) {
  // console.log(arguments.length);
  // console.log(test);
  let arr = Array.from(arguments);
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

multiply("1", 1, false, true);
