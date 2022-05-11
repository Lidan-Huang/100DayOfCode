"use strict";

/**accepts an array of integers
 * return a sorted array using selection sort algorithm
 * 
 * test case:
 * [3, 2, 5, 1, 4] => [1, 2, 3, 4, 5]
 * 
 * 
 * pseudocode:
 * loop through the array i from 0 to array.length - 1;
 *   loop through the subarray from i+1 to array.length,
 *   find the smallest num of the array and swap the smallest num with the array[i]
 * 
 * return sorted array
 */

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentSmallest = array[i];
    let smallestPos = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < currentSmallest) {
        currentSmallest = array[j];
        smallestPos = j;
      }
    }
    [array[i], array[smallestPos]] = [array[smallestPos], array[i]];
  }
  return array;
}