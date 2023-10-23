function checkIfCat(animal, onSuccess, onFailure) {
  if (animal === "cat") {
    return onSuccess();
  }
  return onFailure();
}

function onSuccessCat() {
  console.log("It's a cat");
}

function onFailureCat() {
  console.log("It's not a cat");
}

//                             variable, callback, callback
let resultAnimal = checkIfCat("cat", onSuccessCat, onFailureCat);

function sum(n) {
  // Basic condition.
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1); // 5 + 4 + 3 + 4 + 3 + 2 + 1
}
let result = sum(5);
console.log(result);

const a = "1";
console.log(Number(a));
