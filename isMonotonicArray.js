"use strict";

/**accepts an array of integers
 * return true if the array is monotonic
 * otherwise return false
 * 
 * test case:
 * [] => true
 * [1, 1, 1] => true
 * [1, 2, 2, 3] => true
 * [3, 2, 2, 1] => true
 * [1, 2, 3, 2] => false
 * [1, 1, 2, 3] => true
 * 
 * pseudo code:
 * if empty array or just one item, return true, fast win
 * make an empty array to store the difference of the array
 * sort the array, if first and last are all <= 0 or >=0; return true, else return false
 */


//runtime: O(nlogn) | space: O(n-1) n is the items of the array
function isMonotonicArray(array) {
  const len = array.length;
  if (len === 0 || len === 1) return true;
  let diffs = [];
  for (let i = 0; i < len - 1; i++) {
    diffs.push((array[i + 1] - array[i]));
  }

  diffs.sort((a, b) => a - b);
  if ((diffs[0] <= 0 && diffs[len - 2] <= 0) ||
    (diffs[0] >= 0 && diffs[len - 2] >= 0)) {
      return true;
    }
  return false;
}