function swapHeadAndTail(arr) {
    for (let index = 0; index < Math.floor(arr.length/2); index++) {
        const s = arr[index];
        
        arr[index] = arr[Math.floor(arr.length/2) + index + arr.length % 2];
        arr[Math.floor(arr.length/2) + index + arr.length % 2] = s;
    }
    return arr;
}
let tomb = [1,2,3,4,5,6,7];
swapHeadAndTail(tomb);
console.log(tomb);




