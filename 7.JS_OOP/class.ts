interface IUser {
    walk: () => void,
    sleep: () => void
}

class User1 implements IUser {
    constructor() {
    }

    walk: () => {};
    sleep: () => {};
}
class Person implements IUser {
    constructor() {

    }
    walk(): void { console.log("smth"); };
    sleep(): void { };
}

class Employee {
    constructor() {
    }

    abilitySleep(sleepEl: Array<IUser>) {
        sleepEl.forEach((sleepE) => {
            sleepE.sleep();
        });
    }
    // .forEach((sleepEl: Array<IUser>)  {
    // sleepEl.sleep();
}

const employee = new Employee();
employee.abilitySleep([new User1(), new Person()]);
console.log(employee);