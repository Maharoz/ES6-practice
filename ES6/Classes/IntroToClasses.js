function Car(options){
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}
const car = new Car({title : 'Focus'});

console.log(car);


console.log(car.drive());

//output

// Car { title: 'Focus' }
// vroom
