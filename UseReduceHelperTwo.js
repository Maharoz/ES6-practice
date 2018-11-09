var primaryColors =[
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
];


//previous is here working like an accumulator
var reduceHelperUse = primaryColors.reduce(function(previous,primaryColor){

    previous.push(primaryColor.color);

    return previous;
//[] is working like an initial value
},[]);

console.log(reduceHelperUse);

//output [ 'red', 'yellow', 'blue' ]