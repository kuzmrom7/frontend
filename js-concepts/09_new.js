function Dog(color, name) {
  this.color = color
  this.name = name
}

// const dog1 = new Dog('white', 'Patrick')
// console.log(dog1.color) // ->


function myNew(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)

  return constructor.apply(obj, args) || obj
}

const dog1 = myNew(Dog, 'white', 'Patrick')
console.log(dog1) 
