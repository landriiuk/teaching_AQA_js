// let price = "$1,300.25";

// $1300*3

// /modifier/i
// console.log(/\$/g.price);

// const replacePrice = price.replace(/[\$,]/g, "");
// console.log(replacePrice);

// const inputString = "Рядок1; Рядок2;Рядок3; Рядок4";
// const regex = /\s*(?:;|$)\s*/;
// const resultArray = inputString.split(regex);

// console.log(resultArray); ["Рядок1", "Рядок2", "Рядок3", "Рядок4".]

// let test = "        Test '@' test";
// let testWithReplace = test.replace(/^\s*[ ]/gm, '').replace(/'@'/, '1234')
// console.log(testWithReplace);

let stringT = "I love eat";
// let checkMatch = stringT.match(/love/)
// console.log(checkMatch[0]);
let checkMatch = new RegExp(/love/).exec(stringT);
// let i = stringT.exec(checkMatch)
console.log(stringT);
// console.log(checkMatc);


class A(){static b(){}}
