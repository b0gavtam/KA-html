function getAverage(marks){
    let sum = 0;
    for(let i = 0; i < marks.length; i++){
      sum+=marks[i];
    }
    let avg = Math.floor(sum / marks.length);
    return avg;
  }