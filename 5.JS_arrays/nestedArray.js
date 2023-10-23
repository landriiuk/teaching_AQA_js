const arrayList = [["John", "Oles"], [123, 11.5], "true", "true", 11];

//                 0                 ,    1     ,  2       3    4

//  0         1      //0    1

// let arrayList = [
//     ["apple", "banana", "cherry"],
//     ["red", "green", "blue"]
//   ];

// // console.log(arrayList[1][0], arrayList[0][1]);

for (let index = 0; index < arrayList.length; index++) {
  // const element = arrayList[index];
  // console.log(element);

  for (let j = 0; j < arrayList.length; j++) {
    console.log(arrayList[index][j]);
  }
}

// console.log("________________________");
// for (const iterator of arrayList) {
//     for (const car of iterator) {
//         console.log(car);
//     }
// }
