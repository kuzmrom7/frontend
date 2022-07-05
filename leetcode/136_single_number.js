/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let mask = 0;
  nums.forEach(num => mask ^= num);

  return mask
};


// console.log(singleNumber([2, 2, 1])) // => 1
console.log(singleNumber([4, 1, 2, 1, 2])) // => 4
