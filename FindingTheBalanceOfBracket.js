function balancedParens(string){

 return !string.split("").reduce(function(previous,char){


        if (previous<0){return previous;} //for input like ')('
        if (char === "(" ){return ++previous;}
        if (char === ")" ){return --previous;}
        return previous;
       
    },0);
   
}

balancedParens("((((((");

console.log(balancedParens("(((((("))

//output false

