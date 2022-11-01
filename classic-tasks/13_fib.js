// Solution

// memo
const fibonacci = (function () {
  const sequence = [1, 1];

  return function (n) {
    if (sequence.length >= n) {
      return sequence.slice(0, n);
    }

    while (sequence.length < n) {
      const last = sequence[sequence.length - 1];
      const prev = sequence[sequence.length - 2];

      sequence.push(last + prev);
    }

    return sequence;
  };
})();

// slow
// function fibonacci(n) {
//   const sequence = [1, 1];

//   if (n < 2) {
//     return sequence.slice(0, n);
//   }

//   while (sequence.length < n) {
//     const last = sequence[sequence.length - 1];
//     const prev = sequence[sequence.length - 2];

//     sequence.push(last + prev);
//   }

//   return sequence;
// }

// Test
console.log(fibonacci(1)); // -> [1]
console.log(fibonacci(2)); // -> [1, 1]

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
