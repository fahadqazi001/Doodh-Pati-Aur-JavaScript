// Primitives datatypes

// 7 : String , Symbol , nummber , null , boolean , BigInt , undefined

let score = 100
let scoreValue = 100.3

let isLoggedin = false 
let outsideTemp = null
let  userEmail ;

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId);

const BigInt = 121345654323245n

// Reference (Non Premitives Datatype) ;

// 3 : Array , Object , Function

const heros = ["Imran Khan" , "Babar Azam" , "Fahad" ];

let myObj = {
    name: "Fahad",
    age: 17,
} 

const myFunction = function(){
    console.log("Hello word");
}
console.log(typeof myObj);

// ------------ Heap and Stack Memory ---------------
// Stack (Primitives Datatypes)

let myInstagramname = "fahad_qazi001";
let anothername = myInstagramname ;
anothername = "fahadqazi_001";

console.log(myInstagramname);
console.log(anothername);

// Heap (Non-Primitives Datatypes)

let userOne = {
    email: "fahadali@example.com",
    password: "f@had407177"
}

userTwo = userOne 
//userTwo.email = "example@google.com";

console.log(userOne);
console.log(userTwo);