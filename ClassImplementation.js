class Car {
    //constructor
    constructor({title}){
        this.title = title;
    }

    //method
    drive(){
        return 'vroom';
    }
}

//creating the object and initializing the constructor
const car = new Car({title:'Toyota'});

//calling the object
console.log(car);
//calling the method 
console.log(car.drive());