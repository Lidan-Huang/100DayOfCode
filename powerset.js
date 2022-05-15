"use strict";

/**accepts: an array of unique integers
 * returns: powerset
 * 
 * test case:
 * [1,2] = [[], [1], [2], [1, 2]]
 * 
 */

function powerset(array) {
  let result = [[]];

  for (const item of array) {
    let len = result.length;
    for (let i = 0; i < len; i++) {
      result.push(result[i].concat(item));
    }
  }
  return result;
}


