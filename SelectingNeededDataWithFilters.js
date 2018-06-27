var products=[
    {name:'cucumber',type:'vegetable'},
    {name:'banana',type:'fruit'},
    {name:'celery',type:'vegetable'},
    {name:'orange',type:'fruit'}
];

var filtedredProducts=[];

//classic for loop example
/*
for(var i=0;i<products.length;i++){
    if(products[i].type==='fruit'){
        filtedredProducts.push(products[i]);
    }
}

console.log(filtedredProducts);
*/

var prod = products.filter(function(product){
    return product.type === 'fruit';

});

console.log(prod);

/************OUTPUT*************
 * [ { name: 'banana', type: 'fruit' },
  { name: 'orange', type: 'fruit' } ]
 * 
 * 
 * 
 * *****************************/