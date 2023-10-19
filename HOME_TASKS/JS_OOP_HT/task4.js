/*Створіть клас CarClass з такими властивостями та методами:

Властивості:

make (марка автомобіля) - публічна .
model (модель автомобіля) - публічна.
year (рік випуску автомобіля) - публічна.
speed (поточна швидкість автомобіля) - приватна, початкова швидкість має = 0.
Методи:

constructor(make, model, year) - конструктор класу, який ініціалізує марку, модель та рік випуску автомобіля, а також встановлює початкову швидкість на нуль. (this.speed = 0)
getCarInfo() - абстрактний метод.
accelerate(speed) - публічний метод, який збільшує швидкість автомобіля на задану кількість кілометрів на годину.
brake(speed) - публічний метод, який зменшує швидкість автомобіля на задану кількість кілометрів на годину.
Створіть клас вашого автомобіля, наприклад (AudiClass) який буде наслідувати клас CarClass.

Додайте супер конструктор, та додайте нову властивість у свій конструктор:

color - приватна властивість.

Перезапишіть абстрактний метод getCarInfo() - має бути публічний метод, який виводить інформацію про автомобіль (марка, модель, рік та колір).

За допомогою геттера та сеттера створіть методи myCurrentColor(). У цих методах виводьте поточний колір автомобіля. у set метод має прийняти параметр color.

Cтворіть екземпляр класу вашого автомобіля який унаслідував властивості з батьківського класу.
Виведіть інформацію про ваш автомобіль (getCarInfo()).
Виконайте декілька операцій зі зміною швидкості (Тобто необхідно викликати ці методи accelerate(speed) та brake(speed))
За допомогою гетера та сетера змініть інформацію про ваш колір.
За допомогою методаgetCarInfo() виведіть інформацію про автомобіль
*/

class CarClass {
  #speed;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#speed = 0;
  }

  getCarInfo() {
    // return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    //  throw new Error("this method is not implemented")
  }

  accelerate(speed) {
    return (this.#speed += speed);
  }

  brake(speed) {
    return (this.#speed -= speed);
  }
}

class AudiClass extends CarClass {
  #color;
  constructor(make, model, year, color) {
    super(make, model, year);
    this.#color = color;
  }

  // getCarInfo() {
  //     return `Color: ${this.#color}`;
  // }

  getCarInfo() {
    return `${super.getCarInfo()}, Color ${this.#color}`;
  }

  get myCurrentColor() {
    return this.color;
  }

  set myCurrentColor(newColor) {
    this.color = newColor;
  }
}

const myAudi = new AudiClass("Audi", "RS", 2020, "grey");

console.log(myAudi.getCarInfo());

myAudi.accelerate(50);
console.log(`Speed: ${myAudi.accelerate(50)} `);
myAudi.brake(90);
console.log(`Speed: ${myAudi.brake(10)} `);

myAudi.myCurrentColor = "Red";
console.log(`New color is: ${myAudi.myCurrentColor} `);

console.log(myAudi.getCarInfo());
