/* Solution */
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    const value = str[i];

    if (str.lastIndexOf(value) !== i) {
      return false;
    }
  }

  return true;
}

// Used Set
// function isUnique(str) {
//   return new Set(str).size === str.length;
// }

/* Test */
console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false

