"use strict";

/**accepts: an array of numbers, each number has a duplicate except one number
 * returns: single number that doesn't have the duplicate
 * 
 * requirements:
 *  - runtime: linear
 *  - space: constant
 * 
 * test code:
 * - [1, 2, 1, 2, 3] => 3
 * - [1] => 1
 */


// Bit manipulation: XOR
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}