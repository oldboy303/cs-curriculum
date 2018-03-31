'use strict'

// http://visualgo.net/bst.html

function BinTree() {
  this.root = null;
}

function Node(value, left  = null, right = null) {
  this.value = value;
  this.left = left; 
  this.right = right;
}

// NOTE - Duplicates are excluded in our tree!

BinTree.prototype.insertIteratively = function(value) {
  if (!Number.isInteger(value)) return 'Please insert a number';
  
  let node = this.root;

  if (!node) {
    this.root = new Node(value);
    return this;
  }
  else {
    while (true) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return this;
        }
        else node = node.left;
      }
      else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return this;
        }
        else node = node.right;
      }
      else return 'duplicate!';
    }
  }
};

BinTree.prototype.insertRecursively = function(value, node = this.root) {
  if (!Number.isInteger(value)) return 'Please insert a number';
  if (node && node.value === value) return 'duplicate!';

  if (!node) {
    this.root = new Node(value);
    return this;
  }
  else {
    if(value < node.value){
      if(!node.left){
        node.left = new Node(value);
        return this;
      }
      else return this.insertRecursively(value, node.left);
      
    }
    else if(value > node.value){
      if(!node.right){
        node.right = new Node(value);
        return this;
      }
      else return this.insertRecursively(value, node.right);
    }
  }
};

BinTree.prototype.containsIteratively = function(value){
  let found = false;
  let node = this.root;

  while (node && !found) {
    if (value < node.value) node = node.left;
    else if (value > node.value) node = node.right;
    else found = true;
  }

  return found;
};

BinTree.prototype.containsRecursively = function(value, node = this.root){
  if (!node) return false;
  else {
    if (value < node.value) {
      if (!node.left) return false;
      else return this.containsRecursively(value, node.left);
    }
    else if (value > node.value) {
      if (!node.right) return false;
      else return this.containsRecursively(value, node.right);
    }
    else return true;
  }
};


BinTree.prototype.breadthFirstSearch = function() {
  let result = [],
      node = this.root,
      queue = [node];

  while (node = queue.shift()) {
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

// DEPTH FIRST SEARCH (Pre / In / Post Order)

// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html

// HINT - you can evaluate a JS expression conditionally by adding a truthy / falsey statement and // then attaching a && along with the expression

// take a look at this code for an example

// function sayHi(){
//   return "hey!"
// }

// what does true && sayHi() return?
// what about false && sayHi() return?

// visualizing the call stack using the chrome dev tools or just drawing it will help a lot with this!

BinTree.prototype.DFSPreOrder = function() {
  let result = [],
      node = this.root;

  function search(node) {
    if(!node) return;
    result.push(node.value);
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  }

  search(node);
  return result;
};

BinTree.prototype.DFSInOrder = function() {
  let result = [],
      node = this.root;

  function search(node) {
    if(!node) return;
    if (node.left) search(node.left);
    result.push(node.value);
    if (node.right) search(node.right);
  }

  search(node);
  return result;
};

BinTree.prototype.DFSPostOrder = function() {
  let result = [],
      node = this.root;

  function search(node) {
    if(!node) return;
    if (node.left) search(node.left);
    if (node.right) search(node.right);
    result.push(node.value);
  }

  search(node);
  return result;
};

BinTree.prototype.size = function() {
  let count = 0,
      node = this.root;

  function search(node) {
    if(node) count++;
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  }

  search(node);
  return count;
  // Or you could just return one of the search methods .length
};

BinTree.prototype.findLowest = function() {
  let node = this.root;
  while (node.left) {
    node = node.left;
  }
  return node.value || null;
};

BinTree.prototype.findHighest = function() {
  let node = this.root;
  while (node.right) {
    node = node.right;
  }
  return node.value || null;
};

// private helper method for remove
BinTree.prototype._countChildren = function(node){
  let count = 0;
  if (node.left) count++;
  if (node.right) count++;
  return count;
};


BinTree.prototype.remove = function(value){
  let node = this.root,
      found = false,
      parent,
      temp,
      childCount;
  
  while (!found && node) {
    if (value < node.value) {
      parent = node;
      node = node.left;
    }
    else if (value > node.value) {
      parent = node;
      node = node.right;
    }
    else found = true;
  }

  if (!found) return 'Value not in the tree!';

  childCount = this._countChildren(node);

  switch (childCount) {
    case 0: 
      if (parent && parent.value > node.value) parent.left = null;
      else if (parent && parent.value < node.value) parent.right = null;
      else this.root = null;
      break;

    case 1: 
      if (parent && parent.value > node.value) {
        parent.left = node.left || node.right;
      }
      else if (parent && parent.value < node.value) {
        parent.right = node.left || node.right;
      }
      else this.root = node.left || node.right;
      break;

    case 2: 
      temp = node.right;
      
      while (temp.left) {
        temp = temp.left; 
      }

      temp.left = node.left;

      if(parent && parent.value < node.value){
        parent.right = node.right
      }
      else if(parent && parent.value > node.value) {
        parent.left = node.right;
      }
      else {
        this.root = node.right;
      }
      break;
  }
};

module.exports = {
  BinTree: BinTree,
  Node: Node
};
