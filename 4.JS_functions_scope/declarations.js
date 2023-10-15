function myFunction() {
    console.log('result');
}
let resultMyFunc = myFunction();
console.log(resultMyFunc);

function calculateAPlusB(valueA, valueB) {
    let valueC = valueA + valueB;
    console.log(valueC); // 
}

calculateAPlusB(1, 2);
calculateAPlusB(2, 3);
calculateAPlusB(3, 4);
calculateAPlusB(5, 6);

let result = calculateAPlusB(1,6);
console.log(result); // undefined

function calculateAPlusBWithReturn(valueA, valueB) {
    let valueC = valueA + valueB;
     return valueC ; //7
}

calculateAPlusBWithReturn(1,6)
let resultWithReturn = calculateAPlusBWithReturn(1,6);
console.log(resultWithReturn); 

function checkPermission(numberOf) {
    if (numberOf > 10) {
        return true;
    }
    return false;
}
let resultPermissions = checkPermission(9);
console.log(resultPermissions);