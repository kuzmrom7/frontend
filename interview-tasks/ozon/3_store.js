// Cделать Store класс, когда меняем data, вызываем все функции, которые подписаны
// Сделал немного неправильно, но время было мало, поэтому сразу так внутри написал.
// Нужно немного по другому делать(Object.defineProperty (Store.prototype, ‘data’) а не внутри класса)

// Solution
// Todo: fix
class Store {
  // #subscribes = new Set();
  // #callSubscribes() {
  //     if (this.#subscribes.size > 0) {
  //         this.#subscribes.forEach(fn => {
  //             fn();
  //         })
  //     }
  // }
  // Object.defineProperty('data', {
  //     get: function() {
  //         this;
  //     }
  //     set: function(data) {
  //         this = data;
  //         this.#callSubscribes;
  //     }
  // });
  // subscribe(fn) {
  //     this.subscribes.set(fn, fn);
  // }
  // unsubscribe(fn) {
  //     this.subscribes.delete(fn);
  // }
}

// Test
const store = new Store()

// Пример использования

const firstSubscriber = (data) => console.log('first', data)
const secondSubscriber = (data) => console.log('second', data)

store.subscribe(firstSubscriber)
store.subscribe(secondSubscriber)

store.data = { newKey: 'newString' }

// CONSOLE
// first { newKey: 'newString' }
// second { newKey: 'newString' }

store.unsubscribe(firstSubscriber)

store.data = { lastKey: 'lastKey' }

// CONSOLE
// second { lastKey: 'lastKey' }
