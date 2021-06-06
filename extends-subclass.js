class Mammal {
  constructor(_legs, _name = "jon doe") {
    this.legs = _legs;
    this.name = _name;
    this.warmBlooded = true;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
  constructor(_legs, _name, _eatsMeat) {
    super(_legs, _name);
    this.eatsMeat = _eatsMeat;
  }
  fly() {
    return `${this.name} is flying`;
  }
  walk() {
    return `${super.walk()} with a carrot`;
  }
}

let fruitBat = new Bat(4, "peter", false);

console.log(fruitBat);

/*
Bat {legs: 4, name: "peter", warmBlooded: true, eatsMeat: false}
eatsMeat: false
legs: 4
name: "peter"
warmBlooded: true
__proto__: Mammal
*/

// extends subclass and taking args

class mom {
  constructor(a, b, c, d, e) {
    Object.assign(this, { a, b, c, d, e });
  }
}

class kid extends mom {
  constructor(f, ...args) {
    super(...args);
    this.f = f;
  }
}

const newKid = new kid("a", "c", "f", "a", "c");

console.log(newKid);

/*
kid {a: "c", b: "f", c: "a", d: "c", e: undefined, …}
a: "c"
b: "f"
c: "a"
d: "c"
e: undefined
f: "a"
__proto__: mom

*/
