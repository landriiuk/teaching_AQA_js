const arr1 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5];
const arr2 = [[...arr3], ...arr1];

console.log(arr2);

const obj = {
    name: {
        firstName: "user",
        lastName: "test"
    }
}

const newObj = {
    ...obj,
    access: "limited"
}
console.log(newObj);

function testFunc(a, b) {

    console.log(a + b);
    // console.log(arguments);
}
const numbers = [1, 2]
testFunc(...numbers);


let arr = [20, 100, 11, 15];

console.log(Math.max(...arr));

let str = "Hey there";
console.log(...str);

let person1 = {name: "Test name"}

let person2 = Object.create(person1);
person2.user = "Vasyl";
console.log(person2);