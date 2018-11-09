class Car {
    //constructor of car class
    constructor({title}){
        this.title = title;
    }
//method of car class
    drive(){
        return 'vroom';
    }
}


//toyota class inheriting car class
class Toyota extends Car{

    constructor(options){
        super(options);
        this.color = options.color;

    }

    //method of toyota class
    honk(){
        return 'beep';
    }
}
//calling toyota object
const toyota = new Toyota({color:'red',title:'driver'});

//displaying methods and object on console
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);