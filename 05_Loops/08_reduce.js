const myNum = [1, 2, 3, 4]

const myTotal = myNum.reduce( function (acc , currval) {
    console.log(`acc ${acc} and currval ${currval} `);
    
    return acc + currval
}, 0)

// const myTotal = myNum.reduce( (acc , curr) => (acc + curr), 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 7299
    },
    {
        itemName: "data science course",
        price: 2599
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
]

const PricetoPay = shoppingCart.reduce( (acc , item) => (acc + item.price), 0)

console.log(PricetoPay);
