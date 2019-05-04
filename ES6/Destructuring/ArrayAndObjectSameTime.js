// const companies = [
//     {name : 'Google' , location:'Mointain View'},
//     {name: 'Facebook',location:'Menlo Park'},
//     {name: 'uber',location:'San Francisco'},
// ];

//ES5
// var location = companies[0].location;
// console.log(location); //Output Mointain View

// const [{location}] = companies;
// console.log(location); //Output Mointain View


const Google ={
    locations: [ 'Mountain View', 'New York','London']
};

// const {locations} = Google;
//  console.log(locations); //out put [ 'Mountain View', 'New York', 'London' ]


 const {locations : [location]} = Google;
 console.log(location); //output Mountain View