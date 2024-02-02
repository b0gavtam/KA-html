function product(arr) {
    let sz = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * arr[i+1] > sz) {
            sz = arr[i] * arr[i+1];
        }
    }
    return sz;
}
console.log(product([1,2,3]))