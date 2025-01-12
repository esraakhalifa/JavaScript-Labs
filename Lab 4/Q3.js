var counter = 0;
var Vehicle = {
speed: 0,
model: "no model",
type:"no type",
start: function() {
    return 'This vehicle has started.';
  },
stop: function()
{
    return 'This vehicle has stopped.'
},
initialize: function(type, model, speed) {
    if (counter == 50) throw 'Vehicle limit reached';
    counter++; 
    this.type = type || this.type; 
    this.model = model || this.model; 
    this.speed = speed || this.speed; 
    return this;
  }
};


var Car = {
    __proto__: Vehicle,
    type:'Car',
    drive: function()
    {
        return 'This car is driving.';
    }
}

function InstanceOfCar1(obj)
{
    return obj.type == 'Car';
    
}
function InstanceOfCar2(obj) {
    return Car.isPrototypeOf(obj); 
  }
var vehicle1 = Object.create(Vehicle).initialize("Truck", 60);
var vehicle2 = Object.create(Vehicle).initialize("Bike", 30);
var car1 = Object.create(Car).initialize(Car.type,"Sedan", 120);

console.log(InstanceOfCar1(vehicle1));
console.log(InstanceOfCar1(vehicle2));

console.log(InstanceOfCar1(car1));
console.log(InstanceOfCar2(car1));
//console.log(typeof car1);