// Cделать Store класс, когда меняем data, вызываем все функции, на которые подписаны

// Solution
class Store {
  #subscribes = new Map()

  constructor() {
    Object.defineProperty(this, 'data', {
      get: function () {
        return this._data
      },
      set: function (data) {
        this._data = data
        this.#callSubscribes()
      },
    })
  }

  #callSubscribes() {
    if (this.#subscribes.size === 0) return

    for (let fn of this.#subscribes.values()) {
      fn.call(this, this.data)
    }
  }

  subscribe(fn) {
    this.#subscribes.set(fn, fn)
  }

  unsubscribe(fn) {
    this.#subscribes.delete(fn)
  }
}

// Test
const store = new Store()

const firstSubscriber = (data) => console.log('first', data)
const secondSubscriber = (data) => console.log('second', data)

store.subscribe(firstSubscriber)
store.subscribe(secondSubscriber)

store.data = { newKey: 'newString' }

// CONSOLE expect
// first { newKey: 'newString' }
// second { newKey: 'newString' }

store.unsubscribe(firstSubscriber)

store.data = { lastKey: 'lastKey' }

// CONSOLE exptect
// second { lastKey: 'lastKey' }
