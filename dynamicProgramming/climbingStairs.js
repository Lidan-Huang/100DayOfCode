"use strict";

/**You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can 
 * you climb to the top?
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

function climbingStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
}