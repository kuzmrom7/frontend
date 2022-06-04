// O(log2(n) + n)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middle) {
      continue;
    }

    if (arr[i] < arr[middle]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[middle], ...quickSort(right)];

}

// Test
const candidate = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
console.log(quickSort(candidate));
