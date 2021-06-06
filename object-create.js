// the ways we can create an Object

// 1. Object Constructor

var object = new Object(); /* not Recommanded */

// 2. Object Create method

/* when we don't want __proto__ we strictly use this */
var object1 = Object.create(null);

console.log(object1);

/* 
    {} No properties
*/

//3. Object literal syntax:

var object3 = {};
console.log(object3);

/*
    {}__proto__: Object
*/

//4. Function constructor:

function Person(name) {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object4 = new Person("King");

console.log(object4);
/*

{name: "King", age: 21}
age: 21
name: "King"
__proto__: Object

*/

//5. ES6 Syntax

class Person1 {
  constructor(name) {
    this.name = name;
  }
}

var object5 = new Person1("King");

console.log(object5);

/*
Person1 {name: "King"}
name: "King"
__proto__: Object
*/
