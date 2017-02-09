# Computer Science Curriculum

Computer Science fundamentals are important because it's better to understand something based on [first, basic principles](https://www.youtube.com/watch?v=L-s_3b5fRd8&t=22m38s). Before you dive in, you should know a few things:

1. These are fascinating topics that I really hope you enjoy learning about. It's hard, but totally worth it!
2. Most of this will be useful in the job interview process.
3. You don't need a computer science degree to learn about computer science.

Finally, it's appropriate to take 10 minutes to explore the history of computer science and programming in general with the [Art of Writing Software](https://www.youtube.com/watch?v=QdVFvsCWXrA).


## Overall Standards

* Analyze an algorithm and identify the Big O
* Identify and diagram common data structures
* Implement common algorithms and describe more complex algorithms
* Implement, evaluate, and use some common data structures


## Unit 0: Fundamentals Part 1

#### Standards

* Identify and diagram common data structures

#### Objectives

* Define and describe the purpose of Heap, Stack, Threads, Bits, Bytes, and Garbage Collection
* Represent "static" objects, arrays, functions, and variables in diagrams
* Explain the difference between mutable values and immutable values
* Interpret unsigned binary integers
* Describe UTF-8 and ASCII, including the differences between the two

#### Lessons

* [Intro To Memory](Unit-0/01-intro-to-memory.md)
* [Memory Diagrams](Unit-0/02-memory-diagrams.md)
* [Memory Diagrams Exercises](Unit-0/03-memory-diagrams-exercises.md)
* [Binary-ASCII-UTF8](Unit-0/04-binary-ascii-utf8.md)


## Unit 1: Fundamentals Part 2

#### Standards

* Analyze an algorithm and identify the Big O

#### Objectives

* Define "Abstract Data Type" (ADT) and algorithm
* Discuss what Time Complexity and Space Complexity refer to and how they differ
* Describe Big O Notation and identify the complexity of any given function
* Describe what a pointer is
* Describe and implement recursive functions

#### Lessons

* [Intro to Algorithms](Unit-1/01-intro-to-algorithms.md)
* [Big O Notation](Unit-1/02-big-o-notation.md)
* [Pointers](Unit-1/03-pointers.md)
* [Recursion](Unit-1/04-recursion.md)


## Unit 2: Data Structures + Algorithms Part 1

#### Standards

* Implement common algorithms and describe more complex algorithms
* Implement, evaluate, and use some common data structures

#### Objectives

* Describe and implement Singly & Doubly Linked Lists
* Describe and implement Stacks & Queues
* Describe the concepts of LIFO & FIFO and give real-life analogies
* Describe the differences between:
  * Bubble Sort _( also should be able to implement )_
  * Selection Sort
  * Insertion Sort
  * Linear Search
  * Binary Search _( also should be able to implement )_
* Describe the purpose of trees in programming and define:
  * Binary Trees
  * Binary Search Trees
  * Depth First Search _( also should be able to implement )_
  * Breadth First Search
  * Pre-order, In-order, and Post-order Traversal

#### Lessons

* [Intro to Data Structures](Unit-2/01-intro-to-data-structures.md)
* [Linked Lists](Unit-2/02-linked-lists-intro.md)
* [Stacks and Queues](Unit-2/03-stacks-and-queues.md)
* [Sorting Algorithms - Part 1](Unit-2/04-sorting-intro.md)
* [Searching Algorithms](Unit-2/05-searching-algorithms.md)
* [Trees](Unit-2/06-trees.md)

#### Additional Resources

* [Data structures in JavaScript](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/)


## Unit 3: Data Structures +  Algorithms Part 2

#### Standards

* Implement common algorithms and describe more complex algorithms
* Implement, evaluate, and use some common data structures

#### Objectives

* Implement and describe the difference between Merge Sort and Quick Sort
* Describe why hash tables are used instead of infinity arrays
* Define Tries
* Define and describe the relationships depicted in a Graph

#### Lessons

* [Sorting Algorithms - Part 2](Unit-3/01-sorting-revisited.md)
* [Hash Tables](Unit-3/02-hash-tables.md)
* [Tries](Unit-3/03-trie.md)
* [Graphs](Unit-3/04-graphs.md)

#### Additional Resources

* [Data structures in JavaScript](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/)


## Running The Exercises

The exercises in this curriculum can be run individually, or as a large group. To get an idea of where you are in the overall curriculum, run them all by `cd`ing into the `Exercises/` directory and running `mocha`. **Note:** you might have to make sure your `node --version` is `6.0.0` or later.

```
cd Exercises
node --version
npm install
mocha
```

To run individual groups of exercises, you can type the name of the script after `mocha`.

```
mocha test/linked-list
```
That command will run all the tests in the linked-list folder.

## Bonus: When to use what data structure

#### Flow Chart

![](http://i.stack.imgur.com/HNMy4.png)
