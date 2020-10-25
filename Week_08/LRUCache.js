/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.keys = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    this.keys.push(key)
    this.keys.splice(this.keys.indexOf(key), 1)
    return this.cache.get(key)
  }

  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.keys.push(key)
  if (this.cache.has(key)) {
    this.keys.splice(this.keys.indexOf(key), 1)
  }

  this.cache.set(key, value)
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.keys.shift())
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
