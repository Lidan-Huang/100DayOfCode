"use strict";

/**
 * You are a professional robber planning to rob houses along a street. Each 
 * house has a certain amount of money stashed, the only constraint stopping 
 * you from robbing each of them is that adjacent houses have security systems 
 * connected and it will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 * 
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting 
 * the police.
 * 
 * test cases:
 * nums = [1,2,3,1] => 4 (1 + 3)
 * nums = [2,7,9,3,1] => 12 (2 + 9 + 1)
 */

//runtime: O(n) | space: O(n)
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let robs = Array.from({length: nums.length}).fill(0);
  robs[0] = nums[0];
  robs[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    robs[i] = Math.max(robs[i - 1], robs[i - 2] + nums[i]);
  }
  return robs[nums.length - 1];
}
