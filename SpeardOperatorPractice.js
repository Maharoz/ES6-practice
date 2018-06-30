const defaultColor = ['red','green'];
const userFavouriteColor = ['orange','yellow'];
const fallColor = ['fire red','fall orange'];

console.log(['green','blue',...defaultColor,...userFavouriteColor,...fallColor]);

/*output [ 'green',
  'blue',
  'red',
  'green',
  'orange',
  'yellow',
  'fire red',
  'fall orange' ]

  */