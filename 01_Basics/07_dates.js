let myDate = new Date();

// console.log(myDate.toString());
//console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date (2024, 6, 3, )
// let myCreatedDate = new Date (2024, 6, 3, 6, 7)
let myCreatedDate = new Date ("2024-7-17")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());
// console.log(`${newDate.getDate()} July - ${newDate.getFullYear()} - Friday`);

console.log(newDate.toLocaleString('default'.charAt, {
    weekday: "long",
    dayPeriod: "long", 
    hour: "2-digit",
    minute:"2-digit",
}));