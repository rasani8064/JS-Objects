const toyota = {
  drive() {
    return "driving toyota";
  },
};

const airtel = {
  wifi() {
    return "using WiFi";
  },
};

/* 
    Object.setPrototypeOf(desinationObject, sourceObject )
    here, to copy all the methods sourceObject to desinationObject
*/

Object.setPrototypeOf(airtel, toyota);

console.dir(airtel);

/*
Object
wifi: ƒ wifi()
__proto__:
    drive: ƒ drive()
    __proto__: Object

*/

console.dir(airtel.wifi()); //using WiFi
console.dir(airtel.drive()); //driving toyota
