// const  coding = ["js", "py", "java", "cpp", "rb"]

// const values = coding.forEach( (item) => {
//     // console.log(item);

// } )

// console.log(values);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (num) => {
   return num > 4
} )   

console.log(newNum);

// const newNum = []
// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const books = [
    {
        type: 'Paperback',
        name: 'To Kill a Mockingbird',
        publishDate: '1960',
        genre: 'Fiction'
    },
    {
        type: 'Hardcover',
        name: '1984',
        publishDate: '1949',
        genre: 'Fantacy'
    },
    {
        type: 'E-book',
        name: 'Pride and Prejudice',
        publishDate: '1913',
        genre: 'Adventure'
    },
    {
        type: 'Paperback',
        name: 'The Great Gatsby',
        publishDate: '1925',
        genre: 'Fiction'
    },
    {
        type: 'Hardcover',
        name: 'Moby Dick',
        publishDate: '1951',
        genre: 'Adventure'
    },
    {
        type: 'E-book',
        name: 'The Catcher in the Rye',
        publishDate: '1951',
        genre: 'Fiction'
    },
    {
        type: 'Paperback',
        name: 'Brave New World',
        publishDate: '1932',
        genre: 'Science Fiction'
    },
    {
        type: 'Hardcover',
        name: 'The Hobbit',
        publishDate: '1937',
        genre: 'Fantasy'
    }
];

let userBook = books.filter( (bk) => bk.genre === 'Fantasy' )

userBook = books.filter((bk)=> {
    return bk.publishDate >= 1940 && bk.genre === 'Adventure'
})
console.log(userBook);
