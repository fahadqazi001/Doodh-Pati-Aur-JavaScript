const myObject = {
    cpp: "C++",
    js: "Java Script",
    py: "Python",
    rb: "ruby"
}

for (const key in myObject) {
    //    console.log(key);
    //    console.log(myObject[key]);
    // console.log(`${key} is the shortcut of ${myObject[key]}`);

}

const programing = ["js", "py", "java", "cpp", "rb"]

for (const key in programing) {
    //   console.log(programing[key]);

}

const map = new Map();
map.set('PK', "Pakistan");
map.set('IN', "India");
map.set('Ne', "Netherland");
map.set('PK', "Pakistan"); // This will overwrite the previous 'PK' entry

for (const [key, value] of map.entries()) {
    console.log(map.get(key));
    console.log(
        `${key} is the shortcut of ${map.get(key)}`
    );
}