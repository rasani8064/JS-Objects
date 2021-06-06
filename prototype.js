/* 

 Object Prototypes -> All JavaScript objects inherit properties and methods from a prototype.
 -----------------

 Prototype Inheritance-> 
 ---------------------
 All JavaScript objects inherit properties and methods from a prototype:

    Date objects inherit from Date.prototype
    Array objects inherit from Array.prototype
    Person objects inherit from Person.prototype

 The Object.prototype is on the top of the prototype inheritance chain:

 Date objects, Array objects, and Person objects inherit from Object.prototype.

*/

let Car = function (color) {
  this.color = color;
};

// there are 2 ways to add method to this constructor

// 1. inside constructor add new method

let Car = function (color) {
  this.color = color;
  this.getColor = function () {
    return this.color;
  };
};

const redCar = new Car("red");

console.log(redCar);

/* 

Car {color: "red", getColor: ƒ}
color: "red"
getColor: ƒ ()
__proto__: Object

*/

//2. using Prototype

let Car = function (color) {
  this.color = color;
};

Car.prototype.getColor = function () {
  return this.color;
};

const redCar = new Car("red");

console.log(redCar);

/*

Car {color: "red"}
color: "red"
__proto__:
getColor: ƒ ()
constructor: ƒ (color)
__proto__: Object

*/

console.log(redCar.getColor());

/* red */

// adding to global object and Checking the to string color is having in other object  or not inside prototype

Object.prototype.toString = function () {
  return `color : ${this.color}`;
};

console.log(redCar.toString()); /* color : red */

// adding test color whether color is setting or not

let blah = {
  color: "blah",
};

console.log(blah.toString()); /* color : blah */
