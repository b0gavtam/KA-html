// All or Nothing
function possiblyPerfect(key,answers) {
    // kód helye
    let t = 0;
    let f = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] == answers[i]) {
            i++;
        }
        else if (t[i] != answers[i] && answers[i] != "_") {
            f++;
        }

        if(answers[i] == "_"){
            if (answers[i] == "_" && answers[i+1] != key[i+1]) {
                f++;
            }
            else{
                t++;
            }
        }    
    }
    if (t > 0 && f > 0) {
        return false;
    }
    if (t == key.length) {
        return true;
    }
    if(f == key.length){
        return true;
    }
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median

function meanVsMedian(numbers) {
    //kód helye
    let mean = 0;
    let median = 0;
    for (let i = 0; i < numbers.length; i++) {
        mean += numbers[i];
    
    }
    mean = Math.floor(mean / numbers.length);
    console.log(mean);
    //numbers.Sort();
    median = numbers[1];
    console.log(median);
    if (mean > median) {
        console.log("mean")
    }
    else if (median > mean) {
        console.log("median")
    }
    else{
        console.log("same")
    }

}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    // kód helye
    let temp = 0;
    for (let i = arr.length; i > arr.length/2; i--) {
        for (let j = 0; j < arr.length/2; j++) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
    }

}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);