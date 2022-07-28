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
    // only when left and right are next to each other, if the two numbers are 
    // different, both left and right move to the right for one step
    if (nums[left] !== nums[right]) {
      left++;
      right++;
      continue;
    }

    while (nums[left] === nums[right]) {
      right++;
    }

    // why right don't need to right++, as for the example [1, 1, 2, 3], if
    // right++, the result will be [1, 2, 2, 3]
    if (nums[right]) {
      nums[left + 1] = nums[right];
      left++;
    }
  }
  return left + 1;
}


//runtime: O(N) | space: O(1)
function removeDuplicates2(nums) {
  let left = 0;
  if (nums.length === 0) return 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }
  return left + 1;
}


//runtime: O(N^2) | space: O(1)
function removeDuplicates3(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            continue;
        }
    }
    return nums.length;
  };