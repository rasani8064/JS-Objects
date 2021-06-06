// Extending base class object to use Properties and Methods

const Car = function (color) {
  this.color = color;
};

//ES6 syntax
Car.prototype = {
  getColor() {
    return this.color;
  },
};

const ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.log(legoCar);

/*
ToyCar {}
__proto__:
__proto__:
getColor: ƒ getColor()
__proto__: Object
*/

// instanceOf is will check whether is inherit to base or not

console.log(legoCar instanceof ToyCar); /** True */
console.log(legoCar instanceof Car); /** True */
console.log(legoCar instanceof Object); /** True */

//isPrototypeof() method will check whether is part of prototype or not

console.log(ToyCar.prototype.isPrototypeOf(legoCar)); /** True */
console.log(Car.prototype.isPrototypeOf(legoCar)); /** True */
console.log(Object.prototype.isPrototypeOf(legoCar)); /** True */
