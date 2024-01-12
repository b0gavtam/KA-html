function min(arr, toReturn) {
    if (toReturn == 'value') {
        let minValue = Math.min(...arr);
        return minValue;
    } 
    else {
        let minIndex = arr.indexOf(Math.min(...arr));
        return minIndex;
    }
}