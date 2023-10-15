// let numbers = [1, 2, 3]
// console.log(numbers); // imperative 

// function showNumber() { // процедурний
//     let numbers = [1, 2, 3]
//     console.log(numbers)
// }

//Functional
// const value = [1, 5, "String_123"]

// let filterValue = () => value.filter((variable)=> typeof variable === "string");
// // const value = [1, 5, "String_123"]

class ShowNumber { // OOP
    constructor(number) {
        this.number = number ?? "number 100500"
    }

    // printNumber(){
    //     console.log(this.number);
    // }

    printNumber = () => this.number
}

const showNumberClass = new ShowNumber();
console.log(showNumberClass.printNumber());