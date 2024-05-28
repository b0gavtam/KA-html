function middleMe(N, X, Y){
    if (N%2 == 0 && N != 0) {
        let s = Y.repeat(N/2) + X + Y.repeat(N/2);
        return s;
    } else {
        return X;
    }
 }