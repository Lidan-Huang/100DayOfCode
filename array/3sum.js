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