"use strict";

/**accepts: an array of integers
 * return: the length of the longest peak in the array
 * a peak: adjacent integers in the array that are strictly increasing 
 *         until they reach a tip(the highest value in the peak); at which point
 *         they become strictly decreasing, at least three integers are required to form a peak
 * 
 * test case: 
 * [1, 4, 10, 2] => 4
 * [4, 0, 10] => false, 0
 * [1, 2, 2, 0] => false, 0
 * [1, 2, 3] => false, 0  // there's no any strictly decreasing integers after 3
 * [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2,3] => 6
 * 
 * pseudo case: 
 * make a variable peakLen = 0;
 * make a variable idx to mark where to start count
 * loop through the array, if there's a count bigger than peakLen, peakLen = count
 * idx is restart from the end of this peak
 * return peakLen
 */


function longestPeak(array) {
  if(array.length <3) return false;
  let peakLen = 0;
  let count = 3;

  for (let i = 1; i < array.length - 1; i++) {
    let right = i + 1;
    let left = i - 1;
    if (array[i] > array[left] && array[i] > array[right]) {
      while (left >= 1) {
        if (array[left] > array[left - 1]) {
          count++;
          left--;
        } else {
          break;
        }
      }
      while (right <= array.length - 2) {
        if (array[right + 1] < array[right]) {
          count++;
          right++;
        } else {
          break;
        }
      }
      if (count > peakLen) {
        peakLen = count;
      }
      count = 3;
    } 
  }
  return peakLen;
}
