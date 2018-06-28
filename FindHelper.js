var users = [
    {name:'Jil'},
    {name:'bill'},
    {name:'Alex'}

];

var user;
/**for(var i=0;i<users.length;i++){
    if(users[i].name==='Alex'){
        user= users[i];
        break;
    }
}
    console.log(user);
 * 
 * 
 */

 var userName=users.find(function(user){

     return user.name==='Alex';

 });

 console.log(userName)

 //output { name: 'Alex' }