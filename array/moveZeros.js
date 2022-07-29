"use strict";

/**accepts: an integer array nums
 *    move all 0's to the end of it while maintaining the relative order of 
 *    the non-zero elements, mutate the array in-place
 * returns: the mutated array
 * 
 * test case:
 *  nums = [0,1,0,3,12] => [1,3,12,0,0]
 *  nums = [0] => [0]
 * 
 * pseudocode:
 * two pointers: left = 0, right = 1
 * make sure right less than the length of nums
 *    check two numbers
 *       if both are not 0, both index plus 1
 *       if left is zero, right not, change these two numbers, both index + 1
 *       if left not 0, right 0, both index + 1
 * return array
 */

function moveZeroes(nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] !== 0) {
      left++;
      right++;
    } else {
      while (nums[right] === 0 && right < nums.length) {
        right++;
      }

      if (nums[right]) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
    }
  }
  return nums;
}