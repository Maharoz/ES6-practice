var cars=[
    {model:'Buick',price:'CHEAP'},
    {model:'Camro',price:'Expensive'}

];
var prices = cars.map(function(car){
    return car.price;

});
console.log(prices);

/********OUTPUT******/

//[ 'CHEAP', 'Expensive' ]