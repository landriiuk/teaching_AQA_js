// let condition = true

// if (condition === false) { console.log("yes") }

// if (studentsPresent === generalStudentsNumber) {
//     //true
//     console.log("all students present");
// } else {
//     //false
//     console.log("someone is absent");
// }

// if (studentsPresent === generalStudentsNumber) {
//     console.log("all students present");
// } else if (studentsPresent <= 15) {
//     console.log("5 students absent");
// } else if (studentsPresent >= generalStudentsNumber) {
//     console.log("one new student");
// } else {
//     console.log("can not calculate");
// }

// let age = 20;
// let ageAdult = 18;

// if (age >= ageAdult) { // true
//     if (age === ageAdult) {
//         console.log("check documents");// false
//     } else {
//         console.log("person older then 18");
//     }
//     console.log("Sell alco");
// } else {
//     console.log("ask for help");
// }

// const isLoggedIn = false;
// //                               true                       false
// const checkStatus = isLoggedIn ? console.log('logged in') : console.log('pls log in');

// let studentsPresent = 20;
// let generalStudentsNumber = 20;

// const checkStudents =
//     studentsPresent === generalStudentsNumber
//         ? console.log("all students present")
//         : console.log("someone is absent")

// if (studentsPresent === generalStudentsNumber) {
//     console.log("all students present");
// } else if (studentsPresent <= 15) {
//     console.log("5 students absent");
// } else if (studentsPresent >= generalStudentsNumber) {
//     console.log("one new student");
// } else {
//     console.log("can not calculate");
// }

// const checkStudents =
//     studentsPresent === generalStudentsNumber
//         ? console.log("all students present")
//         : studentsPresent <= 15
//             ? console.log("5 students absent")
//             : studentsPresent >= generalStudentsNumber
//                 ? console.log("one new student")
//                 : console.log("can not calculate")

// const age = 17;
// const adultAge = age >= 18 ? "Beer" : "Juice";
// console.log(adultAge); // Beer

// const age = 18;
// const adultAge =
//     age > 18
//         ? "Beer"
//         : age === 18
//             ? "check documents"
//             : age < 18
//                 ? "Juice"
//                 : "age not found"

// console.log(adultAge);

// if (studentsPresent === generalStudentsNumber) {
//     console.log("all students present");
// } else if (studentsPresent <= 15) {
//     console.log("5 students absent");
// } else if (studentsPresent >= generalStudentsNumber) {
//     console.log("one new student");
// } else {
//     console.log("can not calculate");
// }

// let studentsPresent = 26;
// let generalStudentsNumber = 20;

// switch (studentsPresent) { // condition === case
//     case generalStudentsNumber:
//         console.log("all students present");
//         break;
//     case 15:
//         console.log("5 students absent");
//         break;
//     case 21:
//         console.log("one new student");
//         break;
//     default:
//         console.log('not all students present')
// }

let fruit = "berry";
let whatIHaveInMyFridge;

switch (fruit) {
  case "apple": // true "apples" === "apples"
    whatIHaveInMyFridge = "I have apples in my fridge.";
    break;
  case "banana":
    whatIHaveInMyFridge = "I have bananas in my fridge.";
    break;
  case "orange":
    whatIHaveInMyFridge = "I have oranges in my fridge.";
    break;
  case "strawberry":
    whatIHaveInMyFridge = "I have strawberries in my fridge.";
    break;
  default:
    whatIHaveInMyFridge = "I have something else in my fridge.";
}
console.log(whatIHaveInMyFridge);
