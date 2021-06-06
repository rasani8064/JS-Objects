const Car = function () {};

Car.prototype = {
  print() {
    return "I am a car";
  },
};

const ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function () {
  return "I am Toy Car";
};

const ToyCarTransform = function () {};

ToyCarTransform.prototype = Object.create(ToyCar.prototype);

ToyCarTransform.prototype.print = function () {
  return "I am ToyCarTransform Car";
};

const ToyotaCar = new Car();
const legetoCar = new ToyCar();
const optimusPrime = new ToyCarTransform();

console.log(ToyotaCar.print()); //I am a car
console.log(legetoCar.print()); // I am Toy Car
console.log(optimusPrime.print()); // I am ToyCarTransform Car

//if i remove print method for ToyCarTransform constructor, it will access toycar becuase it's parent
