// Создать функцию мемоизации memoize с таймером, если время вышло очистить кэш и заново считать и также с таймером

// Solution
const memoize = (fn, ms) => {
  let memo = new Set();
  let result;
  let start = new Date().getTime();

  function calcValue() {
    if (memo.has(fn)) {
      result = memo.get(fn);
    } else {
      result = fn();
      memo.set(fn, result);
    }
  }

  function clear() {
    memo.clear();


    return function () {
      let timeExp = new Date().getTime() - start > ms;

      if (timeExp) {
        clear();

        result = fn();
        memo.set(fn, result);

        start = new Date().getTime();

        return result;
      }

      calcValue();

      return result;
    }
  }
}


// Test
let count = 0;

// Solution
const getData = () => Promise.resolve(++count)
const sleep = (n) => new Promise(resolve => setTimeout(resolve, n))

const getJsonMemoize = memoize(getData, 1000)

console.log(await getJsonMemoize()) // 1
console.log(await getJsonMemoize()) // 1
await sleep(3000)
console.log(await getJsonMemoize()) // 2
console.log(await getJsonMemoize()) // 2
