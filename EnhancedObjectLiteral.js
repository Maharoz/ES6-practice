function createBookShop(inventory){
    return{
        inventory:inventory,
        inventoryValue:function(){
            return this.inventory.reduce((total,book)=>total + book.price,0);
            //finding the total price for the book in inventory array object
        },
        priceForTitle:function(title){
            return this.inventory.find(book=>book.title===title).price;
            //finding the price of the book which we given as parameter

        }
    };
}

const inventory = [

    {title:'Harry potter',price:10},
    {title:'eloquent javascript',price:15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());//output 25

console.log(bookShop.priceForTitle('Harry potter'));//output 10
