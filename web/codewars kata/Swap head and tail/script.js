function swapHeadAndTail(arr) {
    for (let index = 0; index < arr.length/2; index++) {
        const s = arr[index];
        s.push(arr[index])
    }
    for (let jndex = arr.length/2; jndex < array.length; jndex++) {
        const a = arr[jndex];
        a.push(arr[jndex])
        
    }
}





describe("Basic tests",() => {
    Test.assertSimilar(swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]);
    Test.assertSimilar(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
    Test.assertSimilar(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
  });