// const numbers = [1, 2, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(function (num) {
//     return num * num;
// });

// console.log(squaredNumbers);

// const checkIf2Present = numbers.every((n) => {
//     console.log(n)
//     return n === 2
// });
// console.log(checkIf2Present);

// const numbers = [2, 4, 6, 8, 10];

// const obj = {
//     name:"user"
// }
// const stringToCheck = "my string"
// // const allEvenNumbers = numbers.every((number) => number % 2 === 0);
// // console.log(allEvenNumbers);

// const isArrayNumbers = Array.isArray(stringToCheck);
// console.log(isArrayNumbers);

// let number1 = 10; // 10

// let number2 = number1; // лише копія

// number1 = 20;
// console.log(number1,"\n", number2)

let info = {
  Name: "Abc",
  Age: 10
};
// console.log(`Name : ${info.Name} Age : ${info.Age}`); // Name : Abc Age : 10

let info1 = info;
console.log(`Name : ${info1.Age} Age : ${info.Age}`); // Name : Abc Age : 14
info1.Age = 14; // Change the Age of original object
console.log(`Name : ${info1.Age} Age : ${info.Age}`); // Name : Abc Age : 14
