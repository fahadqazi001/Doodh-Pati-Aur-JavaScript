const accountId = 12345;
let accountEmail =  "fahad@example.com";
var accountPassword = "fahad12345";
accountCity = "Lahore";

//accountId = 2352 // This is not allowed const not change

accountEmail = "ajagf@zja.com";
accountPassword = "zan1334";
accountCity = "Multan";
let accountState;

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/