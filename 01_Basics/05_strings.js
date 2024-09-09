const name = "Fahad";
const repoCount = 56

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('fahad.tec')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(0));
// console.log(gameName.toUpperCase());

const newString = gameName.substring(3 ,8);
//console.log(newString);

const anotherString = gameName.slice(-7 , 3);
//console.log(anotherString);

const newStrind1 = "   Fahad   ";
console.log(newStrind1);
console.log(newStrind1.trim());

// const url = "http://youtube.com/hasi%20tv"
const url = "http://netflix.com"
console.log(url);

// console.log(url.replace('%20', '-'));

console.log(url.includes('Fahad'));

