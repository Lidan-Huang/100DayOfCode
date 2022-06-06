"use strict";

/**accepts: an integer array
 * returns: the largest sum of the subarray
 * 
 * test case: 
 * [1] => 1
 * [-2, 1, -3, 4, -1, 2, 1, -5, 4] => 6 [4, -1, 2, 1]
 * 
 */

function maxSubArray(nums) {
  if (nums.length === 0) return 0;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];
      maxSum = Math.max(current, maxSum);
    }
  }
  return maxSum;
};