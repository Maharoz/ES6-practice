var numbers = [1,2,3];
var doubledNumbers = [];


//old way
// for(var i = 0 ; i< numbers.length;i++){
//     doubledNumbers.push(numbers[i]*2);
// }
//console.log(doubledNumbers);
//output [ 2, 4, 6 ]


var doubled = numbers.map(function(number){
    return number*2;
});

console.log(doubled);
//output [ 2, 4, 6 ]