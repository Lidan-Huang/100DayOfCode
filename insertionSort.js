"use strict";

/**accepts an array of integers
 * return sorted array using insertion sort algorithm
 * 
 * test case:
 * [8, 2, 5, 3] => [2, 3, 5, 8]
 * 
 * pseudocode:
 * loop with i from 1 to end,
 *   compare current value array[i] to the items from index 0 to i-1 
 *   find the correct position for the current value
 * return sorted array
 */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}
