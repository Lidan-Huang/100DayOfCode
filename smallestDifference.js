"use strict";

/**input: two non-empty arrays of integers
 * return: an array, contains a pair of numbers(one from each array) whose absolute
 *         difference is closest to zero
 * 
 * test case:
 * [1, 4, 3], [5, 7, 8] => 1
 * 
 * pseudo code:
 * make a variable to store the result: smallestPair = []
 * make a variable to store the smallest difference: smallest = Infinity
 * make two variables to keep track of the index of two arrays
 * sort two array in ascending order
 * loop through arrays when idx is smaller the array length
 *   if value in array one is smaller than value in array two, idxOne++
 *   if bigger, idxTwo++
 *   if equal, return this two values
 * compare current difference of two value to smallest
 * 
 * return smallestPair
 * 
 */

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallestPair = [];
  let smallest = Infinity;
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let numOne = arrayOne[idxOne];
    let numTwo = arrayTwo[idxTwo];
    let curr = Math.abs(numOne - numTwo)

    if (numOne < numTwo) {
      idxOne++;
    } else if (numOne > numTwo) {
      idxTwo++;
    } else {
      return [numOne, numTwo];
    }

    if (curr < smallest) {
      smallestPair = [numOne, numTwo];
      smallest = curr;
    }
  }

  return smallestPair;
}