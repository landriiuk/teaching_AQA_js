// myFunction(5); //Cannot access 'myFunction' before initialization
// declaration
function myFunction(a) {
  return a;
}
myFunction(5);

// expression
var myFunction = function () {
  console.log(a);
};
myFunction(5);

// arrow function
let myFunction = () => {
  console.log("I'm working");
};
