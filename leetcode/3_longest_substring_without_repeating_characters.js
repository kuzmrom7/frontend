// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
  let maxLength = 0

  for (let i = 0; i < str.length; i++) {
    const currentSet = new Set()

    for (let j = i; j < str.length; j++) {
      let currentJ = str[j]

      if (currentSet.has(currentJ)) {
        break
      } else {
        currentSet.add(currentJ)
      }
    }

    maxLength = Math.max(maxLength, currentSet.size)
  }

  return maxLength
}

// Test
console.log(lengthOfLongestSubstring('abcabcbb')) // => 3
console.log(lengthOfLongestSubstring('bbbbb')) // => 1
console.log(lengthOfLongestSubstring('pwwkew')) // =>3
