var counter = 0;

class Vehicle {
    constructor(Vtype, speed) {
        if (counter === 50) throw 'Vehicle limit reached';
        counter++;
        this.Vtype = Vtype || 'no vehicle type';
        this.speed = speed || 0;
        this.start = function () {
            return 'This vehicle has started.';
        };
        this.stop = function () {
            return 'This vehicle has stopped.';
        };
    }
}

class Car {
    constructor(Ctype, model, speed) {
        Vehicle.call(this, 'Car', speed);
        this.Ctype = Ctype || 'no car type specified';
        this.model = model || 'no car model specified';
        this.drive = function () {
            return 'This car has started driving.';
        };
    }
}



function InstanceOfCar1(obj)
{
    return obj.Vtype == 'Car';   
}
function InstanceOfCar2(obj) {
    return obj instanceof Car; 
  }
var vehicle1 = new Vehicle('Truck', 60);
var vehicle2 = new Vehicle('Bike', 30);
var car1 = new Car('sedan','KIA cerato', 60);

console.log(car1.start());
console.log(car1.drive());


