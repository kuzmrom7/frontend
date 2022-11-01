// Solution
function add(first, second) {
  if (typeof first === "undefined") {
    return add;
  }

  if (typeof second === "undefined") {
    return function sum(third) {
      if (typeof third === "undefined") {
        return sum;
      }

      return first + third;
    };
  }

  return first + second;
}

// Test
console.log(add(20, 22)); // -> 42
console.log(add(20)(22)); // -> 42

console.log(add(20)()(22)); // -> 42
console.log(add(20)()()()(22)); // -> 42
console.log(add(20)()()()()()()()()()()()(22)); // -> 42
console.log(add()(20)(22)); // -> 42
console.log(add()()()()(20)(22)); // -> 42
console.log(add()(20)()(22)); // -> 42
console.log(add()()()()()(20)()()()(22)); // -> 42
