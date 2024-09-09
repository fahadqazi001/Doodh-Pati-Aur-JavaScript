// For of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

const map = new Map()
map.set('PK' , "Pakistan")
map.set('IN' , "India")
map.set('Ne' , "Netherland")
map.set('PK' , "Pakistan")

// console.log(map);

for (const [keys, value] of map) {
    //  console.log(keys , ':-', value);
         
}

const myObject = {
    game1: "Cricket",
    game2: "Football"
}

for (const [keys, value] of myObject) {
    console.log(keys, ":-", value);
    
}