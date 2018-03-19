'use strict'

function Node( val, next = null, prev = null ) {

  this.val = val;

  this.next = next;

  this.prev = prev;

}

function DoublyLinkedList() {

  this.length = 0;

  this.head = null;

  this.tail = null;

}

DoublyLinkedList.prototype.__getNodeAt = function( index ) {

  if ( index >= this.length || index < 0 ) {

    return undefined;

  }

  let mid = this.length / 2;

  let reverse = index > mid ? true : false;

  let node = null;

  if ( reverse ) {

    node = this.tail;

    for ( let i = this.length - 1; i !== index; i-- ) {

      node = node.prev;

    }

  } else {

    node = this.head;

    for ( let i = 0; i !== index; i++ ) {

      node = node.next;

    }

  }

  return node;

};

DoublyLinkedList.prototype.push = function( val ) {

  let node = new Node( val );

  if ( this.length === 0 ) {

    this.head = this.tail = node;

  } else {

    node.prev = this.tail;

    this.tail.next = node;

    this.tail = node;

  }

  this.length++;

  return this;

};

DoublyLinkedList.prototype.clear = function() {

  this.length = 0;

  this.head = null;

  this.tail = null;

};

DoublyLinkedList.prototype.pop = function() {

  if ( this.length === 0 ) {

    return undefined;

  } else if ( this.length === 1 ) {

    let val = this.tail.val;

    this.clear();

    return val;

  } else {

    let val = this.tail.val;

    this.tail.prev.next = null;

    this.tail = this.tail.prev;

    this.length--;

    return val;

  }

};

DoublyLinkedList.prototype.unshift = function( val ) {

  let node = new Node( val );

  if ( this.length === 0 ) {

    this.head = this.tail = node;

  } else {

    this.head.prev = node;

    node.next = this.head;

    this.head = node;

  }

  this.length++;

  return this;

};

DoublyLinkedList.prototype.shift = function() {

  if ( this.length === 0 ) {

    return undefined;

  } else if ( this.length === 1 ) {

    let val = this.tail.val;

    this.clear();

    return val;

  } else {

    let val = this.head.val;

    this.head.next.prev = null;

    this.head = this.head.next;

    this.length--;

    return val;

  }

};

DoublyLinkedList.prototype.get = function( index ) {

  let node = this.__getNodeAt( index );

  if ( !node ) return undefined;

  return node.val;

};

DoublyLinkedList.prototype.set = function( index, val ) {

  let node = this.__getNodeAt( index );

  if ( !node ) return undefined;

  node.val = val;

  return val;

};

DoublyLinkedList.prototype.insert = function( index, val ) {

  if ( index < 0 || index > this.length ) return;

  if ( index === 0 ) {

    return this.unshift( val );

  } else if ( index === this.length ) {

    return this.push( val );

  } else {

    let node = this.__getNodeAt( index );

    let newNode = new Node( val );

    newNode.prev = node.prev;

    node.prev.next = newNode;

    node.prev = newNode;

    newNode.next = node;

    this.length++;

    return this;

  }

};

DoublyLinkedList.prototype.remove = function( index ) {

  if ( index < 0 || index > this.length ) return;

  if ( index === 0 ) {

    return this.shift( index );

  } else if ( index === this.length - 1 ) {

    return this.pop( index );

  } else {

    let node = this.__getNodeAt( index );

    node.prev.next = node.next;

    node.next.prev = node.prev;
    
    this.length--;

    return node.val;

  }

};

module.exports = DoublyLinkedList;
