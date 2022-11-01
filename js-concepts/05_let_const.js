// let
let a = 'var A'
let b = 'var B'

{
  a = 'new var A'
  let b = 'local var B'
  console.log('Local A:', a)
  console.log('Local B:', b)
}

console.log('Global A:', a)
console.log('Global B:', b)

// const
const PORT = 8080
const arr = ['JS', 'Lang']
arr.push('!')
arr[0] = 'TS'

// arr = 1 // -> error

console.log(arr) // => ['TS', 'Lang', '!']
