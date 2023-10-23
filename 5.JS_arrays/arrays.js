const var1 = "John";
const var2 = "Vasyl";
const var3 = "Vasyl";
const var4 = "Vasyl";
const var5 = "Vasyl";
const var6 = "Vasyl";
const var7 = "Vasyl";
const arrayConstr = new Array("John", "Oles", null, true, 11); //outdated.
console.log(typeof arrayConstr);
//    index   0      1      2     3     4
const arrayList = ["John", "Oles", null, true, 11]; // good
console.log(typeof arrayList);
console.log(arrayList[3]);
console.log((arrayList[3] = false));
console.log(arrayList);

console.log(arrayList[arrayList.length - 1]);

let emptyArray = [];
console.log(emptyArray.length);
emptyArray[0] = new Date().getDate();
emptyArray[1] = "11";
emptyArray[3] = function name(a, b) {
  return a + b;
};

console.log(emptyArray.length);

// For
const cars1 = ["BMW", "AUDI", "Opel", "Volvo"];

function iterateCars(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
}

iterateCars(cars1);

// for ... of
const cars2 = ["BMW", "AUDI", "Opel", "Volvo"];

// for (let car of cars) {
//     console.log(car);
// }

for (const car in cars2) {
  console.log(cars2[car]);
}

const cars = ["BMW", "AUDI", "Opel", "Volvo"];

cars.forEach(function (car) {
  console.log(car);
});
cars.forEach((car) => console.log(car));
