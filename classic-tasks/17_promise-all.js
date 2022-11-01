const p1 = new Promise((resolve) => resolve(1))
const p2 = new Promise((resolve) => setTimeout(() => resolve(200), 3000))
const p3 = new Promise((resolve) => resolve([1, 2, 3]))

// first
function promiseAllRecursive(values) {
  //
  if (values.length === 0) {
    return Promise.resolve([])
  }

  const [first, ...rest] = values

  return Promise.resolve(first).then((result) => {
    return promiseAllRecursive(rest).then((restResult) => [
      result,
      ...restResult,
    ])
  })
}

// second
function promiseAllIterative(values) {
  return new Promise((resolve, reject) => {
    let results = []
    let completed = 0

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result
          completed += 1

          if (completed === values.length) {
            resolve(results)
          }
        })
        .catch((err) => reject(err))
    })
  })
}

// Promise.all([
//   p1,
//   p2,
//   p3,
// ]).then((arr) => {
//   console.log(arr);
// })

promiseAllIterative([p1, p2, p3]).then((arr) => {
  console.log(arr)
})
