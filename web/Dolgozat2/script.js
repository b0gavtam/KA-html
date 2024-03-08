// 1. feladat Leonardo numbers - Leonardo számok
function Leo(n,L0,L1,a) {
    let t =[L0, L1];
    
    for (let i = 2; i < n; i++) {
        t.push(t[i - 1] + t[i - 2] + a);
    
    }
    return t;
}
console.log(Leo(5,1,1,1))
console.log(Leo(5,0,0,2))
console.log(Leo(10,0,1,4))
console.log(Leo(5,0,0,0))
// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start) {
    let t = []
    if (interval == null) {
        if (start == null) {
            for (let i = 0; i < arr.length; i++) {
                t.push(arr[i]);
                
            }
            return t;
        }
        else{ 
            for (let i = start; i < arr.length; i++) {
                t.push(arr[i]);
                
            }
            return t;
        }
    }
    else{
        for (let i = start; i < arr.length; i+= interval) {
            t.push(arr[i]);
            
        }
        return t;
    }
}
console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);

// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    let db =[];
    for(let sz of nums){ 
        db[sz] = (db[sz]||0)+1
    }
    let e = [];
    for(let sz of nums){ 
        if(db[sz]%2 ==0)
        e.push(sz);
    }
    return e;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);