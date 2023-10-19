// Створіть клас ProductClass, який представляє товар у магазині. У класі Product повинні бути наступні властивості:

// name - назва товару. price - ціна товару. quantity - кількість одиниць товару на складі. Клас ProductClass повинен мати наступні методи:

// getTotalPrice() - повертає загальну вартість товару (ціна * кількість).

// purchase(quantity) - зменшує кількість товару на складі на одиницю (передану як аргумент) після покупки. Також перевірте чи кількість товарів на складі не = 0 та чи кількість товарів яка є не менша ніж кількість товарів яка задана у аргументі.

// Створіть 3 екземпляри класу Product для різних товарів та виконайте наступні дії:
// // Приклад як це зробити, ви маєте мати 3 таких екземпляри класу.
// const tShirt = new Product("t-shirt", 20, 100);
// Виведіть загальну вартість кожного товарy для всіх ваших змінних екземпляра, використовуючи метод getTotalPrice().
// Виконайте покупку purchase(quantity) для всіх товарів з екземпляру класу.
// Виведіть залишок товарів на складі після кожної покупки.

class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  purchase(quantity) {
    if (quantity <= this.quantity && quantity > 0) {
      this.quantity -= quantity;
      console.log(`Purchase ${quantity} for  ${this.name} is done.`);
    } else {
      console.log(`Can't purchase for ${this.name}. There not enough products`);
    }
  }
}
const tShirt = new ProductClass("T-shirt", 20, 100);
const sneakers = new ProductClass("Sneakers", 50, 50);
const jeans = new ProductClass("Jeans", 30, 75);
console.log(`Total amount for ${tShirt.name}: $${tShirt.getTotalPrice()}`);
console.log(`Total amount for${sneakers.name}: $${sneakers.getTotalPrice()}`);
console.log(`Total amount for${jeans.name}: $${jeans.getTotalPrice()}`);

tShirt.purchase(0);
sneakers.purchase(60);
jeans.purchase(40);

console.log(` ${tShirt.name} is ${tShirt.quantity}`);
console.log(` ${sneakers.name} is ${sneakers.quantity}`);
console.log(` ${jeans.name} is ${jeans.quantity}`);
