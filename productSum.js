"use strict";

/**accepts: a "special" array, contains either integers or other "special" arrays
 * returns: its product sum
 * 
 * the product sum of a "special" array is the sum of its elements, where "special" arrays
 * inside it are summed themselves and then multiplied by their level of depth
 * 
 * test case:
 * [2, 3] => 5
 * [2, [3, 4]] => 2 + 2*(3 + 4) = 16
 * [2, [3, [4]]] => 2 + 2*(3 + 3 * 4)
 * 
 * pseudo case:
 * base case:
 * 
 * 
 */

function productSum(array, n=1) {
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum += productSum(item, n + 1);
    } else {
      sum += item;
    }
  }
  return sum * n;
}