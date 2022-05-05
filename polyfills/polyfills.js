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

}
