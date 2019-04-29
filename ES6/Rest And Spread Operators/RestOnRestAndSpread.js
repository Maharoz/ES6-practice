const defaultColors =['red','green'];
const userFavouriteColors=['Orange','yelllow'];
//defaultColors.concat(userFavouriteColors);
console.log([...defaultColors,...userFavouriteColors]); //out put [ 'red', 'green', 'Orange', 'yelllow' ]

console.log(['blue',...defaultColors,...userFavouriteColors]);//out put [ 'blue', 'red', 'green', 'Orange', 'yelllow' ]

//another example//
function validateShoppingList(...items){
 if(items.indexOf('milk')<0){
     return ['milk',...items];
 }
 return items;
}

console.log(validateShoppingList('oranges','bread','egg'));
//output [ 'milk', 'oranges', 'bread', 'egg' ]