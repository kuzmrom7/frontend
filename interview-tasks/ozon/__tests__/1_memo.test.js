const memo = require('../1_memo')

describe('Test memo function', () => {
  it('Test with normal work', async () => {
    let count = 0
    const getData = () => Promise.resolve(++count)
    // timer = 1000ms
    const getJsonMemoize = memo(getData, 1000)
    const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n))

    expect.assertions(4)

    await expect(getJsonMemoize()).resolves.toBe(1)
    await expect(getJsonMemoize()).resolves.toBe(1)
    await expect(getJsonMemoize()).resolves.toBe(1)

    // wait for clear by time in memo func
    await sleep(1000)

    await expect(getJsonMemoize()).resolves.toBe(2)
  })
})
