// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0,
    k = 0
  let len1 = arr1.length
  let len2 = arr2.length

  let arr3 = new Array(arr1 + arr2).fill(0)

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      arr3[k++] = arr1[i++]
    } else {
      arr3[k++] = arr2[j++]
    }
  }

  while (i < len1) {
    arr3[k++] = arr1[i++]
  }

  while (j < len2) {
    arr3[k++] = arr2[j++]
  }

  if (arr3.length % 2 === 0) {
    let a = Math.ceil(arr3.length / 2 - 1)
    let b = a + 1

    return (arr3[a] + arr3[b]) / 2
  }

  return arr3[Math.ceil(arr3.length / 2) - 1]
}

// Tests
console.log(findMedianSortedArrays([0, 0], [0, 0])) // => 2.000
console.log(findMedianSortedArrays([1, 3], [2, 4])) // => 2.000
console.log(findMedianSortedArrays([1, 2], [3, 4])) // => merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
console.log(findMedianSortedArrays([1, 2, 5, 11], [2, 4, 6, 9])) // => merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
