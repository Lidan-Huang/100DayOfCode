"use strict";

/**accepts: an array
 * rotate the array to the right by k step, and rotate the array in-place
 * constraints: space complexity O(1)
 * 
 * test case:
 * nums = [1,2,3,4,5,6,7], k = 3 => [5,6,7,1,2,3,4]
 * 
 * pseudocode:
 * k module by length of nums, in case k is bigger than length
 * 
 * reverse the nums
 * reverse the first  k elements, and reverse the latter part, from index k to 
 * length - 1
 */

function rotateArray(nums, k) {
  k = k % nums.length;

  // reverse original array
  let left = 0;
  let right = nums.length - 1;
  reverseArray(nums, left, right);

  // reverse the first k elements
  left = 0;
  right = k - 1;
  reverseArray(nums, left, right);

  // reverse the left elements start from index k to end
  left = k
  right = nums.length - 1
  reverseArray(nums, left, right)
}

function reverseArray(nums, left, right) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}