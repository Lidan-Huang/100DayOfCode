"use strict";

/**given two non-empty arrays of integers with the same length
 * return true, if the number in the same position of second array is bigger than the first array
 * otherwise return false
 * 
 * test case:
 * [1, 2, 3], [2, 3, 5] => true
 * [1, 2, 3], [2, 3, 1] => false
 * 
 * pseudo code:
 * loop through two arrays, check if the second array's integer is bigger
 * than the first array's number
 * if not, return false
 * 
 * loop over the array, return true
 */


function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[0] < blueShirtHeights[0]) {
      if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
    } else {
      if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
    }
  }
  return true;
}
