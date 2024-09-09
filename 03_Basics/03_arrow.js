const user = {
    username: "Fahad",
    price: 999,

    welcomeMessage : function() {
        console.log(`Hello ${this.username} ,Welcome to Website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hussan";
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "hussan";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hussan";
//     console.log(this.username);
// }

// chai()

// const addTwo =  (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4, 5))

// const addTwonum = (num1, num2) => num1 + num2 

// const addTwonum = (num1, num2) => (num1 + num2) 

// console.log(addTwonum(2, 4));
 
const addobj = (obj1, obj2) => ({username: "Fahad"})

console.log(addobj());