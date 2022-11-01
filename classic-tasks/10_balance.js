// Solution
function isBalanced(str) {
  const opened = '[{('
  const closed = ')}]'
  const obj = {
    ']': '[',
    ')': '(',
    '}': '{',
  }
  const arr = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (opened.includes(char)) {
      arr.push(char)
    }
    if (closed.includes(char)) {
      let last = arr.pop()
      if (obj[char] !== last) {
        return false
      }
    }
  }

  return !arr.length
}

// Test
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
