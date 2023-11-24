let user = {};
const js = {firstname: "John", lastname: "Smith"};
console.log(`${js.firstname}${js.lastname}`);
js.firstname = 'Paul';
console.log(`${js.firstname}${js.lastname}`);
delete js.firstname;
console.log(js);

function isEmpty(obj) {
    let obj = js;
    if (isEmpty(obj) == true) {
        true;
    }
    else{
        false;
    }
}
console.log(isEmpty(obj));

let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
}
let osszeg;
for(let i in fizetes){
    osszeg += fizetes[i];
}
console.log(fizetes);
console.log(osszeg);