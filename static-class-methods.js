/* instance Methods--> called when u create an object like 
    const p = new a()
    you can access methods with p.drive() like that


    Static Methods-- can access diectly with calssName

    -static methods goes to inside class not inside prototype

    //this is static method access
    class Car {
        static comparePrice() {
        console.dir(this);
     }
    }
    Car.comparePrice();
*/

class Car {
  constructor(color, price) {
    Object.assign(this, { color, price });
  }

  static comparePrice(car1, car2) {
    return Math.abs(car1.price - car2.price);
  }

  getColor() {
    return this.color;
  }
}

const redCar = new Car("red", 100);
const blueCar = new Car("blue", 102);

console.log(redCar.getColor()); //red
console.log(Car.comparePrice(redCar, blueCar)); // 2
