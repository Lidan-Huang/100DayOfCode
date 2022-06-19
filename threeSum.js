"use strict";

/**accepts: an array of integers
 * returns: all the triplets that sum to 0
 * the result couldn't contain duplicate triplets
 * 
 * test cases:
 * nums = [-1, 0, 1, 2, -1, -4] => [[-1, -1, 2], [-1, 0, 1]]
 * nums = [] => []
 * nums = [0] => []
 * 
 * pseudocode:
 * sort the array nums
 * make a variable result to hold all the triplets
 * loop through the sorted nums from the begining i = 0
 *    if i > 0, and nums[i] equal nums[i - 1], continue the loop
 *    else:
 *        two pointers: left = i+1; right = nums.length - 1
 *        while left < right:
 *        current sum = nums[i] + nums[left] + nums[right]
 *        if current sum less than 0; left++
 *        if current sum great than 0; right--
 *        if equal, push [nums[i], nums[left], nums[right]] to result
 *        then left++, right --
 *        make sure left less than right, check if nums[left] equal nums[left-1]
 *          if equal, keep updating left pointer
 * return result
 */

//runtime: O(nlogn) + O(n^2) | space: O(n)

function threeSum(nums) {
  nums.sort();
  let result = [];

  for (let i= 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left++;
      if (sum > 0) right--;
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        
        while (left < right) {
          if (nums[left] === nums[left - 1]) left++;
        }
      }
    }
  }
  return result;
}