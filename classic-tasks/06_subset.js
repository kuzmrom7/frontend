// Solution
function arraySubset(source, subset) {
  if (subset.length > source.length) {
    return false
  }

  for (let i = 0; i < subset.length; i++) {
    const current = subset[i]
    const index = source.indexOf(current)

    if (index === -1) {
      return false
    }

    delete source[index]
  }

  return true
}

// Test
console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
