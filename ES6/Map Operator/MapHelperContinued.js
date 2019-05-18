var cars = [
    {model:'Buick',price:'CHEAP'},
    {model:'Camro',price:'expensive'}
];

var prices = cars.map(function(car){
    return car.price;
});

console.log(prices);
//output [ 'CHEAP', 'expensive' ]