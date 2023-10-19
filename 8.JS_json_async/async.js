// function printMyMood() {
//     console.log("happy");
// }
// // // callback / delay
// // const delay = setTimeout(printMyMood, 1000); //1sec
// // console.log(delay);

// // clearTimeout(delay);

// const timeout = setInterval(printMyMood, 1000);

// setTimeout(() => {clearInterval(timeout)}, 10000)

// function makeDelivery() {
//     console.log("I'm sync");
//     setTimeout(() => { console.log("I'm async"); }, 1000);
//     console.log("I'm sync");
// }

// makeDelivery();

// callback
let extraTask;

function toDo1(onSuccess) {
  setTimeout(() => {
    console.log("1 task is done"), onSuccess();
  }, 1000);
}

function toDo2(onSuccess) {
  setTimeout(() => {
    console.log("2 task is done"), onSuccess();
  }, 3000);
}

function toDo3(onSuccess) {
  console.log("I'm sync");
  extraTask = true;
  setTimeout(() => {
    console.log("3 task is done"), onSuccess();
  }, 1000);
}

function isExtraTask() {
  if (extraTask === true) {
    console.log("Work is done");
  } else console.log("you have a lot of work");
}

toDo1(() => {
  toDo2(() => {
    toDo3(() => {
      isExtraTask, console.log("I have done");
    });
  });
});
