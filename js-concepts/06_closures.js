// base
function greeting(name) {
  const message = 'Hello ' + name + '!'

  return function () {
    console.log(message)
  }
}

const helloRoma = greeting('Roma')
const helloIgor = greeting('Igor')
console.log(helloRoma) // -> [Function]
helloRoma() // -> Hello Roma!
helloIgor() // -> Hello Igor!

// example - 1
function createFrameworkManager() {
  // like private variable
  const fws = ['react', 'vue', 'angular']

  return {
    show: () => {
      console.log(fws)
    },
    add: (value) => {
      fws.push(value)
    },
  }
}

const manager = createFrameworkManager()
manager.show()
manager.add('amber')
manager.show()

// example - 2 (setTimeout)
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
  const element = fib[i]
  ;(function (j) {
    setTimeout(() => {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
  })(i)
}
