// Создать функцию мемоизации memoize с таймером, если время вышло очистить кэш и заново считать и также с таймером

// Solution
const memoize = (fn, ms) => {
  let storage = new Map()
  let result
  let start = new Date().getTime()

  const setResult = async () => {
    if (storage.has(fn)) {
      result = storage.get(fn)
      return
    }

    result = await fn()
    storage.set(fn, result)
  }

  const checkTimeOver = () => {
    let timeExp = new Date().getTime() - start > ms
    return timeExp
  }

  const resetAll = async () => {
    storage.clear()

    result = await fn()
    storage.set(fn, result)

    start = new Date().getTime()
  }

  return async function () {
    const isTimeOver = checkTimeOver()

    if (isTimeOver) {
      await resetAll()
    } else {
      await setResult()
    }

    return result
  }
}

// Test ./__tests__/1_memo.test.js

module.exports = memoize
