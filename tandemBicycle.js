"use strict";

/**given two same length arrays, containing positive integers
 * one contains the speeds of ride wearing red shirts, and one that contains the
 * speed of riders wearing blue shirts. 
 * the same tandem bicycle's speed is determined by the faster rider's speed
 * if the third argument is fastest,return fastest speed number
 * if the third argument is not fastest, return slowest speed number
 * 
 * [1, 3], [2, 4] => fastest === true, return 7
 * [1, 3], [2, 4] => fastest === false, return 6
 * 
 * pseudo code:
 * if fastest is true:
 *    - sort one array ascending, sort the other array descending
 * if fastest is false:
 *    - sort two array ascending order
 * set a variable to store the sum: sum = 0
 * loop through two arrays and check two numbers in the same index, and
 * pick the big one
 *    - sum add bigger number
 * return sum
 */

//runtime: O(nlogn) | space: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest === true) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let sum = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return sum;
}