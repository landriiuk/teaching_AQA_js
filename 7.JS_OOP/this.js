// if (this == global) {
//     console.log("I'm global"); // check this 
// }

// function greet(message) {
//     this.message = message
//     console.log(this.message);
//     // console.log(this === window); // or globalThis
// }

// greet("Hey"); // true

// let greetArrow = () => this
// console.log(greetArrow());

// const obj = {
//     name: "Alex",
//     sing() {
//       console.log("a this ", this);
//       let anotherFunc = () => {
//         console.log("b this ", this);
//       }
//       anotherFunc();
//     }
//   };
  
// obj.sing();
  