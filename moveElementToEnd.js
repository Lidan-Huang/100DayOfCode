"use strict";

/**input: an array of integers; an integer
 * return: the same array with all the instances of that integer are moved to the 
 *        end of the array (change in place)
 * 
 * test case:
 * [2, 2, 1, 4, 2, 3], 2 => [1, 4, 3, 2, 2, 2] // order of 1, 4, 3 could be changed
 * [3, 2, 4, 2, 2, 5], 2 => [3, 4, 5, 2, 2, 2]
 * pseudo code:
 * make two pointers, left and right
 * loop through the array, check 
 *    if the item on left is equal to integer
 *      check right side, if right item is not equal to integer, change two values
 *      left++, right--
 *      right is equal to integer, right--;
 *    if left != integer
 *      right === integer; right --;
 *      else: left++, put right item to the beginning of that array
 * 
 */

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;
  
  while ( left < right) {
    let itemLeft = array[left];
    let itemRight = array[right];

    if (itemLeft === toMove) {
      if (itemRight !== toMove) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      } else {
        right--;
      }
    } else {
      if (itemRight === toMove) {
        right--;
      } else {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
      }
    }
  }
  return array;
}

//[2, 2, 1, 4, 2, 3], 2 =>  
//[3, 2, 4, 2, 2, 5], 2