let user = {};
const js = {firstname: "John", lastname: "Smith"};
console.log(`${js.firstname}${js.lastname}`);
js.firstname = 'Paul';
console.log(`${js.firstname}${js.lastname}`);
delete js.firstname;
console.log(js);