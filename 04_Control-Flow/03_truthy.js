const userEmail = []

if (userEmail) {
    console.log("Got User Email ");
}else{
    console.log("Doesn't got User Email");
}

// falsey Values  

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values

// "0" , 'false' , " " , [], {}, function (){}

// if (userEmail.length === 0) {
//     console.log("Array  is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }

// Nulish Coalescing Oprator (??) : use for null & undefined

// let val1;

// val1 = 10 ?? 16
// val1 = null ?? 16
// val1 = undefined ?? 16
// val1 = undefined ?? null
// val1 = null ?? undefined
// val1 = undefined ?? 16 ?? 20

// console.log(val1);

// Ternary Oprator 

// condition ? true : false 

const isPrincipal = 100
isPrincipal <= 80 ? console.log("less than 80"): console.log("more than 80");