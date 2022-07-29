"use strict";

/**accepts: a large integer, represented as an integer array digits, 
 *          where each digits[i] is the ith digit of the integer. 
 *          The digits are ordered from most significant to least significant 
 *          in left-to-right order. The large integer does not contain any 
 *          leading 0's.
 * returns: resulting array of digits of increment the large integer by one.
 * 
 * test case:
 * digits = [1,2,3] => [1,2,4]
 * digits = [4,3,2,1] => [4,3,2,2]
 * digits = [9] => [1,0]
 * 
 * pseudocode:
 * loop from the end of the array to start
 *  if current + 1 smaller than 10
 *    update the current to current + 1, end the loop
 *  else:
 *    update current value to 0
 *    if current index is 0, add 1 as the first element and end the loop
 *    else continue the loop
 *    
 * return the mutated array
 */


//runtime: O(n) | space complexity: O(n)(as worst condition we need to insert
// 1 in the beginning, so it needs to shift all the elements to the right)
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 < 10) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
}
