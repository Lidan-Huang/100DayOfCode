"use strict";

/**
 * Given an integer array nums
 * return true if there exists a triple of indices (i, j, k) such that
 * i < j < k and nums[i] < nums[j] < nums[k]. 
 * If no such indices exists, return false.
 * 
 * constraints:
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * test cases:
 * [2,1,5,0,4,6] => true
 * [1,2,3,4,5] => true
 * [5,4,3,2,1] => false
 */

//runtime: O(n) | space: O(1)
function increasingTriplets(nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num < first) {
      first = num;
    } else if (num < second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
}