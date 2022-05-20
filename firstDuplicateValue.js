"use strict";

/** accepts: an array of integers between 1 and n, inclusive, where n is the length of the array
 * return: first integer that appears more than once (the array is read from left to right)
 *          return -1, if no integer appears more than once
 * 
 * test case: 
 * [2, 1, 5, 2, 3, 3, 4] => 2
 * [1, 2, 3, 4] => - 1
 * 
 * pseudo code:
 * make a variable to store the frequency of the numbers: using Map
 * loop through the array, check if the number's frequency is already 1, 
 * return that number
 * if can not find one, return -1
 */

function firstDuplicateValue(array) {
  let freq = new Map();

  for (let num of array) {
    if (freq.has(num)) return num;
    freq.set(num, 1);
  }

  return -1;
}