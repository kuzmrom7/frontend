// Реализовать очередь (класс Queue) с параметрами, 
// очередь может работать в синхронном и параллельном режиме

// Solution
class Queue {
  #queue = [];

  constructor(processTask, paralleledTasks, whenEmpty) {
    this.processTask = processTask;
    this.paralleledTasks = paralleledTasks;
    this.whenEmpty = whenEmpty;
  }

  async #workerSync() {
    for (let q, i of this.#queue) {
      await new Promise((resolve) => {
        this.processTask(q, resolve);
      });
      await delete this.#queue[i];
      if (i === this.#queue.length - 1) {
        this.whenEmpty();
      }
    }
  }

  #workerParalleled() {
    let inProcess = 0;
    let i = 0;

    while (this.#queue.length > 0) {
      if (inProcess > this.paralleledTasks) continue;

      inProcess += 1;

      let q = this.#queue.length[i];

      new Promise((resolve) => { this.processTask(q, resolve); })
        .then(() => {
          delete this.#queue[i];
          inProcess -= 1;

          if (this.#queue.length == 0) {
            this.whenEmpty();
          }
        })

      if (i === this.#queue.length - 1) {
        i = 0;
      } else {
        i++
      }
    }
  }


  add(value) {
    this.#queue.push(value);
  }

  loop() {
    if (this.paralleledTasks > 1) {
      this.#workerParalleled();
    } else {
      this.#workerSync();
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
const paralleledTasks = 1
const whenEmpty = () => console.log('Queue is empty')

const queue = new Queue(processTask, paralleledTasks, whenEmpty)

queue.add('task 1')
queue.add('task 2')
queue.add('task 3')
queue.loop()


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
