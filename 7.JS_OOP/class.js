class BooksClass {

    constructor(bookName) {
        this.bookName = bookName;
        this.testBook = []
    }

    checkBook() {
        console.log(`My book is: ${this.bookName}`);
    }
}

const booksClass = new BooksClass("Harry Potter");
const booksClass2 = new BooksClass("Harry Potter 1");
const booksClass3 = new BooksClass("Harry Potter 2");

console.log(booksClass.bookName);

booksClass2.checkBook();
console.log(booksClass2.bookName);


// example of HW
// class Class1 {

// }

// class Class2 extends Class1 {
//     #emptyArray
//     constructor() {

//         this.#emptyArray = []
//         super();
//     }
// }

// const class1 = new Class1("Harry Potter", ...Class1.apply.apply.apply.apply.apply.apply.apply);

// const person1 = new Class2("Harry Potter 1");

// class1.method(person1);


