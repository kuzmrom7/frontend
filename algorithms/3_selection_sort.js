// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = indexMin + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    let temp = arr[i];

    arr[i] = arr[indexMin];
    arr[indexMin] = temp;
  }

  return arr;
}

// Test
const candidate = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // => [0,1,1,2,3.......]
console.log(selectionSort(candidate));
