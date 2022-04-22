const randomRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const MAX_SIZE = 20

const Cache = function (maxSize) {
  this.store = {}
  this.lookup = new Array(maxSize)
  this.currentSize = 0
}

Cache.prototype.get = function (key) {
  if (this.store[key]) {
    return this.store[key]
  }
  return this.store[key]
}

// This could be optimised to switch between two different set functions based on current store size.
// Not worth doing for clarity reasons unless necessary.
Cache.prototype.set = function (key, value) {
  const { store, lookup, currentSize } = this
  if (!store[key]) {
    if (currentSize < lookup.length) {
      lookup[currentSize] = key
      cache.currentSize++
    } else {
      const removalIndex = randomRange(0, lookup.length)
      delete store[lookup[removalIndex]]
      lookup[removalIndex] = key
    }
  }
  store[key] = value
}

Cache.prototype.clear = function () {
  this.store = {}
  this.lookup = new Array(MAX_SIZE)
  this.currentSize = 0
}

const cache = new Cache(MAX_SIZE)
