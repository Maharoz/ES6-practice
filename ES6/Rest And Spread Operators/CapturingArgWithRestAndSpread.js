//here addNumbers(...numbers) taking list of number as array in argument

function addNumbers(...numbers){
    return numbers.reduce((sum,number)=>{
         return sum + number;
    },0)
}

addNumbers(1,2,3,4,5,6,7,8,9,10);

console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));