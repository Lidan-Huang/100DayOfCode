"use strict";

/**
 * Given an integer array nums
 * return all the triplets [nums[i], nums[j], nums[k]] such that 
 *    i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * constraints:
 *   3 <= nums.length <= 3000
 *   -105 <= nums[i] <= 105
 * 
 * test cases:
 *   nums = [-1,0,1,2,-1,-4] =>[[-1,-1,2],[-1,0,1]]
 *   nums = [0,1,1] => []
 *   nums = [0,0,0] => [[0,0,0]]
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
}