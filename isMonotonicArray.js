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
  if (len <= 2) return true;
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

//runtime: O(n) | space: O(1)
function isMonotonicArray2(array) {
  const len = array.length;
  if (len <= 2) return true;

  let diff = 0;
  
  for (let i = 0; i < len - 1; i++) {
    if ((array[i+1] - array[i]) > diff) {
      while (i < len - 1) {
        if ((array[i+1] - array[i]) < diff) return false;
        i++;
      }
    } else if ((array[i+1] - array[i]) < diff) {
      while (i < len - 1) {
        if ((array[i+1] - array[i]) > diff) return false;
        i++;
      }
    }
  }
  return true;
}

function isMonotonicArray3(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt; 
  if (direction > 0) return difference < 0;
  return difference > 0;
}