// Реализовать очередь (класс Queue) с параметрами,
// очередь может работать в синхронном и параллельном режиме

// Solution
class Queue {
  #queue = []

  constructor(processTask, paralleledTasks, whenEmpty) {
    this.processTask = processTask
    this.paralleledTasks = paralleledTasks
    this.whenEmpty = whenEmpty
  }

  async #workerSync() {
    for (let [index, q] of this.#queue.entries()) {
      await new Promise((resolve) => {
        this.processTask(q, resolve)
      })

      delete this.#queue[index]
      if (index === this.#queue.length - 1) {
        this.whenEmpty()
      }
    }
  }

  async #workerParalleled() {
    let inProcess = []
    let complete = []
    let count = this.#queue.length

    while (this.#queue.length && count !== complete.length) {
      const curr = this.#queue.shift()

      const promise = new Promise((resolve) => {
        this.processTask(curr, resolve)
      })
      inProcess.push(promise)

      promise.then(() => {
        inProcess.shift()
        complete.push('done')

        if (complete.length === count) {
          this.whenEmpty()
        }
      })
    }
  }

  add(value) {
    this.#queue.push(value)
  }

  loop() {
    if (this.paralleledTasks > 1) {
      this.#workerParalleled()
    } else {
      this.#workerSync()
    }
  }
}

// Test
const processTask = (task, resolve) => {
  // время обработки задачи от 500 до 1000мс
  const workTime = 500 + Math.floor(Math.random() * 500)

  setTimeout(() => {
    console.log(task)
    resolve()
  }, workTime)
}
const whenEmpty = () => console.log('Queue is empty')

// Sync
const queueSync = new Queue(processTask, 1, whenEmpty)

queueSync.add('task 1')
queueSync.add('task 2')
queueSync.add('task 3')
queueSync.add('task 4')
queueSync.add('task 5')
queueSync.loop()

// Async
const queueAsync = new Queue(processTask, 2, whenEmpty)

queueAsync.add('task 1')
queueAsync.add('task 2')
queueAsync.add('task 3')
queueAsync.loop()

/* 
example output:
task 2
task 1
task 3
Queue is empty

* поскольку задачи обрабатываются
* разное количество времени, то при
* paralleledTasks > 1 вывод может быть
* не последовательным как тут: сначала
* успела выполниться task 2, а потом task 1
*/
