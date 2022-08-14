"use strict";

/**accepts: an integer n
 * returns: the number of prime numbers that are strictly les than n
 * 
 * test cases:
 * n = 10 => 4
 * n = 0 => 0
 * n = 1 => 0
 */

//runtime: O(N^2) | space: O(1)
function countPrimes(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

