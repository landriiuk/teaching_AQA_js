// const jsonProperties = {
//     "userName": "Ivan",
//     "userEmail": "test@test.js",
//     "userAge": 30
// }

// try {
//     const result = JSON.stringify(jsonProperties);
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }

// const jsonProperties = {
//     "userName": "Ivan",
//     "userEmail": "test@test.js",
//     "userAge": 30,
// }

// const objUser = {
//     userName: "Ivan",
//     email: "test@test.js",
//     userAge: 30,
// }

// const objToJSON = JSON.stringify(objUser, (key, value) => {
//     if (key === "userName") {
//         return value = "Vasyl";
//     }
//     return value;
// });

// console.log(objToJSON);

// const JSONToObj = JSON.parse(objToJSON, (key, value) => {
//     if (key === "age") {
//         return value + 10;
//     }
//     return value;
// });

// console.log(JSONToObj);

// const person = { name: "John", age: 30, city: "New York" };
// const jsonString = JSON.stringify(person, (key, value) => {
//     if (key === "age") {
//         return value + 10;
//     }
//     return value;
// });
// console.log(jsonString); // '{"name":"John","age":40,"city":"New York"}'

// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// const person = JSON.parse(jsonString, (key, value) => {
//   if (key === "age") {
//     return value + 10;
//   }
//   return value;
// });
// console.log(person); // { name: "John", age: 40, city: "New York" }
