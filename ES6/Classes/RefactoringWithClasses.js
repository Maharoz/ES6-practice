class Car {

    constructor(options){
        this.title = options.title;
    }
    drive(){
        return 'vroom';
    }
}

const car = new Car({title:'toyota'});

console.log(car.drive());