/*
The constructor property returns a reference to the Object constructor function 
that created the instance object
*/

let o = {};
o.constructor === Object; // true

let p = new Object();
p.constructor === Object; // true

let a = [];
a.constructor === Array; // true

let z = new Array();
z.constructor === Array; // true

let n = new Number(3);
n.constructor === Number; // true

// Displaying th constructor of an Object

function Car(color) {
  this.color = color;
}

const redColor = new Car("red");

console.log(redColor);

/*

Car {color: "red"}
color: "red"
__proto__: Object

*/
