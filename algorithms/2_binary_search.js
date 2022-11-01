// log2(n)
function binarySearch(arr, value) {
  let middle = 0;
  let start = 0;
  let end = arr.length;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) {
      position = middle;
      found = true;
    }

    if (value > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return position;
}

function binarySearchRecursive(arr, value, start, end) {
  if (!start) start = 0;
  if (!end) end = arr.length;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === value) {
    return middle;
  }

  if (value < arr[middle]) {
    return binarySearchRecursive(arr, value, 0, middle - 1);
  } else {
    return binarySearchRecursive(arr, value, middle + 1, end);
  }
}

// Tests
const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(binarySearch(sorted, 5)); // => 5
console.log(binarySearch(sorted, 7)); // => 7
console.log(binarySearch(sorted, 9)); // => 9

console.log(binarySearchRecursive(sorted, 5)); // => 5
console.log(binarySearchRecursive(sorted, 7)); // => 7
console.log(binarySearchRecursive(sorted, 9)); // => 9
