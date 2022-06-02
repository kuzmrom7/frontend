//https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
};

// Test
// console.log(containsDuplicate([1, 2, 3, 1])); // -> true
// console.log(containsDuplicate([1, 2, 3, 4])); // -> false
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // -> true



