function middleMe(N, X, Y){
    return N%2 ? X : Y.repeat(N/2)+X+Y.repeat(N/2);
 }