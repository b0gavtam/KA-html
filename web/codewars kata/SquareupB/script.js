function squareUp(n) {
    let resultArray = [];
  
    for (let x = 1; x <= n; x++) {
      for (let i = n; i > 0; i--) {
        if (i <= x) {
          resultArray.push(i);
        } else {
          resultArray.push(0);
        }
      }
    }
  
    return resultArray;
}