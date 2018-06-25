//create an array of numbers

var numbers=[1,2,3,4,5,6];


//create a variable to hold the sum

var sum=0;

function adder(number){
    sum += number;
}
//loop over the array , creating the sum variable

//numbers.forEach(function(number){
 //  sum += number;
//});

numbers.forEach(adder);

//ptint the sum variable
//sum;
console.log(sum);

