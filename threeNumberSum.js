"use strict";

/**input: 
 *  - an array: non-empty with distinct integers
 *  - an integer, representing a target sum
 * return: 
 *  - two-dimentional array of all triplets that sum up to the target sum
 *  - return [] if no triplets found
 *  - the numbers in the triplets: ascending order
 *  - the triplets themselves should be ordered in ascending order with respect to the numbers they hold
 *  
 * test case:
 * [12, 3, 1, 2, -6, 5, -8, 6], 0 => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 * [-8, -6, 1, 2, 3, 5, 6, 12]
 * 
 * pseudo code:
 * sort the input array,
 * make a variable result = []
 * loop through the array, 
 *    if can find the sum (target - currentValue), push triplet to result
 * return result
 */

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sumLeftRight = array[left] + array[right];
      let diff = targetSum - array[i];
      if (sumLeftRight === diff) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sumLeftRight < diff) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}
