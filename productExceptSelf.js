"use strict";

/**Accepts: an array of integers, nums
 * returns: an array of answer that stores the product of all elements except itself
 * 
 * test case:
 * [1, 2, 3, 4] => [24, 12, 8, 6]
 * [1, 0, 3] => [0, 3, 0]
 * 
 * pseudo code:
 * initial value of each element in the answer array to 0
 * first initial value of answer is equal one, as there's no left element of the first one
 * loop through the nums array, from index 1 to end (left side of product)
 *  each current position element value of answer is answer[i - 1] by nums[i - 1]
 * make most right value to 1
 * loop through the nums array from end to start (right side of product)
 *  each current position element value of answer is answer[i] by nums[i]
 *  update right product: right = right * nums[i]
 * return answer
 */

function productExceptSelf(nums) {
  const answer = Array.from({ length: nums.length }).fill(0);
  //there's no element before nums[0], so assign answer[0] to 1
  answer[0] = 1;

  //store the product of left elements before current num to the 
  //corresponding index of answer
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  //there's no element after the last element of nums, so assign right to 1
  let right = 1;

  //variable right stores the product of right elements of current num
  //the value of current index in answer is left side product by right side of product
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }

  return answer;
}