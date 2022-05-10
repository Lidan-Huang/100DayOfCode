"use strict";

/**accepts: a sorted array of integers and a target integer
 * return the index of the target integer in the array,
 * otherwise return -1, if the array doesn't contain the target integer
 * 
 * test case:
 * [1, 2, 3, 4, 5], 3 => 2
 * [1, 2, 3, 4, 5], 6 => -1
 * 
 * pseudo code:
 * set left point= 0;
 * set right point = array.length - 1
 * while left <= right;
 * middle item = array[(left+right)/2]
 *  compare middle item to target;
 *      if smaller, left=middle + 1;
 *      else right = middle -1
 *      until the loop is over
 * if found the item that is equal to target integer, return the index
 * otherwise, return -1
 */

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor(left + right);
    if (array[middle] === target) return middle;
    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

