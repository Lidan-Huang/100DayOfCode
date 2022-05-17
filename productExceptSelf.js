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