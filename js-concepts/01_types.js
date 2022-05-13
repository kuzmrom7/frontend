// 7 types: null, undefined, boolean, number, string, object, symbol
console.log(typeof 0) // -> number
console.log(typeof true) // -> boolean
console.log(typeof 'Whatever') // -> string
console.log(typeof undefined) // -> undefined
console.log(typeof Math) // -> object
console.log(typeof Symbol('2')) // -> symbol
console.log(typeof function () { }) // -> function
console.log(typeof NaN) // -> number

console.log(typeof null) // -> object (bug js)

// types conversation
let lang = 'JS'
if (lang) {
  console.log('Our language is', lang)
}

// false values: '', 0, null, false, undefined
console.log(Boolean('')) // -> false
console.log(Boolean('Hi')) // -> true
console.log(Boolean(' ')) // -> true
console.log(Boolean(0)) // -> false
console.log(Boolean(null)) // -> false
console.log(Boolean(undefined)) // -> false

console.log(Boolean([])) // -> true !!
console.log(Boolean({})) // -> true !!
console.log(Boolean(function () { })) // -> true !!

// string and numbers
console.log('1' + 2) // -> 12(string)
console.log('' + 1 + 0) // -> 10(string)
console.log('' - 1 + 0) // -> -1(number)
console.log('8' * '3') // -> 24(number)
console.log(4 + 10 + 'px') // -> 14px(string)
console.log('px' + 4 + 10) // -> px410(string)
console.log('42px' - 2) // -> NaN
console.log(null + 2) // -> 2(number)
console.log(undefined + 2) // -> NaN

// == vs ===
console.log(2 == '2') // -> true
console.log(2 === '2') // -> false
console.log(undefined == null) // -> true
console.log(undefined === null) // -> false
console.log({} == {}) // -> false
console.log({} === {}) // -> false

// corner cases
console.log(false == '') // -> true
console.log(false == []) // -> true
