const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// const [name] = companies;
// console.log(name); //output Google

// const [name,name2] = companies;
// console.log(name2); //output Facebook


// const [name,name2,name3] = companies;
// console.log(name3); //output Uber

// const [name,name2,name3,name4] = companies;
//  console.log(name4); //output undefined

const [ name , ...rest] = companies;
console.log(rest);//output [ 'Facebook', 'Uber' ]