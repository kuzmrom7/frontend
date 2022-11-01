// base
console.log(sum(30, 1)); // -> 31

function sum(a, b) {
  return a + b;
}

console.log(i); // -> undefined
var i = 42;
console.log(i); // -> 42

var j;
console.log(j); // -> undefined
j = 3;
console.log(j); // -> 3

// const
// console.log(c) // -> error
const c = 42;
console.log(c); // -> 42

// let
// console.log(l) // -> error
const l = 42;
console.log(l); // -> 42

// function expression & function declaration
console.log(square(2)); // -> 4
function square(num) {
  return num ** 2;
}

// console.log(squareExp(2)) // -> error
const squareExp = function (num) {
  return num ** 2;
};
