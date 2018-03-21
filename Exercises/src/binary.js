'use strict'

/*

Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage:

binaryToDecimal("010") => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.

*/
module.exports = function( str ) {
  let result = 0;
  let digit = 1;
  for ( let i = str.length - 1; i >= 0; i-- ) {
    if ( str[i] === '1' ) result += digit;
    digit *= 2;
  }
  return result;
}
