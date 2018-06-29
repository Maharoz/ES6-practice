var primaryColors =[
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
];



var reduceHelperUse = primaryColors.reduce(function(previous,primaryColor){

    previous.push(primaryColor.color);

    return previous;

},[]);

console.log(reduceHelperUse);

//output [ 'red', 'yellow', 'blue' ]