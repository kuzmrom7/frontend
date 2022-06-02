// Solution
function allAnagrams(arr) {
  const sorted = arr.map(str => str.toUpperCase().split('').sort().join());

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false;
    }
  }

  return true;
}

// Test
console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdac', 'ABDc'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
