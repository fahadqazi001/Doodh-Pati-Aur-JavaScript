//------------- Array ----------------

// ------------ Part 2 ---------------

const marval_heros = ["Thor", "Iron Man", "Captain America"];
const dc_heros = ["Superman", "Shazam", "Flah"];

// marval_heros.push(dc_heros);

// console.log(marval_heros);
// console.log(marval_heros[3][1]);


const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const newHeros = [...marval_heros, ...dc_heros] //sprad oprator
// console.log(newHeros);

const anotherArray = [1, 2, 3, [4, 5], 6, [7, 6, [3, 4, 5]]]
const real_Another_array = anotherArray.flat(2);

console.log(real_Another_array);

console.log(Array.isArray("Fahad"));
console.log(Array.from("Fahad"));
console.log(Array.from({name: "Fahad"}));//intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));