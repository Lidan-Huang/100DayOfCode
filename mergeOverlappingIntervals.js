"use strict";

/**Merge any overlapping intervals
 * accepts: a non-empty array of arbitrary intervals
 * return new intervals in no particular order
 * 
 * each inteval is an array of two integers, the start of any particular interval will always be less than or equal to the end of interval
 * 
 * test case:
 * [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]] => [[1, 2], [3, 8], [9, 10]]
 * [[1, 10], [2, 3], [4, 5], [6, 9]] => [[1, 10]]
 * 
 * pseudo code:
 * sort the array according the first number of subarray
 * make an empty array "result" to hold the subarrays
 * check if the previous array's second number is smaller than the latter array's
 * first number, push previous array to result
 * else: 
 *  if previous array's second number is smaller than latter array's second number,
 *  change latter array's first number to previous array's first number
 *  else: set previous array's values to latter array's
 * push last element to the result
 * return result
 */

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][1] < array[i + 1][0]) {
      result.push(array[i]);
    } else {
      if (array[i][1] <= array[i + 1][1]) {
        array[i + 1][0] = array[i][0];
      } else {
        array[i + 1][0] = array[i][0];
        array[i + 1][1] = array[i][1];
      }
    }
  }
  result.push(array[array.length - 1]);
  return result;
}