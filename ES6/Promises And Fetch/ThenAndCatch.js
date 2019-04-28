promise = new Promise((resolve,reject) => {
   resolve(); 
});

promise
    .then(()=>console.log('finally finished'))
    .then(()=>console.log('i was also ran!!'))
    .catch(()=> console.log('oh!'));