'use strict'

function HashTable(size, prime) {
  size = size || 59;
  prime = prime || 122611;
  this.arr = Array(size);
  this.prime = prime;
}

HashTable.prototype.__hashFunction = function(key) {

}

HashTable.prototype.set = function(key, value) {

};

HashTable.prototype.get = function(key) {

};

HashTable.prototype.exists = function(key) {

};

HashTable.prototype.remove = function(key) {

};

module.exports = HashTable;
