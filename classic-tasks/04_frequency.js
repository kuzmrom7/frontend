// Solution
function highestFrequency(arr) {
  const obj = {}
  let highest = 0
  let highestKey = arr[0]

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    if (obj[current]) {
      obj[current]++
    } else {
      obj[current] = 1
    }

    if (obj[current] > highest) {
      highest = obj[current]
      highestKey = current
    }
  }

  return highestKey
}

// Test
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
) // -> ghi
