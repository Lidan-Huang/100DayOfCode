"use strict";

/**accept: an integer
 * return: true if it is a happy number, otherwise, return false
 * 
 * happy number is a number defined by the following process:
 *     Starting with any positive integer, replace the number by the sum of 
 *     the squares of its digits.Repeat the process until the number equals 
 *     1 (where it will stay), or it loops endlessly in a cycle which does not 
 *     include 1.
 *     Those numbers for which this process ends in 1 are happy. Return true 
 *     if n is a happy number, and false if not.
 * 
 * constraints:
 *   1 <= number <=2^31 -1  
 * 
 * test cases:
 *   n = 19 => true
 *   n = 2  => false
 * 
 * psudocode:
 *    make a set to check whether the number is repeated
 *    sum: add the square of each digit, if it is equal to 1, return true
 *    else:
 *      if the number is already in the set, return false
 *      else:
 *         add the number to the set
 *         update the number to current sum
 *         continue the loop
 */  

function isHappyNumber(n) {
  let unique = new Set();

  while (true) {
    const sum = sumOfEachDigitSquare(n);
    if (sum === 1) {
      return true;
    } else {
      if (unique.has(n)) return false;
      unique.add(n);
      n = sum;
    }
  }
}

/**given a number, and return the sum of each digit's square
 * like: 19 => 1*1 + 9*9 = 82
 */
function sumOfEachDigitSquare(n) {
  const nums = n.toString().split("");
  let sum = 0;

  for(let num of nums) {
    sum += (+num) * (+num);
  }
  return sum;
}
