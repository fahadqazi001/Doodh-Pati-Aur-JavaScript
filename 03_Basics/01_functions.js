function sayMyname(){
    console.log("F");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("D");
}
// sayMyname()

// function addTwonumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwonumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwonumbers(4, 5)

// console.log("Result", result)

function loggedinUsermessage(username = "Unknown") {
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just Logged in `
}
// console.log(loggedinUsermessage("Fahad"))


//---------------Part 2 ---------------------

function calculateCartprice(value1, ...num1) {
    return num1
}
// console.log(calculateCartprice(200, 400, 600, 800));


const user = {
    name: "Fahad",
    price: 295
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    name: "Ali",
    price: 123
})

const myNewarray = [100, 200, 300, 400]

function returnSecvalue(getArray) {
    return getArray[2]
}

// console.log(returnSecvalue(myNewarray))
console.log(returnSecvalue([200, 400, 600, 700]));