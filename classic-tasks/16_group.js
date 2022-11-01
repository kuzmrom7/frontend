// Solution
function groupBy(arr, fn) {
  return arr.reduce((acc, curr) => {
    const key = typeof fn === "function" ? fn(curr) : curr[fn];
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);

    return acc;
  }, {});
}

// Test
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(["one", "two", "three"], "length")); // -> { '3': ['one', 'two'], '5': ['three'] }
