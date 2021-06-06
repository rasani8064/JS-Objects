let Mammal = function (legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "walking!";
  },
  sleep() {
    return "sleeping";
  },
};

let Bat = function (legs, isVegetarian) {
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};
//extending properties and Methods from Mammal
Bat.prototype = Object.create(Mammal.prototype);

//to Extending Constructor to Bat
Bat.prototype.constructor = Bat;

console.dir(Bat);

/*

Bat(legs, isVegetarian)
arguments: null
caller: null
length: 2
name: "Bat"
prototype:
constructor: ƒ (legs, isVegetarian)
__proto__: Object
__proto__: ƒ ()
[[FunctionLocation]]: extending-constructors.js:14
[[Scopes]]: Scopes[2]

*/

console.dir(Bat.prototype.sleep()); //sleeping
console.dir(Bat.prototype.walk()); //walking!

//using of above Bat

const fruitLeg = new Bat(10, true);

console.log(fruitLeg);

/*
Bat {legs: 10, isVegetarian: true}
isVegetarian: true
legs: 10
__proto__: Object
*/

console.log(fruitLeg.sleep()); //sleeping
console.log(fruitLeg.walk()); //walking!
