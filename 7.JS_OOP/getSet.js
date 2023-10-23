class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius;
  }

  set diameter(newRadius) {
    return (this._radius = newRadius);
  }
}

const circleClass = new Circle(20);
circleClass.diameter = 10; // set
console.log(circleClass.diameter); // get
