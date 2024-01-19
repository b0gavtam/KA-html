//tömb
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color] = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);
/*kérdések
1. bármilyet
2. igen
*/

//objektum
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };
let {BookTitle = book.title, BookAuthor = book.author, publicationYear, language} = book;
console.log(BookTitle);
console.log(BookAuthor);
console.log(publicationYear);
console.log(language);

/*
1. amíg be lehet helyettesíteni az objektum választott kulcsát a változóba addig bármilyet, egyébként az objektumban szereplő változót kell megadni
2. nem
*/

//függvény

function printStudentInfo({ name, grade, age, subjects }) {
    console.log(`${name} ${grade}, ${age} éves, ${subjects}`);
}

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

printStudentInfo(student)