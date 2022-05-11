module.exports = function () {
  // .map 
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb) {
      const result = []

      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myMap was called on wrong type.')
      }

      if (typeof cb !== 'function') {
        throw new TypeError(`Array.prototype.myMap ${cb} is not a function.`)
      }

      for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
      }

      return result;
    }
  }

  // .reduce
  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb, initial) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myReduce was called on wrong type.')
      }

      if (typeof cb !== 'function') {
        throw new TypeError(`Array.prototype.myReduce ${cb} is not a function.`)
      }

      let acc = arguments.length >= 2 ? initial : this[0]
      let start = arguments.length >= 2 ? 0 : 1

      for (let i = start; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
      }

      return acc;
    }
  }
}
