// const myFrstPromise = new Promise((resolve, reject) => {

//     resolve();
//     reject();
// })

// let extraTask;

// function toDo1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1 task is done"); resolve("done");
//         }, 1000)
//     })
// }

// function toDo2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2 task is done"); resolve("done");
//         }, 3000)
//     });
// }

// function toDo3() {
//     return new Promise((resolve, reject) => {
//         extraTask = false
//         setTimeout(() => {
//             console.log("3 task is done"); resolve("done");
//         }, 1000)
//     })
// }

// function isExtraTask() {
//     return new Promise((resolve, reject) => {
//         if (extraTask === true) {
//             setTimeout(() => {
//                 console.log("I'm working");
//                 resolve("done")
//             }, 2000)
//         } else {
//             reject("Error here")
//         }
//     })
// }

// toDo1()
//     .then(toDo2)
//     .then(toDo3)
//     .then(isExtraTask)
//     .catch(err => console.log(err))

// const promise = new Promise((resolve, reject) => {
//     // Виконання асинхронної операції
//     if (false) {
//         resolve("Успішний результат");
//     } else {
//         reject("Помилка");
//     }
// });

// promise
//     .then((result) => {
//         console.log(`Результат: ${result}`); // Результат: Успішний результат
//     })
//     .catch((error) => {
//         console.error(`Помилка: ${error}`); // Помилка: Помилка
//     });

// https://jsonplaceholder.typicode.com/users

// const resp = response => response.json();
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(resp)
//     .then((json) => {
//         console.log(json.company);
//     })

// function getUserById(id) {
//     // return Date.now() % 2 === 0
//     //     ? new Promise((resolve, reject) => {
//     //         reject("Simulated error")
//     //     })
//     // :
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(res => res.json())
// }

// getUserById(1).then(json => console.log(json));
// getUserById(3).then(json => console.log(json));
// getUserById(2).then(json => console.log(json));
// getUserById(4).then(json => console.log(json));
// getUserById(5).then(json => console.log(json));

// const result = Promise.all([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)])

// result.then((res) => console.log(res))

// const resultAllSettled = Promise.allSettled([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)])

// resultAllSettled.then(res => console.log(res))

// const resultAllSettled = Promise.race([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)])

// resultAllSettled.then(res => console.log(res))

// async function getUserById(id) {
//     const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const result = request.json();
//     return result
// }

// getUserById(2).then((res) => {
//     console.log(res);
// })
