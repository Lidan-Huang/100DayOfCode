'use strict';

/**accepts: a sorted array of integers, nums
 * returns: the length of array without duplicates
 * constraints: space complexity O(1)
 * 
 * test case: 
 * [1, 1] -> 1 ([1])
 * [1, 1, 2, 3] -> 3([1, 2, 3])
 * 
 * pseudocode:
 * using two pointers:
 * left = 0; right = 1
 * if right number is not equal left number, both pointers add 1
 * else: right add 1 and continue compare right and left until they are different
 * then if right is less than the length of the array, give right value to 
 * left + 1, and left++ 
 * continue until right reach to the end
 * 
 * return left + 1 (as return the length)
 */

//runtime: O(N) | space: O(1)
function removeDuplicates(nums) {
  let left = 0;
  if (nums.length <= 1) return nums.length;

  let right = 1;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++;
      right++;
      continue;
    }

    while (nums[left] === nums[right]) {
      right++;
    }

    if (nums[right]) {
      nums[left + 1] = nums[right];
      left++;
    }
  }
  return left + 1;
}

