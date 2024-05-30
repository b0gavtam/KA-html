let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
function sliding (nums, k) {
    let result = [];
    
    for (let i = 0; i <= nums.length - k; i += 1) {
      let sample = nums.slice(i, i + k);
      result.push(Math.max(...sample));
    }
  
    return result;
}
console.log(sliding(nums,k));