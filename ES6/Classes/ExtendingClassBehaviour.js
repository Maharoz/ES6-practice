class Car {
    constructor(options){
        this.title = options.title;
    }
    drive(){
        return 'vroom';
    }
}

class Toyota extends Car{
    constructor(options){
        super(options);
        this.color = options.color;
    }
    honk(){
        return 'beep';
    }
}

const toyota = new Toyota({
    color: 'red',
    title:'drive daily'
});

console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);