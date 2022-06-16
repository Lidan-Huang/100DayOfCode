"use strict";

/**accepts: an non-empty array with numbers
 * returns: the number that only appears once, as other numbers all appear twice
 * 
 * test case:
 * [2,1,2] => 1
 * 
 * pseudocode:
 * make a frequency of the nums
 * loop through the map, if the value is 1, return that key
 */

//runtime: O(n) | space: O(n)
function singleNumber(nums) {
  let freq = new Map();

  for (let num of nums) {
    let count = freq.get(num) + 1 || 1;
    freq.set(num, count);
  }

  for (let key of freq.keys()) {
    if (freq.get(key) === 1) return key;
  }
}