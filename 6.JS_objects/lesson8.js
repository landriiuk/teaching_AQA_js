// let emptyObj = {};
// let emptyObjObject = new Object();

// let someObj = {
//     name: "Some Value"
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const myUser = new Person("Test" , 30);

// console.log(myUser);

// console.log(cars.year[0]);
// console.log(cars.greet());
// console.log(cars.model['Audi A7']);
// console.log(cars["model"]["q5"]);
// console.log(cars["model"]["Audi A7"]);
// console.log(cars["model"]);
// let cars = {
//     made: "Audi",
//     model: {
//         q5: "Q5",
//         rs: "rs",
//         'Audi A7': "a7",
//     },
//     year: ["2020", "2015", "2013"],
//     greet: function () { console.log(`I'm : ${this.made}`) }
// }

// cars.color = ["blue", "yellow"];
// cars["isCarDrive"] = true;
// delete cars.made
// console.log(cars);
// ?.  ??

// ?. 
// let emptyObj = {};
// emptyObj.address = "Lviv, str Str";
// console.log(emptyObj.city?.["myFunc"]); // undefined

// console.log(emptyObj.city?.()); // if method


// ??

// let cars = {
//     made: "Audi",
//     model: {
//         q5: "Q5",
//         rs: "rs",
//         'Audi A7': "a7",
//     },
//     year: null,
//     greet: function () { console.log(`I'm : ${this.made}`) }
// }

// let result = cars.year ?? "test"
// console.log(result);

// let arrResponse = [
//     {
//         id: "1223",
//         user: "1223",
//         email:"test@gmail.com"
//     },
//     {
//         id: "1224",
//         user: "Orest"
//     },
//     {
//         id: "1225",
//         user: "Orest"
//     }
// ]
// for (let index = 0; index < arrResponse.length; index++) {
//     console.log(arrResponse[index]);
// }

// arrResponse.push({ id: "11", user: "Liubov" });
// arrResponse[0].role = "Developer"
// console.log(arrResponse);

// for (const iterator of arrResponse) {
//     console.log(iterator); // всі обєкти
//     for (const key in iterator) {  // iterator[key] - по ключах обєктів
//         if (iterator[key] > 1223) {
//             // delete iterator[key];
//         }
//         if (typeof iterator[key] === "number") {
//             break;
//         }
//         console.log(iterator[key]);
//     }
// }
// console.log(arrResponse);

// let arrResponseObj = {
//     user_1223: {
//         id: "1223",
//         user: "Taras",
//     },
//     user_1224: {
//         id: "1224",
//         user: "Orest",
//     },
//     user_1225: {
//         id: "1225",
//         user: "Orest",
//     }
// }

// for (const key in arrResponseObj) {
//     // console.log(arrResponseObj[key]);
//     const obj = arrResponseObj[key];
//     if (key === "user_1223") {
//         console.log("I'm working");
//         continue;
//     }
//     for (const key2 in obj) {
//         // if (key2 === "user_1223") {
//         //     continue;
//         // }
//         console.log(obj[key2]);
//     }
// }
// console.log(arrResponseObj);

// const customer = {
//     name: "Alex",
//     email: "user@gmail.com",
//     paymentMethod: {
//         card: "mastercard",
//         cash: "usd"
//     },
//     preferences: ["eat", "sleep"]
// }

const car = {
    made: "Audi",
    model: {
        q5: "Q5",
        rs: "rs",
        'Audi A7': "a7",
    },
}

// keys, values, entries. 
// console.log(Object.keys(customer)) // масив ключів
// console.log("_____________________________________________");
// console.log(Object.values(customer)) // масив значень
// console.log("_____________________________________________");
// console.log(Object.entries(customer)); // масив значень

// for (const iterator of Object.entries(customer)) {
// console.log(iterator);
// }


// assign
// const newObj = Object.assign(customer, car);
// console.log(newObj);

// const customer = {
//     name: "Alex",
//     email: "user@gmail.com",
//     paymentMethod: {
//         card: "mastercard",
//         cash: "usd"
//     },
//     preferences: ["eat", "sleep"]
// }
// const createObj = Object.freeze(customer)
// createObj.email = "123"
// console.log(createObj);

//                            add prototype
// const createObj = Object.create(customer);
// createObj.address = "Lviv str Str";
// console.log(customer);

// console.log(createObj.address); // 

// console.log(customer.hasOwnProperty("email")); //true or false.

// const profile = {
//     firstName: "Liubov",
//     lastName: "Andriiuk",
//     website: "someweb.com",
// };
// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const website = profile.website;
// console.log(firstName);
// console.log(lastName);
// console.log(website);
const profile = {
    firstName: "Liubov",
    lastName: "Andriiuk",
    website: {
        site1: "someweb.com",
    }
}
// const { firstName, lastName, website: { site1 } } = profile;
// const { firstName: name1, lastName: name2, website: site } = profile;
// console.log(name1);
// console.log(name2);
// console.log(site);

// const arrProfile = ["Liubov", "A", "mywebsite"];

// const [firstName, ...lastName] = arrProfile;
// console.log(firstName);
// console.log(lastName);


function name({firstName, ...lastName}) {
    console.log(firstName, "UserName");
    console.log(lastName, "Last Name");
}

name(profile);