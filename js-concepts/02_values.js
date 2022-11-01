// primitive values
let a = 42
let b = a
b++
console.log({ a, b }) // ->  a = 42 b = 43

// links values
let arrA = [1, 2, 3]
let arrB = arrA
arrB.push(4)

let arrC = [1, 2, 3, 4]

console.log({ arrA, arrB }) // -> arrA = [1, 2, 3, 4] arrB = [1, 2, 3, 4]

console.log(arrA === arrB) // -> true
console.log(arrA === arrC) // -> false
