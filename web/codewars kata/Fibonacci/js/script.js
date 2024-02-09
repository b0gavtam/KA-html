function Fibonacci(t) {
    let sz1 = 0;
    let sz2 = 1;
    let temp = 0;

    for (let i = 0; i < t.length; i++) {
        temp = sz1 + sz2;
        sz1 = sz2;
        sz2 = temp;
        
    }
    return temp;
}
console.log(Fibonacci(5))