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

var everyHelperResult = computers.every(function(computer){
    return computers.ram < 16

});

console.log(everyHelperResult)