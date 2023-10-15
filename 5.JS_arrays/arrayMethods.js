// push -> add end
const studentsList1 = ["John", "Vasyl", "Ben"];
// console.log(studentsList.push(11));

console.log(studentsList1);
// //pop -> delete last
console.log(studentsList1.pop());
console.log(studentsList1);

//unshift = add as first
console.log(studentsList.unshift("Taras"));
console.log(studentsList);
//shift
console.log(studentsList.shift());
console.log(studentsList);


const studentsList2 = ["John", "Vasyl", "Ben"];

console.log(studentsList2.join());
console.log(studentsList2.join(" "));
console.log(studentsList2.join("-_-"));

const sports2 = ["soccer", "baseball", "football", "tennis"];

// includes
// console.log(sports.includes("tennis")); //

// indexOf
// console.log(sports.indexOf(1)); // -1
// console.log(sports.indexOf("baseball"));
const studentsList = ["John", "Vasyl", "Ben"];

const arraySpotStudents = sports.concat(studentsList);
console.log(arraySpotStudents);

// slice
console.log(sports2.slice(0, 3)); // [ 'soccer', 'baseball', 'football' ]
console.log(sports2.slice(-1));

console.log(sports2);

const sports3 = ["soccer", "baseball", "football", "tennis"];
// splice
console.log(sports3.splice(2, 0));
console.log(sports3);
console.log(sports3.splice(0, 1, "apple", "orange"));
console.log(sports3);
console.log(sports3.splice(2));
console.log(sports3.splice(2));

// filter
const result = sports.filter((element) => element.length > 6);
console.log(result);

// find
const resultFind = sports.map((element) => element.length > 6);
console.log(resultFind);

// const numbers = [1, 2, 3, 4, 5, 6];
const reduceResult = numbers.reduce((acc, element) => acc + element);
console.log(reduceResult);


const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const sports = ["soccer", "baseball", "football", "tennis"];
const sortedArray = sports.sort((a, b) => a.localeCompare(b))
console.log(sortedArray);


