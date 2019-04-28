promise = new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve(); 
    // },3000);
    var request = new XHMLRequest()
    //make request
    request.onload=()=>{
        resolve();
    };
 });
 
 promise
     .then(()=>console.log('finally finished'))
     .then(()=>console.log('i was also ran!!'))
     .catch(()=> console.log('oh!'));