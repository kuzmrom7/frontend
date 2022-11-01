// immediate invoke function expression
let result = []

// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i);
//   })
// }

// result[4]() // -> 5
// result[1]() // -> 5

for (var i = 0; i < 5; i++) {
  ;(function () {
    var j = i
    result.push(function () {
      console.log(j)
    })
  })()
}

result[4]() // -> 4
result[1]() // -> 1
result[2]() // -> 2
