let user = {};
const js = {firstname: "John", lastname: "Smith"};
console.log(`${js.firstname}${js.lastname}`);
js.firstname = 'Paul';
console.log(`${js.firstname}${js.lastname}`);
delete js.firstname;
console.log(js);

const p = js;
function isEmpty(p) {
    if (p == "{}") {
        true;
    }
    else{
        false;
    }
}
console.log(isEmpty(p));

let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
}
let osszeg = 0;
for(let property in fizetes){
    osszeg += fizetes[property];
}
console.log(fizetes);
console.log(osszeg);