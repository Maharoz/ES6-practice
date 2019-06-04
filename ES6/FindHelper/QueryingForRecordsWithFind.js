var users = [
    {name :'Jill'},
    {name : 'Alex'},
    {name:'Bill'}
]

var user;

user = users.find(function(user){
    return user.name =='Alex'
});


console.log(user);