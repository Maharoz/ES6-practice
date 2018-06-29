var computers =[
    {name:'Apple',ram:24},
    {name:'compaq',ram:4},
    {name:'acer',ram:32}
];

var allComputersCanRunProgram = true;
var onlySomeProgramCanRunProgram = false;


/*For loop use
for(var i=0;i<computers.length;i++){
    var computer = computers[i];

    if(computer.ram<16){
        allComputersCanRunProgram = false;
    }
    else{
        onlySomeProgramCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram,onlySomeProgramCanRunProgram)

*/
//Is all computer have ram greater than 16?
var everyHelperResult = computers.every(function(computer){
    return computer.ram < 16;

});

//output false

console.log(everyHelperResult);

//Is some of the computer have ram lesser than 16?
var someHelperResult = computers.some(function(computer){
    return computer.ram >16;

});

console.log(someHelperResult);

//output tue