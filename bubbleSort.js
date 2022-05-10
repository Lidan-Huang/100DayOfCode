"use strict";

/**accepts an array of integers
 * return: sorted array
 * using Bubble sort
 * 
 * test case:
 * [8, 5, 2, 9, 5, 6, 3] => [2, 3, 5, 5, 6, 8, 9]
 * 
 * 
 * pseudo code:
 * loop through the array, from i from 0 to array.length - 1;
 *    loop through the array, from j = 1 (i + 1), to the end
 *     compare array [i] with array [j], 
 *      if array[i] bigger than array[j], change each other
 *        to make sure the array[i] is the smallest
 * return sorted array
 */

//runtime: O(n^2) | space: O(1)

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length- 1 - i; j++) {
      if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
    }
  }

  return array;
}

function bubbleSort2(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
    }
  }

  return array;
}

