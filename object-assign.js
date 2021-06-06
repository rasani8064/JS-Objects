let toyota = {
  drive() {
    return "driving toyota";
  },
  break() {
    return "breaking toyota";
  },
};

// let camry = {
//   wifi() {
//     return "using wifi";
//   },
// };

/*

copies all enumerable own properties fromone or more source objects to a target object.
It returns the target object.

*/

let copyToObject = Object.assign(toyota, {});

console.dir(copyToObject);

/*

Object
    break: ƒ break()
    drive: ƒ drive()
        __proto__: Object

*/

//there is Utility for this

let c1 = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

//same function but ussing Object.assign() is like this

let c1 = function (x, y, z) {
  Object.assign(this, { x, y, z });
};

console.dir(c1);
