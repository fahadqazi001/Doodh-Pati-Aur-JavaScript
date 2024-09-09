const  coding = ["js", "py", "java", "cpp", "rb"]

coding.forEach( function (val) {
    // console.log(val);
    
} )

coding.forEach( (item) => {
    // console.log(item);
    
} )

function printMe(item , index, arr) {
    // console.log(item, index, arr);
    
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName: "Java Script",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (item) => {
        console.log(item.languageName);
        
} )