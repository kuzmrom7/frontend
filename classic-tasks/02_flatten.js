// Solution
function flatten(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (Array.isArray(value)) {
      const flat = flatten(value);

      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}

// Test
console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
console.log(flatten([[1, [1]], [[2, 3]], [[[4]]]])); // -> [1, 1, 2, 3, 4]
