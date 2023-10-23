class LibraryClass {
  constructor(bookName, isAvailable) {
    this.bookName = bookName;
    this._isAvailable = isAvailable;
    // this.testBook = []
  }

  static bookLength = 100;

  static printBook() {
    console.log(`My book is: ${this.bookName}`);
  }

  checkBookIfAvailable() {
    if (this._isAvailable === true) {
      console.log(`${this.bookName} book is available, pls take it`);
    } else {
      console.log(`${this.bookName}  book is not available`);
    }
  }

  checkBooksLength() {
    throw new Error("Its abstraction");
  }
}

class VisitorClass extends LibraryClass {
  #visitorAge;
  constructor(bookName, isAvailable, visitorAge, visitorName) {
    super(bookName, isAvailable);
    this.#visitorAge = visitorAge;
    this.visitorName = visitorName;
  }

  checkInfoAboutVisitor() {
    console.log(`Visitor ${this.visitorName}, wants to take ${this.bookName}`);
  }

  checkBookIfAvailable() {
    console.log(`This ${this.bookName} book is busy. `);
  }

  #showAge() {
    return (this.#visitorAge += this.#visitorAge);
  }

  showVisitorsAge() {
    return this.#showAge(); // check
  }
}
const booksClass = new LibraryClass("Avatar", true);
const visitorClass = new VisitorClass("The lord of rings", true, 30, "Olesya");

// booksClass.checkInfoAboutVisitor();

visitorClass.checkBookIfAvailable();
// visitorClass.checkInfoAboutVisitor();

console.log(visitorClass.showVisitorsAge());
