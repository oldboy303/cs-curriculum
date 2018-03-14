'use strict'

function Node(val, next=null) {

  this.val = val;
  this.next = next;

}

function SinglyLinkedList() {

  this.head = null;
  this.tail = null;
  this.length = 0;

}

SinglyLinkedList.prototype.__getNodeAt = function(index) {

  if (index < 0 || index >= this.length) return undefined;

  let currentNode = this.head;

  for(let i = 0; currentNode !== null && i < index; i++) {

    currentNode = currentNode.next;

  }

  if (!currentNode) return undefined;

  return currentNode;

};

SinglyLinkedList.prototype.push = function(val) {

  let node = new Node(val);

  if (!this.head) {

    this.head = node;

    this.tail = node;

  } else {

    this.tail.next = node;

    this.tail = node;

  }

  this.length++;

  return this;

};

SinglyLinkedList.prototype.clear = function() {

  this.head = null;
  this.tail = null;
  this.length = 0;

};

SinglyLinkedList.prototype.pop = function() {

  let val = null;

  if (!this.head) {

    return undefined;

  } else if (this.length === 1) {

    val = this.head.val;

    this.clear();

  } else {

    let newTail = this.__getNodeAt(this.length - 2);

    val = this.tail.val;

    newTail.next = null;

    this.length--;
  }
  
  return val;

};

SinglyLinkedList.prototype.unshift = function(val) {

  let node = new Node(val);

  if (!this.head) {

    this.head = node;

    this.tail = node;

  } else {

    node.next = this.head;

    this.head = node;

  }

  this.length++;

  return this;

};

SinglyLinkedList.prototype.shift = function() {

  let val = null;

  if (!this.head) {

    return undefined;

  } else if (this.length === 1) {

    val = this.head.val;

    this.clear();

  } else {

    val = this.head.val;

    this.head = this.head.next;

    this.length--;

  }

  return val;

};

SinglyLinkedList.prototype.get = function(index) {

  let node = this.__getNodeAt(index);

  if (!node) return undefined;

  return node.val;

};

SinglyLinkedList.prototype.set = function(index, val) {

  let node = this.__getNodeAt(index);

  if (!node) return undefined;

  node.val = val;

  return val;

};

SinglyLinkedList.prototype.remove = function(index) {

  if (!this.head) return undefined;

  if (index === 0) return this.shift();

  if (index === this.length - 1) return this.pop();

  let node = this.__getNodeAt(index - 1);

  let val = node.next.val;

  node.next = node.next.next;

  this.length--;

  return val;

};

SinglyLinkedList.prototype.reverse = function () {

  let next;
  let prev = null;
  let curr= this.head;
  this.tail = this.head;

  for(let i = 0; i < this.length; i++) {

    next = curr.next;

    curr.next = prev;

    prev = curr;

    curr = next;

  }

  this.head = prev;

  return this;

};

SinglyLinkedList.prototype.recursiveReverse = function (node = this.head, prev = null) {

  if (!node.next) {

    this.head = this.tail;

    this.tail = node;

    return;

  }

  let next = node.next;

  node.next = prev;
  
  this.recursiveReverse(next, node);

};

module.exports = SinglyLinkedList;
