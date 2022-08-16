"use strict";

/**You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can 
 * you climb to the top?
 * 
 * Constraints: 1 <= n <= 45
 * 
 * test cases:
 * n = 1 => 1 (1 step)
 * n = 2 => 2 (1 step + 1 step; 2 steps)
 * n = 3 => 3 (1 step + 1 step + 1 step; 2 steps + 1 step; 1 step + 2 steps)
 * 
 * 
 * pseudocode:
 * n = 1, return 1
 * n = 2, return 2
 * n >= 3, return (n-1) + (n-2)
 */

//recursion solution: runtime: O(2^n) | space complexity: O(n)
function climbingStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
}


//dynamic programming solution: runtime: O(n) | space complexity: O(n)
function climbingStairs2(n) {
  //make an array to store the number of differents ways to climb to the n steps,
  //0 is for 0 step, 1 is for 1 step, 2 is for 2 steps
  let steps = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
}
