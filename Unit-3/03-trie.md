### Trie

A trie is an ordered tree data structure that is used to store strings. It can also be called a digital tree, radix tree, or prefix tree (as they can be searched by prefixes).

You can think of a trie as a tree-like structure for alphabetizing strings. In the example below, the root represents an empty string. As we head to the left, words beginning with a lowercase "t" are displayed. At this point our prefix is "t".

As we traverse further down the tree, each node's prefix tells us what kind of words will follow as children. Consider where you'd place the following words and what the paths the them would be: _Aruba, arguable, initialize, innards, isle, tail, tenant, top._

![](https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg)

For more information, the [Wikipedia article](https://en.wikipedia.org/wiki/Trie) is pretty good.

Tries are exceptionally powerful and used in dictionary lookups, such as one found on a mobile telephone or for autocompletion and spell-checking.

You should trie to implement one by running `trie.test.js`!

### Other types of trees

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike a binary tree, a node in the B-tree can have much more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems to make lookup of data faster.

## Resources

[http://visualgo.net/bst.html](http://visualgo.net/bst.html)
