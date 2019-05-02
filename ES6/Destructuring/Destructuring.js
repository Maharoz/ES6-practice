var expense ={
    type:'Business',
    amount:'$45 USD'
};

//old js code
// var type = expense.type;
// var amount = expense.amount;

//ES6
//equivalent to upper two line
const {type} = expense;
const {amount} = expense;

//alternative way
//const {type,amount} = expense;

console.log(type);//output-->Business
console.log(amount);//output-->$45 USD
