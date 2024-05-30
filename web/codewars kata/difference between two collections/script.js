let a = ["a","b","c"];
let b = ["a","a","b","f"];
let c = new Set();
let res = [];
let l = a.length;

function diff(a, b){
    if (b.length > a.length) {
        l = b.length;
    }
    for (let i = 0; i < l; i++) {
        if (!b.includes(a[i])) {
            c.add(a[i]);
        }
        if (!a.includes(b[i])) {
            c.add(b[i])
        }
    }
    c.delete(undefined);
    c.forEach(letter => res.push(letter));
    Array.from(res)
    res.sort();
    return res;
}
console.log(diff(a,b));