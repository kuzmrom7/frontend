// Solution
function removeDuplicates(str) {
  const result = []
  const obj = {}

  for (let i = 0; i < str.length; i++) {
    const current = str[i]

    if (!obj[current]) {
      obj[current] = true
      result.push(current)
    }
  }

  return result.join(',')
}

// Used Set
// function removeDuplicates(str) {
//   return Array.from(new Set(str)).join('');
// }

// Test
console.log(removeDuplicates('abcd')) // -> 'abcd'
console.log(removeDuplicates('aabbccdd')) // -> 'abcd'
console.log(removeDuplicates('abcddbca')) // -> 'abcd'
console.log(removeDuplicates('abababcdcdcd')) // -> 'abcd'
