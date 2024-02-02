function meanVsMedian(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        let mean = Math.floor(sum / numbers.length);
        numbers.sort();
        let median = Math.floor(numbers.length/2);
        console.log(mean);
        console.log(median);

        if (mean > median) {
            return "mean";
        }
        if (median > mean) {
            return "median";
        }
        else{
            return "same";
        }
}
let n = [1,2,1,3,4,7,7];
console.log(meanVsMedian(n));