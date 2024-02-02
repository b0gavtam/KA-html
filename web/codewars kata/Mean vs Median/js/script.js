
function meanVsMedian(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        let mean = sum / numbers.length;
        numbers.sort();
        let median = numbers[numbers.length/2];
}