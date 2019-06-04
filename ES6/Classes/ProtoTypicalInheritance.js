function Car(options){
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}

function Toyota(options){
    Car.call(this,options);
    this.color = options.color;
}
Toyota.prototype =Object.create(Car.prototype);
Toyota.prototype.constructor =Toyota;

Toyota.prototype.honk = function(){
    return 'beep';
}

const toyota = new Toyota({color:'red',title:'daily drive'});

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

//output
// Toyota { title: 'daily drive', color: 'red' }
// vroom
// beep