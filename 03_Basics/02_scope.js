// var c = 300
let a = 40

if (true) {
    let a = 10
    const b = 20

    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Fahad"

    function two() {
        const website = "Instagram"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "fahad_qazi001"
    if (username === "fahad_qazi001") {
        const website = " Instagram"
        // console.log(username + website);
    }
    
}

// --------------- Intresting -----------------

console.log(addone(7));
function addone(num) {
    return num + 1
}

const addTwo = function(num2) {
    return num2 + 2
}
addTwo(5)