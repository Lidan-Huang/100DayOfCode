"use strict";

/**Fibonacci sequence: 0, 1, 1, 2...((n-1)+(n-2))
 * accepts: an integer n, 
 * returns: nth Fibonacci number
 * F0 = 0; F1 = 1, getNthFib(1) = F0, getNthFib(2) = F1
 * 
 * test case:
 * 1 => 0(0)
 * 2 => 1(0, 1)
 * 3 => 1(0, 1, 1)
 * 4 => 2(0, 1, 1, 2)
 * 5 => 5(0, 1, 1, 2, 3)
 * 
 * pseudo code:
 * base case: n = 1, return 0;
 * base case: n = 2, return 1
 * if n > 2, return function(n-1) + function(n-2)
 * 
 */

function getNthFib(n) {
  if (n = 1) return 0;
  if (n = 2) return 1;
	return getNthFib(n - 1) + getNthFib(n - 2);
}