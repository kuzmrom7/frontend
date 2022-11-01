// Solution
class Queue {
  #storage = {}
  #last = 0
  #first = 0

  get size() {
    return this.#last - this.#first
  }

  print() {
    Object.keys(this.#storage).forEach((id) => {
      const element = this.#storage[id]
      console.log({ id, element })
    })
  }

  add(item) {
    this.#storage[this.#last] = item
    this.#last++
  }

  delete() {
    if (this.size === 0) {
      return null
    }

    const value = this.#storage[this.#first]

    delete this.#storage[this.#first]
    this.#first++

    return value
  }
}

// Test
const queue1 = new Queue()

queue1.add('hello')
queue1.add('world')
queue1.add([])
queue1.delete()

console.log(queue1.size)
queue1.print()
