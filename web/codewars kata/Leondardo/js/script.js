let L0 = 1;
let L1 = 1;
let n = 5;
let a = 3;
function Leo(n,L0,L1,a) {
    let t =[L0, L1];
    
    for (let i = 2; i < n; i++) {
        t.push(t[i - 1] + t[i - 2] + a);
    
    }
    return t;
}