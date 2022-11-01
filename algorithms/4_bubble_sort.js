// O(n*n)
function bubbleSort(arr) {
  let callCount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      callCount += 1;

      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return {
    arr,
    callCount,
  };
}

// Test
const candidate = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
console.log(bubbleSort(candidate)); // => [0,1,1,2,3.......]
