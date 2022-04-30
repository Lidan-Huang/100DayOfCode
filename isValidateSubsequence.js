"use strict";

/**input: two non empty array of ints
 * if the second array is a subsequent of first array, return true
 * otherwise return false
 * one item or whole items are true with the same order
 * 
 * test cases:
 * 
 * [1, 2, 3], [2, 3] => true
 * [1, 2, 3], [1] => true
 * [1, 2, 3], [1, 2, 3] => true
 * [1, 2, 3], [1, 4] => false
 * [1, 2, 3], [1, 2, 3, 4] => false
 * 
 * 
 * pseudo code:
 * if subarray length bigger than array, return false
 * if subarray length is 1, just check whether array contains it or not
 * if subarray length is equal to array, check each position, if one position is different, return false, else true
 * loop through subarray, loop through the array,
 */

//runtime: o(n^2)
 function isValidateSubsequence1(array, subarray) {
  if (subarray.length > array.length) return false;

  let arrIdx = 0;
  let subArrIdx = 0;
  while (subArrIdx < subarray.length) {
    if (array.includes(subarray[subArrIdx])) {
      subArrIdx++;
      arrIdx = array.indexOf(subarray[subArrIdx]);
      array = array.slice(arrIdx+1);
    } else {
      return false;
    }
  }
  return true;
}

//runtime: o(n)
function isValidSubsequence2(array, sequence) {
  if (sequence.length > array.length) return false;
	let seqIdx = 0;
	for (let num of array) {
		if (num === sequence[seqIdx]) {
			seqIdx ++; 
		}
	}
	
	return seqIdx === sequence.length;
}	