// singleton 
// Object.create()

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Fahad",
    "full name": "Fahad Ali", // define with [] square brakets
    [mySym]: "mykey1",
    age: 17,
    adress: "Lahore",
    email: "fahad@google.com",
    isLoggedIn: false ,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser.lastLogindays[1]);
// console.log(Jsuser[mySym]);

Jsuser.email = "qazi@gmail.com";
// Object.freeze(Jsuser)
Jsuser.email = "fahad@example.com" 
Jsuser.isLoggedIn = true
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user")
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user ${this["full name"]}`)
}
// console.log(Jsuser.greetingTwo());

