let arr = [1,2,3,4,5,6,7,8,9];
let mixArr = [5,7,6,9,4,8,1,2,3];
function findDeletedNumber(arr, mixArr) {
    // your code
    let same = true;
    for (let i = 0; i < arr.length; i++) {
        if (!mixArr.includes(arr[i])) {
            same = false;
            return arr[i];
        }  
    }
    if (same) {
        return 0;
    }
}
console.log(findDeletedNumber(arr,mixArr))