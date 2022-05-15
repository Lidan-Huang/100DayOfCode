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


//runtime: O(n*2^n) | space: O(n*2^n)
function powerset2(array, idx=array.length - 1) {	
	if (idx < 0) return [[]];
	
	let item = array[idx];
	let subsets = powerset(array, idx - 1);
	let len = subsets.length;
	for (let i = 0; i < len; i++) {
		subsets.push(subsets[i].concat(item));
	}
	return subsets;
}

