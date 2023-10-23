// static, # - private, _bookName - protected(private)

class BooksClass {
  // #bookName;
  constructor(bookName, isAvailable) {
    this.bookName = bookName;
    this._isAvailable = isAvailable;
    // this.testBook = []
  }

  static bookLength = 100;

  static printBook() {
    console.log(`My book is: ${this.bookName}`);
  }

  // checkBookIfAvailable() {
  //     if (this._isAvailable === true) {
  //         console.log(`${this.#bookName} book is available, pls take it`);
  //     } else {
  //         console.log(`${this.#bookName}  book is not available`);
  //     }
  // }
}

const booksClass = new BooksClass("Avatar", true);
// console.log(booksClass.)
console.log(booksClass._isAvailable);
BooksClass.printBook();
// booksClass.checkBookIfAvailable()

// console.log(booksClass.bookLength)
console.log(BooksClass.bookLength);
