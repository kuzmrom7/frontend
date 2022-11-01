const set1 = new Map()

const findAll = (n, k) => {
  let min = Number([1, ...new Array(k - 1).fill(0)].join(''))
  let max = Number([9, ...new Array(k - 1).fill(9)].join(''))

  const res = []

  const youAreHappy = (v) => {
    let r = true
    let vvv = v.toString().split('')
    for (let i = 0; i < vvv.length; i++) {
      if (vvv[i] > vvv[i + 1]) {
        return false
      }
    }

    return r
  }
  const yourSum = (v) => {
    if (set1.has(v)) {
      return set1.get(v) === n
    }
    let s = 0

    let vvv = v.toString().split('')
    for (let i = 0; i < vvv.length; i++) {
      s += Number(vvv[i])
    }
    set1.set(v, s)

    return s === n
  }

  for (let i = min; i <= max; i++) {
    let happy = youAreHappy(i)
    if (!happy) continue

    let sum = yourSum(i)
    if (!sum) continue

    res.push(i)
  }

  if (res.length === 0) {
    return [0]
  }
  return [res.length, Math.min(...res), Math.max(...res)]
}

console.log(
  findAll(10, 3), // [8, 118, 334]
  findAll(27, 3), // [1, 999, 999]
  findAll(28, 3) // [0]
)
