function divisors(integer) {
    let div = 1;
    let divarray = [];
    while(div != integer){ 
        if (integer % div == 0 && div != 1) {
            divarray.push(div);
            div+=1;    
        }
        else{
            div+=1;
        }
    }
    /*for(let i = 2; i < integer; i++) {
        if(integer % i === 0) {
            divarray.push(i);
        }*/
    if (!divarray.length == 0) {
        return divarray;
    }
    else{
        return integer + " is a prime number";
    }
  };
  console.log(divisors(15));