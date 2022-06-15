"use strict";

/**accepts: an integer n (steps to reach the top)
 * returns: distinct wanys to reach to the top
 * each time you can either climb 1 or 2 steps
 * 
 * test cases:
 * n = 2 => 2 (1step + 1step)
 * n = 3 => 3 (1+1+1, 2+1, 1+2)
 * 
 * pseudocode:
 * go from number 0, two options: plus 1 or plus 2
 * compair the result to the given number, if result bigger then given number, count0
 * if equal, count 1,
 * if less, continue plus 1 and plus 2, and compair to the given number again
 * 
 */

//runtime: O(2^n) | space: O(n)
function climbStairs(n) {
  function climbStairs_helper(i, n) {
    if (i > n) return 0;
    if (i === n) return 1;
    return climbStairs_helper(i + 1, n) + climbStairs_helper(i + 2, n);
  }
  return climbStairs_helper(0, n);
}