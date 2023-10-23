const intValue = "20m";
let floatValue = "11.11";

let parseIntValue = Number.parseInt(intValue);
console.log(parseIntValue, typeof parseIntValue);

let parseIntValueShort = parseInt(intValue);
console.log(parseIntValueShort, typeof parseIntValueShort);

// let parseIntNumber = Number(intValue);
// console.log(parseIntNumber, typeof parseIntNumber);

let parseFloatValue = Number.parseFloat(floatValue);
console.log(parseFloatValue, typeof parseFloatValue);

let isNanValue = +intValue; // NaN
console.log(isNaN(isNanValue));

const result = 0.1 + 0.2;
console.log(result); //0.3?

const result2 = 65872.865;
console.log(result.toFixed(3));
console.log(result2.toFixed(2));
const numToString = result2.toString();
console.log(typeof numToString);

const random = Math.random();
console.log(random);
