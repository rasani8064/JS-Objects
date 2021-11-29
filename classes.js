class Car {
  constructor(color) {
    this.color = color;
    this.name = name;
  }
  drive() {
    console.log("driving a car");
  }
}

// console.dir(typeof Car);

//typeof class is function
const redCar = new Car("red");
console.dir(redCar);

/* 

Car
    color: "red"
__proto__:
    constructor: class Car
    drive: ƒ drive()
    __proto__: Object


*/
