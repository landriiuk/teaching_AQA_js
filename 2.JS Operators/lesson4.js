// let bookPage = 50;
// // bookPage = bookPage + 1;
// bookPage++;
// console.log(bookPage);
// // ++

// let bookPage2 = 52;
// bookPage2 = bookPage2 - 2;
// console.log(bookPage2);

// let bookPage3 = 10;
// bookPage3 = bookPage3 * 3;
// console.log(bookPage3);

// let division = 10;
// division = division / 2;
// console.log("division: " + division);

// //%
// let multiplication = 17 % 5;
// console.log(multiplication)


// let decrement = 10;
// decrement--;
// console.log(decrement);

// console.log(5 * (5 - 10));

//= == ===


// console.log(comparisonX == comparisonY); //true
// console.log(comparisonX === comparisonY); //false

// < >
// <=  >= 
// console.log(10 <= 10);
// console.log(10 >= 10);


// let comparisonX = 10;
// let comparisonY = "10";

// //console.log(comparisonX > comparisonY);
// const isEqual = comparisonX !== comparisonY;
// console.log(isEqual)


// && AND

// const temperature = 35;
// const isHot = temperature > 36;
// const isSick = true;
//          false      true
// console.log(isHot && isSick);

// || OR
//          false      true
// console.log(isHot || isSick);

// ! double not
//      true   true
// console.log(!isHot && isSick);

const test = 2 + '5';
console.log(typeof test); //25 string
const test2 = 2 - '5'
console.log(typeof test2, test2); //number 3
const test3 = 2 * '5'
console.log(typeof test3, test3) //10
const test4 = 2 / '5'
console.log(typeof test4, test4) // 0.4
const test5 = 2 + null;
console.log(test5); //2
const test6 = 2 + undefined;
console.log(test6, typeof test6); //NaN
//true = 1, false = 0 
const test7 = 2 + true;
console.log(test7); // 3
console.log(2 - false); // 2
console.log(2 * true);// 2 
console.log(2 / false); // Infinity

const test8 = "2" + true
console.log(typeof test8, test8) //2true

const test9 = "2" - false;
console.log(test9, typeof test9); // 2 number
const test10 = "2" * false
console.log(test10); //0
const test11 = "2" / true;
console.log(test11); //2
