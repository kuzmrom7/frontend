//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }

    seen.set(num, i);
  }

  return [];
}


/**
 * Test
 */

// console.log(twoSum([2, 7, 11, 15], 9)); // -> [0, 1]
