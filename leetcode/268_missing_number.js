//https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  let n = nums.length;
  let sum = nums.reduce((acc, curr) => acc + curr, 0)

  return n * (n + 1) / 2 - sum;
};

// Test
// console.log(missingNumber([3, 0, 1])); // -> 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // -> 8
// console.log(missingNumber([0, 1])); // -> 2
