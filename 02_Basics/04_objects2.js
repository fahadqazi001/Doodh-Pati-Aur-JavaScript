// const tinderUser = Object ()
const tinderUser = {} 

tinderUser.id = "123abc";
tinderUser.name = "Fahad";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "Example@google.com",
    fullname:{
        userfullname:{
            firstname:"Fahad",
            lastname:"Ali"
        }
        }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        name:"Fahad",
        email:"A@gmail.com",
    },
    {
        name:"Fahad",
        email:"L@gmail.com",
    },
    {
        name:"Fahad",
        email:"I@gmail.com",
    },
        
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.fromEntries(tinderUser));

// console.log(tinderUser.assign());


//----------- De Structure ------------- 

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructur: "Fahad",
}
// console.log(course.price);
const {price: passa} = course
console.log(passa);

// ------------ JSON --------------

// {
//     "name": "Fahad",
//     "price": "fre
//     "couerse": "JS in hindi","
// }


// [
//      "name": "Fahad",
//      "price": "free"
//      "course": "JS in hindi",

// ]