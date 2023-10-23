let myFunction = (a, b) => {
  a + b;
  console.log(a);
};
// () {} return
let addValue = (a) => a * 3;

let result = addValue(2);
console.log(result);

let fillLoginForm = () => {};
// example of scoping
function myFunction() {
  if (true) {
    var test = "";
  }
  console.log(test);
}
